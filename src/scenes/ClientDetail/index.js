import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import ClientDetailList from "../../components/ClientDetailList/index";
import "./styles.css";

class ClientDetail extends Component {

    componentDidMount(){
        console.log("ComponentDidMount");
    }

    render() {

        return (
            <div>
                <NavBar />

                <div className="container" >

                    <ClientDetailList
                        clients={this.props.data}
                        onDeleteClick={ (id) => this.props.removeClient(id) }
                    />


                </div>

            </div>
        );
    }
}

export default withRouter(ClientDetail);




