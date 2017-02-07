import React, {Component} from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate" style={{margin:'20px auto'}}></div>
        );
    }
}

export default Loading;