import React, { Component } from "react";
import "./styles.css";
import {browserHistory} from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import _ from 'lodash';

class ClientDetailList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            showDeleteModal: false,
            showErrorModel: false,
            clientId: '',
            formType: '',
            client : {
                companyName: '',
                domainUrl: '',
                careersUrl: '',
                boardToken: '',
                linkedInUrl: ''
            }
        }
    }

    handleKeyUp = () => {
        var input, filter, table, tr, td, i;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("client-table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    openFormModal = (e) => {
        if(e.target.value == "updateClient"){

            this.setState({
                showModal: true,
                formType: "Update Client"
            });
        }else{
            this.setState({

                showModal: true,
                formType: "Create New Client",
                client : {
                    companyName: '',
                    domainUrl: '',
                    careersUrl: '',
                    boardToken: '',
                    linkedInUrl: ''
                }
            });

        }
    }

    closeFormModal = () => {
        this.setState({
            showModal: false,

        });
    }

    handleSaveClient = () => {

        var companyName = this.state.client.companyName;

        if( companyName !== '' ){
            this.props.onSaveClick(this.state.client);
            this.setState({ showModal: false});
            browserHistory.push('/');
        }else{
            this.openErrorModal();
        }
    }

    openDeleteModal = (e) => {
        this.setState({
            showDeleteModal: true,
            clientId: e.target.value
        });
    }

    closeDeleteModal = () => {
        this.setState({
            showDeleteModal: false,
        });
    }

    handleDeleteConfirmClick = () => {
        this.props.onDeleteClick(this.state.clientId);
        this.setState ({
            showDeleteModal: false
        })
        browserHistory.push('/')
    }

    openErrorModal = () => {
        this.setState({
            showErrorModal: true,
        });
    }

    closeErrorModal = () => {
        this.setState({
            showErrorModal: false,
        });
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

    openUpdateClientModal = (client, e) => {

        var tmpClient = this.state.client;

        tmpClient.companyName = client.companyName;
        tmpClient.domainUrl = client.domainUrl;
        tmpClient.careersUrl = client.careersUrl;
        tmpClient.boardToken = client.boardToken;
        tmpClient.linkedInUrl = client.linkedInUrl;

        this.setState({
            client : tmpClient,
            clientId: client.id
        });
        this.openFormModal(e);
    }

    handleUpdateClient = () => {

        var updatedClient = {};

        updatedClient.id = this.state.clientId;
        _.merge(updatedClient, this.state.client);

        this.props.onUpdateClick(updatedClient);
        this.setState({ showModal: false});
        browserHistory.push('/');
    }

    handleRefresh = (id) => {

        this.props.onRefreshClick(id);
    }

    render() {

        var  button = null;

        if(this.state.formType == "Create New Client"){
            button = <Button onClick={this.handleSaveClient} bsStyle="primary">Save</Button>
        }else{
            button = <Button onClick={this.handleUpdateClient}  bsStyle="primary">Update</Button>
        }

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
                        <td >{ client.greenhouse.totalJobs }</td>
                        <td >
                            <button className="glyphicon glyphicon-trash delete-client-btn" value={client.greenhouse.id} onClick={this.openDeleteModal}></button>
                            <button value="updateClient" className="glyphicon glyphicon-pencil edit-client-btn" onClick={this.openUpdateClientModal.bind(this, client.greenhouse)}></button>
                            <button className="glyphicon glyphicon-refresh refresh-client-btn" onClick={this.handleRefresh.bind(this, client.greenhouse.id)}></button>
                        </td>
                    </tr>
                );
            }, this);
        }

        var resultDisplay = null;

        if ( clientDetailList.length > 0) {

            resultDisplay = <div className="client-container">

                        <div className="add-client-button">
                            <button value="addClient" type="button" onClick={ this.openFormModal } className="btn btn-primary add-client">Add Greenhouse Client</button>
                        </div>
                        <input type="text" id="searchInput" onKeyUp={this.handleKeyUp} placeholder="Search by company name..." title="Type in a name" />

                        <table id="client-table">
                            <tbody>
                            <tr className="header">
                                <th >Company Name</th>
                                <th >Domain Url </th>
                                <th >Careers Url </th>
                                <th >LinkedIn Url </th>
                                <th >Board Token </th>
                                <th >Total Jobs </th>

                            </tr>

                            {clientDetailList}

                            </tbody>
                        </table>
                    </div>
        }else{

            resultDisplay = <div className="client-container">
                                <div className="add-client-button">
                                    <button value="addClient" type="button" onClick={ this.openFormModal } className="btn btn-primary add-client">Add Greenhouse Client</button>
                                </div>
                            </div>
        }

        return (

            <div className="container">


                    <Modal show={this.state.showModal} onHide={this.closeFormModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.formType}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="form-wrapper">

                                <div className="form-group row">
                                    <label htmlFor="company-name-" className="col-sm-2 col-form-label">Company Name</label>
                                    <div className="col-sm-10 company-name-field">
                                        <input className="form-control" required="required" onChange={ this.handleChangeCompanyName } value={this.state.client.companyName} type="text" id="companyName" />
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

                            {button}

                        </Modal.Footer>

                    </Modal>

                    <Modal bsSize="small" show={this.state.showDeleteModal} onHide={this.closeDeleteModal}>
                        <Modal.Header closeButton>
                            <div className="Delete-popup-container">

                                <div className="Delete-popup-content">
                                    <strong>Are you sure you want to delete this item?</strong>
                                    This can not be undone.
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button onClick={this.handleDeleteConfirmClick} bsStyle="primary">Delete Item</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal bsSize="small" show={this.state.showErrorModal} onHide={this.closeErrorModal}>
                        <Modal.Header closeButton>
                            <div className="Error-popup-container">

                                <div className="Error-popup-content">
                                    <strong>Please enter the mandatory field (Company Name)</strong>
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button onClick={this.closeErrorModal} bsStyle="primary">Ok</Button>
                        </Modal.Footer>
                    </Modal>

                {resultDisplay}

            </div>
        );
    }
}

export default ClientDetailList;