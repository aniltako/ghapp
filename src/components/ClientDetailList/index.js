import React, { Component } from "react";
import "./styles.css";
import {browserHistory} from 'react-router';

class ClientDetailList extends Component{

    handleClick = () => {
        browserHistory.push('/add-client');
    };

    handleKeyUp = () => {
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
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
                <th >{ client.default.companyName }</th>
                <th >{ client.default.domainUrl }</th>
                <th >{ client.default.careersUrl }</th>
                <th >{ client.default.LinkedLinkUrl }</th>
                <th >{ client.default.boardToken }</th>
            </tr>
        );
    })

    return clientDetailList;
}
