import React, { Component } from "react";
import "./styles.css";
import {browserHistory} from 'react-router';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class ClientDetailList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            showDeleteModal: false,
            showErrorModel: false,
            clientId: '',
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

    handleDeleteConfirmClick = () => {
        this.props.onDeleteClick(this.state.clientId);
        this.setState ({
            showDeleteModal: false
        })
        browserHistory.push('/clientList')

    }


    openFormModal = () => {
        this.setState({
            showModal: true,
            client : {
                companyName: '',
                domainUrl: '',
                careersUrl: '',
                boardToken: '',
                linkedInUrl: ''
            }
        });
    }

    closeFormModal = () => {
        this.setState({
            showModal: false,

        });
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

    handleSaveClient = () => {

        var companyName = this.state.client.companyName;

        if( companyName !== ''){

            this.props.onSaveClick(this.state.client);
            this.setState({ showModal: false});
            browserHistory.push('/clientList');
        }else{

            this.openErrorModal();
        }
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
                        <td >{ this.state.totalJobs }</td>

                        <td>
                            <button className="delete-client-btn" value={client.greenhouse.id} onClick={this.openDeleteModal}>Delete</button>
                            <button className="edit-client-btn" onClick={this.handleUpdateClient.bind(this, client.greenhouse)}>Edit</button>
                        </td>

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
                            <Button onClick={this.handleSaveClient} bsStyle="primary">Save</Button>
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
                </div>

                {resultDisplay}
            </div>
        );
    }
}

export default ClientDetailList;