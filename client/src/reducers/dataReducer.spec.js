import dataReducer from './dataReducer';
import { createStore } from 'redux';
import * as actions from '../actions/action';
import * as Constants from '../constants/constants';

describe('Reducer', () => {
    let store, defaultState;
    beforeEach(() => {
        store = createStore((dataReducer));
        defaultState = {
            "filteredList": [],
            "isFilterApplied": false,
            "selectedProduct": null,
            "shipmentDetails": [],
        }
    })

    it('should return the default state', () => {
        const expectedState = {
            ...defaultState
        };
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle API_REQUEST_INVOKE event', () => {
        const spyAction = {
            type: Constants.API_REQUEST_INVOKE
        }
        const expectedState = {
            ...defaultState,
            "isLoader": true
        }
        store.dispatch(spyAction);
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle API_REQUEST_SUCCESS event', () => {
        const spyAction = {
            type: Constants.API_REQUEST_SUCCESS,
            payload: ['test data']
        }
        const expectedState = {
            ...defaultState,
            isLoader: false,
            shipmentDetails: ['test data']
        }
        store.dispatch(spyAction);
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle NAVIGATE_TO_DETAILS event', () => {
        const spyAction = {
            type: Constants.NAVIGATE_TO_DETAILS,
            payload: 'test selection'
        }
        const expectedState = {
            ...defaultState,
            selectedProduct: 'test selection'
        }
        store.dispatch(spyAction);
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle UPDATE_SHIPMENT_NAME', () => {
        const spyAction = {
            type: Constants.UPDATE_SHIPMENT_NAME,
            payload: {
                id: 'test001',
                name: 'new name'
            }
        }

        const appState = {
            ...defaultState,
            shipmentDetails: [
                {id: '00', name: 'test'},
                {id: 'test001', name: 'test'}
            ]
        }

        const expectedState = {
            ...defaultState,
            shipmentDetails: [
                {id: '00', name: 'test'},
                {id: 'test001', name: 'new name'}
            ]
        }
        expect(dataReducer(appState, spyAction)).toEqual(expectedState);
    })

    it('should handle SEARCH_SHIPMENT_ID', () => {
        const spyAction = {
            type: Constants.SEARCH_SHIPMENT_ID,
            payload: 'testID'
        }

        const appState = {
            ...defaultState,
            shipmentDetails: [
                {id: '00', name: 'test'},
                {id: 'testID', name: 'test'}
            ]
        }

        const expectedState = {
            ...defaultState,
            shipmentDetails: [
                {id: '00', name: 'test'},
                {id: 'testID', name: 'test'}
            ],
            isFilterApplied: true,
            filteredList: [
                {id: 'testID', name: 'test'}
            ]
        }
        expect(dataReducer(appState, spyAction)).toEqual(expectedState);
    })
});
