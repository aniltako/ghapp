import { connect } from "react-redux";
import { fetchClients } from "../actions/clientActions";

import ClientForm from "../scenes/ClientForm/index";


const mapStateToProps = (state) => {
	return {

		data: state.clientReducer.client
	};
};

const mapDispatchToProps = (dispatch, props) => {


	return {

        fetchClients: () => {
			dispatch(fetchClients());
		}

	};
};

const ClientFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClientForm)

export default ClientFormContainer



