import React, {Component} from 'react';
import {Link } from 'react-router';
import {connect} from 'react-redux';

import News from './news/news'

/**
 * 应用APP
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.title = "Geobeans 编程规则";
    this.backHome = this.backHome.bind(this);
  }

  getLinks(type) {
    return this.props.docs.map((item) => {
      return <Link
        key={item.type}
        className={"mdl-navigation__link" + (type === item.type ? ' is-active':'')}
        to={'/doc/' + item.type}>{item.name}</Link>
    });
  }

  refreshTabs(type,name) {
    let items = this.props.docs.filter((obj)=>obj.type === type);
    if(items.length > 0 ){
      let item = items[0];
      let tabs = item.docs.map((doc) => {
        let uri = "/doc/" + item.type + "/" + doc.file;
        return <Link key={uri} className={"mdl-navigation__link" + (name === doc.file ? ' is-active' : '') } to={uri}>{doc.name}</Link>
      });
      this.setState({tabs:tabs})
    }
  }

  refreshLinks(type){
    let links = this.getLinks(type);
    this.setState({links:links});
  }

  handleParam(type,name){
      
      this.refreshLinks(type);
      if(name){
        this.refreshTabs(type,name);
      }
  }

  componentDidMount(){
    let type = this.props.docType;
    let name = this.props.docName;
    // console.log("componentDidMount prop[type=%s,name=%s]",type,name);
    this.handleParam(type,name);
  }


  componentWillReceiveProps(nextProps) {
     let type = nextProps.docType;
     let name = nextProps.docName;
     this.handleParam(type,name)
  }

 

  backHome(){
    //hashHistory.push('/');
    // console.log("backhome. / ");
    setTimeout(()=>{
      this.refreshLinks(null);
      this.setState({tabs:null});
    },100)
    
    window.location.hash = "/";
  
  }


  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top">

          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title" onClick={this.backHome}> {this.title}</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              {this.state.links}
            </nav>
          </div>
          
          { 
            this.state.tabs ?  (
              <div className="mdl-layout__header-row app-tabs-bar">        
                <nav className="mdl-navigation">
                  {this.state.tabs}
                </nav>
              </div>
            ) : null
          }
          
        </header>

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.title}</span>
          <nav className="mdl-navigation">
            {this.state.links}
          </nav>
        </div>

        <main className="mdl-layout__content" id="main-content">
            {
              this.props.children ? this.props.children : <News/>
            }
        </main>
      </div>
    );
  }
}

/**
 * 和redux进行链接
 */
App = connect((state)=>{
  return {
    docs:state.docs,
    docType:state.docType,
    docName:state.docName,
  }
})(App);

export default App;
