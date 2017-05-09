import { connect } from "react-redux";
import { saveClient } from "../actions/clientActions";

import ClientForm from "../scenes/ClientForm/index";


const mapStateToProps = (state) => {
	return {

		data: state.clientReducer.client
	};
};

const mapDispatchToProps = (dispatch, props) => {


	return {

        saveClient: (client) => {
			dispatch(saveClient(client));
		}

	};
};

const ClientFormContainer = connect(mapStateToProps, mapDispatchToProps)(ClientForm)

export default ClientFormContainer



