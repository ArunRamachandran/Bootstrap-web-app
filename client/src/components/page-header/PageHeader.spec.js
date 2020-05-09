import React from 'react';
import ShippingList from './index.jsx';
import { mount } from 'enzyme';

describe('PageHeader', () => {
    
    const wrapper = mount(<ShippingList/>);

    it('should render the page elements without failure', () => {
        expect(wrapper.exists('.navbar-left')).toEqual(true);
        expect(wrapper.exists('.navbar-right')).toEqual(true);
        expect(wrapper.exists('.navbar-title')).toEqual(true);
    })

    it('should render the page title within the title class', () => {
        expect(wrapper.find('.navbar-title').text()).toEqual('ProductHub')
    })
})
