import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import Form from "../../components/ClientForm/index";
import "./styles.css";

class ClientForm extends Component {

    render() {

        return (
            <div>
                <NavBar />

                <div className="container" >

                    <Form
                        onClickSubmit={ (client) => this.props.saveClient(client) }
                    />

                </div>

            </div>
        );
    }
}

export default withRouter(ClientForm);




