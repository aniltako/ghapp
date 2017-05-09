import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import Form from "../../components/ClientForm/index";
import "./styles.css";

class ClientForm extends Component {

    componentDidMount(){
        console.log("ComponentDidMount");
    }

    render() {

        return (
            <div>
                <NavBar />

                <div className="container" >

                    <Form />

                </div>

            </div>
        );
    }
}

export default withRouter(ClientForm);




