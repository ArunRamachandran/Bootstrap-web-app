import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { useHistory, withRouter } from "react-router-dom";
import { PageHeader} from '../components';
import {
    Home
} from '.'

class Journey extends Component {

    render () {

        const PageRoutes = () => (
            <div>
                <HashRouter>
                    <PageHeader/>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
        return (
            <Provider store={this.props.store}>
                <PageRoutes/>
            </Provider>
        )
    }
}

const mapDispatchToProps = {}

const mapStateToProps = state => ({
    appData: []
})

export default connect(mapStateToProps, mapDispatchToProps)(Journey);