import React, { Component } from "react";
import "./styles.css";
import {browserHistory} from 'react-router';

class ClientDetailList extends Component{

    handleClick = () => {
        browserHistory.push('/add-client');
    };

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

            clientDetailList = createClientDetailList(clientList);
        }

        return (

            <div className="container">

                <div className="add-client-button">
                    <button type="button" onClick={ this.handleClick } className="btn btn-primary add-client">Add Greenhouse Client</button>
                </div>

                <input type="text" id="searchInput" onKeyUp={this.handleKeyUp} placeholder="Search by company name..." title="Type in a name" />

                    <table id="myTable">
                        <tr className="header">
                            <th >Company Name</th>
                            <th >Domain Url </th>
                            <th >Careers Url </th>
                            <th > LinkedIn Url </th>
                            <th > Board Token </th>
                        </tr>

                        {clientDetailList}

                    </table>
            </div>
        );
    }
}

export default ClientDetailList;


function createClientDetailList(clientList){


    var clientDetailList = [];

    clientList.map(function(client,i){

        clientDetailList.push(

            <tr key ={i} className="header">
                <td >{ client.default.companyName }</td>
                <td >{ client.default.domainUrl }</td>
                <td >{ client.default.careersUrl }</td>
                <td >{ client.default.LinkedLinkUrl }</td>
                <td >{ client.default.boardToken }</td>
            </tr>
        );
    })

    return clientDetailList;
}
