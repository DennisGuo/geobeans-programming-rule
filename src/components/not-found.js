import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
/**
 * 404 页面
 */
class NotFound extends Component {
    render() {
        return (
            <div className="mdl-grid not-found">
                <div className="mdl-cell mdl-cell--stretch">
                    <div className="mdl-card mdl-shadow--4dp">
                        <div className="mdl-card__title mdl-card--expand">
                            <h2 className="mdl-card__title-text">404 :(</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            您所访问的页面不存在!
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <Link
                                to="/"
                                className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                返回首页
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;