import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ClientDetail from "./containers/ClientDetail";
import ClientForm from "./containers/ClientForm";
import { Router, Route, browserHistory , IndexRoute} from "react-router";
import store from "./store";
import 'whatwg-fetch';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" >
				<Route path="client-list" component={ClientDetail} />
				<Route path="add-client" component={ClientForm} />

				<IndexRoute component={ClientDetail} />
			</Route>
		</Router>
	</Provider>
  ,document.getElementById('root')
);
