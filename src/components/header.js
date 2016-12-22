import React, {Component} from 'react';
import {Link} from 'react-router';

const docs = [
    {
        file: 'java.md',
        name: "JAVA后端"
    }, {
        file: 'android.md',
        name: "Android"
    }, {
        file: 'fontend.md',
        name: "前端"
    }
];

/**
 * 标题菜单
 */
class Header extends Component {

    constructor(props) {
        super(props);
        this.title = "Geobeans 编程规则";
        this.links = docs.map((doc, index) => {
            return (
                <Link
                    key={index}
                    className="mdl-navigation__link"
                    to={'/doc/' + doc.file}
                    activeClassName="active">{doc.name}</Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{this.title}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            {this.links}
                        </nav>
                    </div>
                </div>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">{this.title}</span>
                    <nav className="mdl-navigation">
                        {this.links}
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;