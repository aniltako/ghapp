const FETCH_CLIENTS = "FETCH_CLIENTS";
const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "FETCH_CLIENTS_FAILURE";
const SAVE_CLIENT = "SAVE_CLIENT";
const SAVE_CLIENT_SUCCESS = "SAVE_CLIENT_SUCCESS";
const SAVE_CLIENT_FAILURE = "SAVE_CLIENT_FAILURE";

export function fetchClients() {
      return function (dispatch) {

            dispatch({type: FETCH_CLIENTS, loading: true})

            return fetch("http://localhost:4000/api/greenhouseClient", {
                method: 'GET',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            })
            .then((response) => response.json())
            .then((responseData) => {
                 dispatch(fetchClientsSuccess(responseData))
            })
            .catch((error) => {
                 dispatch(fetchClientsFailure(error))
            });
      }
}

export function fetchClientsSuccess(clients) {

      return function(dispatch){

            if( clients.length > 0 ){

                dispatch({type: FETCH_CLIENTS_SUCCESS, data: clients, loading: false})
            }else{

                dispatch({type: FETCH_CLIENTS_SUCCESS, data: clients, loading: false})
            }

      }

}

export function fetchClientsFailure(error) {
      return {
          type: FETCH_CLIENTS_FAILURE, loading: false
      };
}

export function saveClient(client) {
    return function (dispatch) {

        dispatch({type: SAVE_CLIENT, loading: true})

        return fetch('http://localhost:4000/api/greenhouseClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyName: client.companyName,
                domainUrl: client.domainUrl,
                careersUrl: client.careersUrl,
                boardToken: client.boardToken,
                linkedInUrl: client.linkedInUrl
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            dispatch(saveClientSuccess(responseData))
        })
        .catch((error) => {
            dispatch(saveClientFailure(error))
        });
    }
}

export function saveClientSuccess(responseData) {

    return function(dispatch){

        if( responseData.cas !== null ){

            dispatch({type: SAVE_CLIENT_SUCCESS, loading: false})
        }else{

            dispatch(saveClientFailure)
        }

    }
}

export function saveClientFailure(error) {
    return {
        type: SAVE_CLIENT_FAILURE, loading: false
    };
}

