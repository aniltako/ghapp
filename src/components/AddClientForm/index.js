import React, { Component }from "react";
import "./styles.css";

import {browserHistory} from 'react-router';

class Form extends Component{

    handleClick = () => {
        browserHistory.push('/client-list');
    }

    render() {
        return (

          <div className="form-wrapper">

                    <div className="form-group row">
                      <label htmlFor="company-name-" className="col-sm-2 col-form-label">Company Name</label>
                      <div className="col-sm-10 company-name-field">
                        <input className="form-control" type="text" id="companyName" />
                      </div>
                    </div>

                     <div className="form-group row">
                      <label htmlFor="domain-name" className="col-sm-2 col-form-label">Domain</label>
                      <div className="col-sm-10 domain-name-field">
                        <input className="form-control" type="text" id="domain" />
                      </div>
                    </div>

                     <div className="form-group row">
                      <label htmlFor="careers-page" className="col-sm-2 col-form-label">Careers Page</label>
                      <div className="col-sm-10 careers-page-field">
                        <input className="form-control" type="text" id="careersPage" />
                      </div>
                    </div>

                     <div className="form-group row">
                      <label htmlFor="linkedin-page" className="col-sm-2 col-form-label">Linkedin Page</label>
                      <div className="col-sm-10 linkedin-page-name-field">
                        <input className="form-control" type="text" id="linkedInPage" />
                      </div>
                    </div>

                     <div className="form-group row">
                      <label htmlFor="gh-board-token" className="col-sm-2 col-form-label">GH Board Token</label>
                      <div className="col-sm-10 fh-board-token-field">
                        <input className="form-control" type="text" id="fhBoardToken" />
                      </div>
                    </div>

                    <div className="submit-client">
                      <button type="submit" onClick={ this.handleClick } className="btn btn-primary">Submit</button>
                    </div>

                    </div>
        );
    }
}

export default Form;
