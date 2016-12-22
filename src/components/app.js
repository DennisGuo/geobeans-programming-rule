import React, {Component} from 'react';
import {Link} from 'react-router';

import {docs} from './doc/docs';
import './app.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.title = "Geobeans 编程规则";
    this.links = this.getLinks();

    this.handleClickLink = this.handleClickLink.bind(this);
  }

  getLinks(){
    return docs.map((item)=>{
        return  <Link key={item.type} 
                      className="mdl-navigation__link" 
                      to={'/doc/' + item.type} 
                      onClick={ () => this.handleClickLink(item)}>{item.name}</Link>
    });
  }

  handleClickLink(item){
    
    let tabs = item.docs.map((doc)=>{
      let uri = "/doc/"+item.type+"/"+doc.file;
      return <Link key={uri} className="mdl-layout__tab" to={uri} >{doc.name}</Link>
    });

    this.setState({
      tabs:tabs
    })
  }


  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.title}</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              {this.links}
            </nav>
          </div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            {this.state.tabs}
          </div>
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

export default App;
