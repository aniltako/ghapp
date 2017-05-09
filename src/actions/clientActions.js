import $ from "jquery";
import store from "../store";

const FETCH_CLIENTS = "FETCH_CLIENTS";
const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
const FETCH_CLIENTS_FAILURE = "FETCH_CLIENTS_FAILURE";
const REMOVE_CLIENT = "REMOVE_CLIENT";
const REMOVE_CLIENT_SUCCESS = "REMOVE_CLIENT_SUCCESS";
const REMOVE_CLIENT_FAILURE = "REMOVE_CLIENT_FAILURE";

export function fetchClients() {
  return function (dispatch) {

    dispatch({type: FETCH_CLIENTS, loading: true})

    return fetch("http://localhost:3000/api/greenhouseClient", {
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
/*
export function saveClient() {
    return function (dispatch) {

        dispatch({type: "FETCH_CLIENTS", loading: true})

        return fetch('http://localhost:4000/api/greenhouseClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Hubot',
                login: 'hubot',
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            dispatch(fetchClientsSuccess(responseData))
        })
        .catch((error) => {
            dispatch(fetchClientsFailure(error))
        });
    }
}*/


export function removeClient(id) {
    return function (dispatch) {

        dispatch({type: REMOVE_CLIENT, loading: true})

        return fetch("http://localhost:3000/api/greenhouseClient/"+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                dispatch(removeClientSuccess(responseData))
            })
            .catch((error) => {
                dispatch(removeClientFailure(error))
            });
    }
}

export function removeClientSuccess(responseData) {

    return function(dispatch){

        if( responseData.cas !== null ){

            dispatch({type: REMOVE_CLIENT_SUCCESS,loading: false})
        }else{
            dispatch(removeClientFailure)
        }
    }
}

export function removeClientFailure(error) {
    return {
        type: REMOVE_CLIENT_FAILURE, loading: false
    };
}

