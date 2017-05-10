import { connect } from "react-redux";
import { ffetchTotalJobs } from "../actions/jobActions";

import JobDetail from "../scenes/JobDetail/index";

const mapStateToProps = (state) => {
    return {

        data: state.jobReducer.jobData
    };
};

const mapDispatchToProps = (dispatch, props) => {


    dispatch(fetchTotalJobs())
    return {

        fetchTotalJobs: (token) => {
            dispatch(fetchTotalJobs(token));
        }


    };
};

const ClientDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ClientDetail)

export default ClientDetailContainer



