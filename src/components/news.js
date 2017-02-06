import React, {Component} from 'react';

class News extends Component {


    render() {
        return (
            <ul className="demo-list-three mdl-list">
                {
                    this.props.news.map((item)=>{
                        return <li className="mdl-list__item mdl-list__item--three-line" key={item.id}>
                                    <span className="mdl-list__item-primary-content">
                                    <i className="material-icons mdl-list__item-avatar">person</i>
                                    <span>{item.title}</span>
                                    <span className="mdl-list__item-text-body">
                                       {item.summary}
                                    </span>
                                    </span>
                                    <span className="mdl-list__item-secondary-content">
                                        <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                                    </span>
                                </li>
                    }) 
                }

            </ul>
        );
    }
}

export default News;