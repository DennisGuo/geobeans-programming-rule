import React, {Component} from 'react';
import axios from 'axios';
import Loading from './loading'
class News extends Component {


    constructor(props) {
        super(props);
        this.state = {
            news:[],
            loading:true
        };
        this.cats = ['java','android','javascript','web','oracle','mysql','gis'];
    }

    componentDidMount(){
        this.loadNews();
    }

     loadNews(){
         this.setState({loading:true});
         this.cats.map((cat)=>{
            this.loadNewsOfCategory(cat);
            return true;
         });
        
    }

    loadNewsOfCategory(name){
        let before = new Date().getTime();
        let path = 'http://feed.cnblogs.com/blog/sitecateogry/'+name+'/rss';
        this.loadRSS(path).then((res)=>{
            let data = res.data;
            console.log(data);
            let arr = data.feed.entry;
            arr.map((item)=>{
                item.cat = name;
                return item;
            })
            this.setState({
                news:this.state.news.concat(arr)
            })
            let after = new Date().getTime();
            console.log("耗时："+(after - before) + " ms");
            this.setState({loading:false});
        })  
    }

    loadRSS(rss){
        console.log("load rss data : " + rss);
        return axios.get('http://ciyuer.com:7100/proxy/' + encodeURIComponent(rss));
    }
                                   
    render() {
        return (
                <div >
                    {this.state.loading ? 
                        <Loading/> : 
                        this.state.news.map((item)=>{
                            return <div className="mdl-card mdl-shadow--2dp" key={item.id} style={{width:'100%'}}>
                                        <div className="mdl-card__title">
                                            <h2 className="mdl-card__title-text"><a target="_blank" href={item.id}>{item.title}</a></h2>
                                        </div>
                                        <div className="mdl-card__supporting-text">
                                            <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                                        </div>
                                    </div>
                        }) 
                    }
                </div>
        );
    }
}

export default News;