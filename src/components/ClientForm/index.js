import React, { Component }from "react";
import "./styles.css";

import {browserHistory} from 'react-router';

class Form extends Component{

    constructor(props) {
        super(props);

        this.state = {

            loading: false,
            client : {
                companyName: '',
                domainUrl: '',
                careersUrl: '',
                boardToken: '',
                linkedInUrl: ''
            }

        }
    }

    handleSubmitClick = () => {

        this.props.onClickSubmit(this.state.client);

        browserHistory.push('/clientList');
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
        return (

            <div className="form-wrapper">

                <div className="form-group row">
                  <label htmlFor="company-name-" className="col-sm-2 col-form-label">Company Name</label>
                  <div className="col-sm-10 company-name-field">
                    <input className="form-control" onChange={ this.handleChangeCompanyName } type="text" id="companyName" />
                  </div>
                </div>

                 <div className="form-group row">
                  <label htmlFor="domain-name" className="col-sm-2 col-form-label">Domain</label>
                  <div className="col-sm-10 domain-name-field">
                    <input className="form-control" onChange={ this.handleChangeDomainUrl } type="text" id="domain" />
                  </div>
                </div>

                 <div className="form-group row">
                  <label htmlFor="careers-page" className="col-sm-2 col-form-label">Careers Page</label>
                  <div className="col-sm-10 careers-page-field">
                    <input className="form-control" onChange={ this.handleChangeCareersUrl } type="text" id="careersPage" />
                  </div>
                </div>

                 <div className="form-group row">
                  <label htmlFor="linkedin-page" className="col-sm-2 col-form-label">Linkedin Page</label>
                  <div className="col-sm-10 linkedin-page-name-field">
                    <input className="form-control" onChange={ this.handleChangeLinkedInUrl } type="text" id="linkedInPage" />
                  </div>
                </div>

                 <div className="form-group row">
                  <label htmlFor="gh-board-token" className="col-sm-2 col-form-label">GH Board Token</label>
                  <div className="col-sm-10 fh-board-token-field">
                    <input className="form-control" onChange={ this.handleChangeBoardToken } type="text" id="fhBoardToken" />
                  </div>
                </div>

                <div className="submit-client">
                  <button type="submit" onClick={ this.handleSubmitClick } className="btn btn-primary">Submit</button>
                </div>

            </div>
        );
    }
}

export default Form;
