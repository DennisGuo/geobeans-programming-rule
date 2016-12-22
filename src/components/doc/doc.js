import React, {Component} from 'react';
import {markdown} from 'markdown';

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
    }

    parseMdTree(tree){
        let archor = [];
        tree.map((obj)=>{
            //目录
            if(Array.isArray(obj)){
                if(obj[0] === 'header'){
                    archor.push({text:obj[2],level:obj[1].level});
                }
            }
            return obj;
        });
        console.log(archor);
        this.setState({
            archor:archor
        });
    }

    loadMarkdown(name) {
        if(name){
            let url = '/docs/' + name;
            console.log("fetch:%s", url);
            fetch(url).then((response) => response.text()).then((body) => {
                // console.log("url response:%s", url);
                // console.log(body);
                let html = markdown.toHTML(body);
                console.log(html);
                this.setState({
                    html: {
                        __html: html
                    } //React.createElement("div",[],html)
                })
                let tree = markdown.parse(body);
                this.parseMdTree(tree);
                console.log(tree);
                //document.body.innerHTML = body
            })
        }
    }

    componentDidMount() {
        let name = this.props.params.name;
        this.setState({
            // route components are rendered with useful information, like URL params
            name: name
        });
        this.loadMarkdown(name)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("state=%s,nextProps.name=%s,nextState.name=%s",this.state.name,ne
        // xtProps.params.name,nextState.name);
        let rs = true;
        let name = nextProps.params.name;
        if (this.state.name !== name && name !== nextState.name) {

            this.setState({
                // route components are rendered with useful information, like URL params
                name: name
            })
            this.loadMarkdown(name)
            // console.log('param:'+nextProps.params.name); console.log(this.state.name);
            rs = false;
        } else {
            rs = true;

        }
        console.log("update : %s", rs);
        return rs;
    }

    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--2-col mdl-cell--12-col-tablet mdl-cell--hide-phone" >
                    <DocArchor archor={this.state.archor}/>
                </div>
                <div className="mdl-cell mdl-cell--10-col mdl-cell--12-col-tablet ">
                    <article dangerouslySetInnerHTML={this.state.html} className="markdown-body"></article>
                </div>
            </div>
        );
    }
}

export default Doc;