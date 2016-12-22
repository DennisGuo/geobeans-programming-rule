import React, {Component} from 'react';
import {Link} from 'react-router';

import docs from '../config/docs';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.title = "Geobeans 编程规则";
    this.links = this.getLinks();

    this.handleClickLink = this
      .handleClickLink
      .bind(this);
  }

  getLinks() {
    return docs.map((item) => {
      return <Link
        key={item.type}
        className="mdl-navigation__link"
        to={'/doc/' + item.type}
        onClick={() => this.handleClickLink(item)}>{item.name}</Link>
    });
  }

  handleClickLink(item) {

    let tabs = item
      .docs
      .map((doc) => {
        let uri = "/doc/" + item.type + "/" + doc.file;
        return <Link key={uri} className="mdl-layout__tab" to={uri}>{doc.name}</Link>
      });

    this.setState({tabs: tabs})
  }

  componentDidUpdate(){
    window.componentHandler.upgradeDom();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.title}</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              {this.links}
            </nav>
          </div>
          <Tabs tabs={this.state.tabs}/>
        </header>

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.title}</span>
          <nav className="mdl-navigation">
            {this.links}
          </nav>
        </div>

        <main className="mdl-layout__content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

function Tabs(props) {
  if (props.tabs) {
    return (
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
        {props.tabs}
      </div>
    )
  } else {
    return null;
  }
}

export default App;
