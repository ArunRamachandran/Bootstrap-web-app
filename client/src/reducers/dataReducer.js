import * as Constants from '../constants/constants';

const initialState = {
    shipmentDetails: [],
    selectedProduct: null,
    isFilterApplied: false,
    filteredList: []
};

const appData = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Constants.API_REQUEST_INVOKE:
            return {
                ...state,
                isLoader: true
            }

        case Constants.API_REQUEST_SUCCESS:
            return {
                ...state,
                isLoader: false,
                shipmentDetails: [...state.shipmentDetails, ...payload]
            }

        default:
            return state;
    }
}

export default appData;