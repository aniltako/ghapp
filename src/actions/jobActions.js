const FETCH_TOTAL_JOBS = "FETCH_TOTAL_JOBS";
const FETCH_TOTAL_JOBS_SUCCESS = "FETCH_TOTAL_JOBS_SUCCESS";
const FETCH_TOTAL_JOBS_FAILURE = "FETCH_TOTAL_JOBS_FAILURE";


export function fetchTotalJobs(token) {

    return function (dispatch) {

        dispatch({type: FETCH_TOTAL_JOBS, loading: true})

        return fetch("https://api.greenhouse.io/v1/boards/"+token+"wework/jobs", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                dispatch(fetchTotalJobsSuccess(responseData))
            })
            .catch((error) => {
                dispatch(fetchTotalJobsFailure(error))
            });
    }

}

export function fetchTotalJobsSuccess(clients) {

    return function (dispatch) {

        if (clients.length > 0) {

            dispatch({type: FETCH_TOTAL_JOBS_SUCCESS, data: clients, loading: false})
        } else {

            dispatch({type: FETCH_TOTAL_JOBS_SUCCESS, data: clients, loading: false})
        }

    }

}

export function fetchTotalJobsFailure(error) {
    return {
        type: FETCH_TOTAL_JOBS_FAILURE, loading: false
    };
}




