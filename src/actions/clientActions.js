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
const UPDATE_CLIENT_SUCCESS = "UPDATE_CLIENT_SUCCESS";
const UPDATE_CLIENT_FAILURE = "UPDATE_CLIENT_FAILURE";


const REFRESH_CLIENT = "REFRESH_CLIENT";
const REFRESH_CLIENT_SUCCESS = "REFRESH_CLIENT_SUCCESS";
const REFRESH_CLIENT_FAILURE = "REFRESH_CLIENT_FAILURE";



export function fetchClients() {

    return function (dispatch) {

        dispatch({type: FETCH_CLIENTS, loading: true})

        return fetch("http://localhost:8090/api/greenhouseClient", {
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

    return function (dispatch) {

        if (clients.length > 0) {

            dispatch({type: FETCH_CLIENTS_SUCCESS, data: clients, loading: false})
        } else {
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

        return fetch('http://localhost:8090/api/greenhouseClient', {
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

    return function (dispatch) {

        if (responseData.cas !== null) {
            dispatch({type: SAVE_CLIENT_SUCCESS, loading: false})

        } else {
            dispatch(saveClientFailure)
        }
    }
}

export function saveClientFailure(error) {
    return {
        type: SAVE_CLIENT_FAILURE, loading: false
    };
}


export function removeClient(id) {

    return function (dispatch) {

        dispatch({type: REMOVE_CLIENT, loading: true})

        return fetch("http://localhost:8090/api/greenhouseClient/" + id, {
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

    return function (dispatch) {

        if (responseData.cas !== null) {
            dispatch({type: REMOVE_CLIENT_SUCCESS, loading: false})
        } else {
            dispatch(removeClientFailure)
        }
    }
}

export function removeClientFailure(error) {
    return {
        type: REMOVE_CLIENT_FAILURE, loading: false
    };
}

export function updateClient(client) {

    return function (dispatch) {

        dispatch({type: UPDATE_CLIENT, loading: true})

        return fetch('http://localhost:8090/api/greenhouseClient/'+client.id, {
            method: 'PUT',
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
                dispatch(updateClientSuccess(responseData))
            })
            .catch((error) => {
                dispatch(updateClientFailure(error))
            });
    }
}

export function updateClientSuccess(responseData) {

    return function (dispatch) {

        if (responseData.cas !== null) {
            dispatch({type: UPDATE_CLIENT_SUCCESS, loading: false})
        } else {
            dispatch(updateClientFailure)
        }
    }
}

export function updateClientFailure(error) {
    return {
        type: UPDATE_CLIENT_FAILURE, loading: false
    };
}

export function refreshClient(id) {


    return function (dispatch) {


        dispatch({type: REFRESH_CLIENT, loading: true})


        return fetch('http://localhost:8090/api/greenhouseClient/totalJobs/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                dispatch(refreshClientSuccess(responseData))
            })
            .catch((error) => {
                dispatch(refreshClientFailure(error))
            });
    }
}


export function refreshClientSuccess(clients) {


    return function (dispatch) {

        dispatch({type: REFRESH_CLIENT_SUCCESS, loading: false})
    }
}


export function refreshClientFailure(error) {


    return function (dispatch) {

        dispatch({type: REFRESH_CLIENT_FAILURE, loading: false})
    }
}



