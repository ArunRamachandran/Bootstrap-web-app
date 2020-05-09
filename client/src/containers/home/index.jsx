import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from '../../components/page-header/index.jsx';

class Home extends Component {

    render () {
        return (
            <div className="application-container">
                <PageHeader/>
            </div>
        )
    }
}