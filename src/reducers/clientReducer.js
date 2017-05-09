import { INITIAL_STATE } from '../model';

const clientReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
      case "FETCH_CLIENTS":
          state = {
              ...state,
              client: {
                  ...state.client,
                  loading: action.loading
              }
          };

      break;

        case "FETCH_CLIENTS_SUCCESS":
            state = {
                ...state,
                client: {
                    ...state.client,
                    data: action.data,
                    loading: action.loading
                }
            };
          break;

        case "FETCH_CLIENTS_FAILURE":
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