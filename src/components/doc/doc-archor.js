import React, {Component} from 'react';

window.zenscroll = require('zenscroll/zenscroll.js');
window.getMarkdownBodyByText = (text)=>{
    let container = document.getElementById('markdown-body');
    let childs = container.children;
    let node = container;
    for(let i=0;i<childs.length;i++){
        let el = childs[i];
        if(el.innerText === text){
            node = el;
            break;
        }
    }
    console.log(node);
    return node;
};
/**
 * 目录
 */
class DocArchor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    parseArchorJson(archor, preLevel) {
        let obj = {};
        //let sameLevel = true;

        let tmpLevel = preLevel;
        for (let i = 0; i < archor.length; i++) {

            let item = archor[i];
            let title = item.text;
            let level = item.level;

            if (level - preLevel === 1 || (level - tmpLevel === 0 && i > 1)) {
                let sub = archor.slice(i + 1);
                obj[preLevel + "." + i + "@" + title] = this.parseArchorJson(sub, level);
                tmpLevel = level;
            } else if (level - tmpLevel <= 0) {
                break;
            }
        }
        return obj;
    }

    parseArchorUl(json) {
        if (json) {
            let ul = ["<ul>"]
            Object
                .keys(json)
                .map((key) => {
                    let child = json[key];
                    ul.push("<li>");
                    let text = key.split("@")[1];
                    let link = '<a href="javascript:zenscroll.createScroller(document.getElementById(\'main-content\'),500,30).to(getMarkdownBodyByText(\''+text+'\'))">'+text+'</a>';
                    ul.push(link);
                    if (child) {
                        ul.push(this.parseArchorUl(child));
                    }
                    ul.push("</li>");
                    return true;
                });

            ul.push("</ul>");
            return ul.join('');
        } else {
            return null;
        }
    }

    parseArchor(archor) {
        if (archor && archor.length > 0) {
            let json = this.parseArchorJson(archor, 0);
            let ul = this.parseArchorUl(json);
            this.setState({
                ul: {
                    __html: ul
                }
            });
            //console.log(ul); archor.map((item,index)=>{     return true; });
        }
    }

    componentDidMount() {
        let archor = this.props.archor;
        this.parseArchor(archor);
    }
    componentWillReceiveProps(nextProps){
        let archor = nextProps.archor;
        this.parseArchor(archor);
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.state.ul} className="doc-archor"></div>
        );
    }
}

export default DocArchor;