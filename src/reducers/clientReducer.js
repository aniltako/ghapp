import {INITIAL_STATE} from '../model';

const FETCH_CLIENTS = "FETCH_CLIENTS";
const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "FETCH_CLIENTS_FAILURE";

const SAVE_CLIENT = "SAVE_CLIENT";
const SAVE_CLIENT_SUCCESS = "SAVE_CLIENT_SUCCESS";
const SAVE_CLIENT_FAILURE = "SAVE_CLIENT_FAILURE";

const REMOVE_CLIENT = "REMOVE_CLIENT";
const REMOVE_CLIENT_SUCCESS = "REMOVE_CLIENT_SUCCESS";
const REMOVE_CLIENT_FAILURE = "REMOVE_CLIENT_FAILURE";

const UPDATE_CLIENT = "UPDATE_CLIENT";
const UPDATE_CLIENT_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const UPDATE_CLIENT_FAILURE = "FUPDATE_CLIENT_FAILURE";

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_CLIENTS:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;

        case FETCH_CLIENTS_SUCCESS:
            state = {
                ...state,
                client: {
                    ...state.client,
                    data: action.data,
                    loading: action.loading
                }
            };
            break;

        case FETCH_CLIENTS_FAILURE:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;

        case SAVE_CLIENT:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;


        case SAVE_CLIENT_SUCCESS:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };

            break;

        case SAVE_CLIENT_FAILURE:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;

        case REMOVE_CLIENT:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };

            break;

        case REMOVE_CLIENT_SUCCESS:
            state = {
                ...state,
                client: {
                    ...state.client,
                    data: action.data,
                    loading: action.loading
                }
            };
            break;

        case REMOVE_CLIENT_FAILURE:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;

        case UPDATE_CLIENT:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;

        case UPDATE_CLIENT_SUCCESS:
            state = {
                ...state,
                client: {
                    ...state.client,
                    data: action.data,
                    loading: action.loading
                }
            };
            break;

        case UPDATE_CLIENT_FAILURE:
            state = {
                ...state,
                client: {
                    ...state.client,
                    loading: action.loading
                }
            };
            break;
    }
    return state;
};

export default clientReducer;