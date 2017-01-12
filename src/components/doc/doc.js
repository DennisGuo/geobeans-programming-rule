import React, {Component} from 'react';
import {markdown} from 'markdown';
import {connect} from 'react-redux';

import {setDocName, setDocType} from '../../store/actions';
import DocArchor from './doc-archor'

import 'github-markdown-css/github-markdown.css'
import './doc.css'
/**
 * 文档显示
 */
class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loading = false;
    }

    parseMdTree(tree) {
        let archor = [];
        tree.map((obj) => {
            //目录
            if (Array.isArray(obj)) {
                if (obj[0] === 'header') {
                    archor.push({text: obj[2], level: obj[1].level});
                }
            }
            return obj;
        });
        // console.log(archor);
        this.setState({archor: archor});
    }

    loadMd(type,name) {
        if (name && !this.loading) {
            this.loading = true;
            let url = '/docs/' + type+"/"+name;
            // console.log("fetch:%s", url);
            fetch(url).then((response) => response.text()).then((body) => {
                // console.log("url response:%s", url); console.log(body);
                let html = markdown.toHTML(body,"Maruku");

                // console.log(html);
                this.setState({
                    html: {
                        __html: html
                    } //React.createElement("div",[],html)
                })
                let tree = markdown.parse(body);
                this.parseMdTree(tree);
                // console.log(tree); document.body.innerHTML = body
                this.loading = false;
            })
        }
    }

    componentDidMount() {
        let name = this.props.params.name;
        let type = this.props.params.type;
        this.handleDoc(type, name);
    }

    handleDoc(type, name) {
        // this.setState({
        //     // route components are rendered with useful information, like URL params
        //     name: name
        // });
        this.loadMd(type,name)
        
        this
            .props
            .setDocType(type);
        this
            .props
            .setDocName(name);

    }

    componentWillReceiveProps(nextProps){
        let name = nextProps.params.name;
        let type = nextProps.params.type;
        this.handleDoc(type, name);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log("state=%s,nextProps.name=%s,nextState.name=%s",this.state.name,ne
    //     // xtProps.params.name,nextState.name);
    //     let rs = true;
    //     let name = nextProps.params.name;
    //     let type = nextProps.params.type;
    //     if (this.state.name !== name && name !== nextState.name) {

    //         this.handleDoc(type, name);
    //         // console.log('param:'+nextProps.params.name); console.log(this.state.name);
    //         rs = false;
    //     } else {
    //         rs = true;

    //     }
    //     // console.log("update : %s", rs);
    //     return rs;
    // }

    render() {
        return (
            <div className="mdl-grid">
                <div
                    className="mdl-cell mdl-cell--2-col mdl-cell--12-col-tablet mdl-cell--hide-phone">
                    <DocArchor archor={this.state.archor}/>
                </div>
                <div className="mdl-cell mdl-cell--10-col mdl-cell--12-col-tablet ">
                    <article dangerouslySetInnerHTML={this.state.html} className="markdown-body" id="markdown-body"></article>
                </div>
            </div>
        );
    }
}

/**
 * 连接redux
 */
Doc = connect((state) => {
    return {}
}, (dispatch) => {
    return {
        setDocName: (name) => {dispatch(setDocName(name))},
        setDocType: (type) => {dispatch(setDocType(type))}
    }
})(Doc);

export default Doc;