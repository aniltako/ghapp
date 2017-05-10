import React, { Component } from "react";
import "./styles.css";
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class ClientDetailList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            client : {
                companyName: '',
                domainUrl: '',
                careersUrl: '',
                boardToken: '',
                linkedInUrl: ''
            }
        }
    }

    handleDeleteClient = () => {
        alert("ok");
    }

    closeFormModal = () => {
        this.setState({ showModal: false });
    }

    openFormModal = () => {
        this.setState({ showModal: true });
    }

    handleSaveClient = () => {

        this.props.onSaveClick(this.state.client);
    }

    handleUpdateClient = (client) => {

        var updateClient = this.state.client;

        updateClient.companyName = client.companyName;
        updateClient.domainUrl = client.domainUrl;
        updateClient.careersUrl = client.careersUrl;
        updateClient.boardToken = client.boardToken;
        updateClient.linkedInUrl = client.linkedInUrl;

        this.setState({
            client : updateClient
        });

        this.openFormModal();

    }

    handleChangeCompanyName = (e) => {

        var client = this.state.client;

        client.companyName = e.target.value;
        this.setState({
            client : client
        });
    }

    handleChangeDomainUrl = (e) => {

        var client = this.state.client;

        client.domainUrl = e.target.value;
        this.setState({
            client : client
        });
    }

    handleChangeCareersUrl = (e) => {

        var client = this.state.client;

        client.careersUrl = e.target.value;
        this.setState({
            client : client

        });
    }

    handleChangeBoardToken = (e) => {

        var client = this.state.client;

        client.boardToken = e.target.value;
        this.setState({
            client : client

        });
    }

    handleChangeLinkedInUrl = (e) => {

        var client = this.state.client;

        client.linkedInUrl = e.target.value;
        this.setState({
            client : client

        });
    }


    handleKeyUp = () => {
        var input, filter, table, tr, td, i;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        console.log(tr,"TR LENGTH");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            console.log(td,"td");
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    render() {

        var clientList = this.props.clients.data;

        var clientDetailList = [];

        if(typeof clientList !== 'undefined' && clientList.length >0){


            clientList.map(function(client,i){

                clientDetailList.push(

                    <tr key={i} className="header">
                        <td >{ client.greenhouse.companyName }</td>
                        <td >{ client.greenhouse.domainUrl }</td>
                        <td >{ client.greenhouse.careersUrl }</td>
                        <td >{ client.greenhouse.linkedInUrl }</td>
                        <td >{ client.greenhouse.boardToken }</td>
                        <td><button onClick={this.handleDeleteClient}>Delete</button></td>
                        <td><button onClick={this.handleUpdateClient.bind(this, client.greenhouse)}>Edit</button></td>
                    </tr>
                );
            }, this);
        }


        var resultDisplay = null;

        if ( clientDetailList.length > 0) {

            resultDisplay = <div className="container">

                        <div className="add-client-button">
                            <button type="button" onClick={ this.openFormModal } className="btn btn-primary add-client">Add Greenhouse Client</button>
                        </div>

                        <input type="text" id="searchInput" onKeyUp={this.handleKeyUp} placeholder="Search by company name..." title="Type in a name" />

                        <table id="myTable">
                            <tbody>
                            <tr className="header">
                                <th >Company Name</th>
                                <th >Domain Url </th>
                                <th >Careers Url </th>
                                <th >LinkedIn Url </th>
                                <th >Board Token </th>
                            </tr>

                            {clientDetailList}

                            </tbody>
                        </table>
                    </div>
        }else{

            resultDisplay = <div className="container">

                                <div className="add-client-button">
                                    <button type="button" onClick={ this.openFormModal } className="btn btn-primary add-client">Add Greenhouse Client</button>
                                </div>

                            </div>
        }


        return (

            <div className="container">

                <div className="static-modal">

                    <Modal show={this.state.showModal} onHide={this.closeFormModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create new Client</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="form-wrapper">

                                <div className="form-group row">
                                    <label htmlFor="company-name-" className="col-sm-2 col-form-label">Company Name</label>
                                    <div className="col-sm-10 company-name-field">
                                        <input className="form-control" onChange={ this.handleChangeCompanyName } value={this.state.client.companyName} type="text" id="companyName" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="domain-name" className="col-sm-2 col-form-label">Domain Url</label>
                                    <div className="col-sm-10 domain-name-field">
                                        <input className="form-control" onChange={ this.handleChangeDomainUrl } value={this.state.client.domainUrl} type="text" id="domain" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="careers-page" className="col-sm-2 col-form-label">Careers Page</label>
                                    <div className="col-sm-10 careers-page-field">
                                        <input className="form-control" onChange={ this.handleChangeCareersUrl } value={this.state.client.careersUrl} type="text" id="careersPage" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="linkedin-page" className="col-sm-2 col-form-label">Linkedin Page</label>
                                    <div className="col-sm-10 linkedin-page-name-field">
                                        <input className="form-control" onChange={ this.handleChangeLinkedInUrl } value={this.state.client.linkedInUrl} type="text" id="linkedInPage" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="gh-board-token" className="col-sm-2 col-form-label">GH Board Token</label>
                                    <div className="col-sm-10 fh-board-token-field">
                                        <input className="form-control" onChange={ this.handleChangeBoardToken } value={this.state.client.boardToken} type="text" id="fhBoardToken" />
                                    </div>
                                </div>

                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.closeFormModal}>Cancel</Button>
                            <Button onClick={this.handleSaveClient} bsStyle="primary">Save</Button>
                        </Modal.Footer>

                    </Modal>
                </div>

                {resultDisplay}
            </div>
        );

    }
}

export default ClientDetailList;