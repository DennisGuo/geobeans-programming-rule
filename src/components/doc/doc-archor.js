import React, {Component} from 'react';

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
            } else if (level - tmpLevel < 0) {
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
                    ul.push(key.split("@")[1]);
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log("next_prop:\n%s ; next_state:\n%s", JSON.stringify(nextProps.archor), JSON.stringify(nextState.ul));

        if (!nextProps.archor && !nextState.ul) 
            return false;
        
        let archor = nextProps.archor;
        this.parseArchor(archor);

        return true;
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.state.ul} className="doc-archor"></div>
        );
    }
}

export default DocArchor;