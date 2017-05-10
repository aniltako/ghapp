import {INITIAL_STATE} from '../model';

const FETCH_TOTAL_JOBS = "FETCH_TOTAL_JOBS";
const FETCH_TOTAL_JOBS_SUCCESS = "FETCH_TOTAL_JOBS_SUCCESS";
const FETCH_TOTAL_JOBS_FAILURE = "FETCH_TOTAL_JOBS_FAILURE";

const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case FETCH_TOTAL_JOBS:
            state = {
                ...state,
                jobData: {
                    ...state.jobData,
                    loading: action.loading
                }
            };
            break;

        case FETCH_TOTAL_JOBS_SUCCESS:
            state = {
                ...state,
                jobData: {
                    ...state.jobData,
                    totalJobs: action.totalJobs,
                    loading: action.loading
                }
            };
            break;

        case FETCH_TOTAL_JOBS_FAILURE:
            state = {
                ...state,
                jobData: {
                    ...state.jobData,
                    loading: action.loading
                }
            };
            break;
    }
    return state;
};

export default jobReducer;