import { connect } from "react-redux";
import { fetchClients } from "../actions/clientActions";

import ClientDetail from "../scenes/ClientDetail/index";


const mapStateToProps = (state) => {
	return {

		data: state.clientReducer.client
	};
};

const mapDispatchToProps = (dispatch, props) => {

    
    dispatch(fetchClients())
	return {

        fetchClients: () => {
			dispatch(fetchClients());
		}

	};
};

const ClientDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ClientDetail)

export default ClientDetailContainer



