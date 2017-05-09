import $ from "jquery";
import store from "../store";

export function fetchClients() {
  return function (dispatch) {

    dispatch({type: "FETCH_CLIENTS", loading: true})

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

    console.log("CLIENTS :: " ,clients);


  return function(dispatch){
    
    if( clients.length > 0 ){

        dispatch({type: "FETCH_CLIENTS_SUCCESS", data: clients, loading: false})
    }else{

        dispatch({type: "FETCH_CLIENTS_SUCCESS", data: clients, loading: false})
    }
   
  }
}

export function fetchClientsFailure(error) {
  return {
    type: "FETCH_CLIENTS_FAILURE", loading: false
  };
}
