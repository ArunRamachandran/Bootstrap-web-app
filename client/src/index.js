import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Journey from './containers/Journey.jsx';
import store from './store/store';
//import './index.less';

class App extends Component {
    render() {
        return (
            <div>
                <Journey store={store}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));