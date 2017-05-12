import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "../../components/NavBar/index";
import ClientDetailList from "../../components/ClientDetailList/index";
import "./styles.css";

class ClientDetail extends Component {

    render() {

        return (
            <div>
                <NavBar />
                <div className="container" >
                    <ClientDetailList
                        clients={this.props.data}
                        onSaveClick={ (client) => this.props.saveClient(client) }
                        onDeleteClick={ (id) => this.props.removeClient(id) }
                        totalJobsdata= {this.props.totalJobsData}
                        onUpdateClick={ (client) => this.props.updateClient(client) }
                        onRefreshClick={ (id) => this.props.refreshClient(id) }
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(ClientDetail);




