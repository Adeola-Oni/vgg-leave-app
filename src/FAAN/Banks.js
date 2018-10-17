import React from 'react';
import Nav from '../FAAN/Nav';
import Side from '../FAAN/Side'
// import './CSS/Dashboard.css';
import {Table, Select} from 'semantic-ui-react'

const Banks = (()=>{
    return(
        <div>
            <Nav/>
            <div class='row'>
                <div class='col s3'>
                    <Side />
                </div>

                <div class='col s9'>
                    <div className="dashboard">
                        <div class="card">

                            <div class='row name'>
                            <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Bank Name</Table.HeaderCell>
                                            <Table.HeaderCell>Terminals</Table.HeaderCell>
                                            <Table.HeaderCell>Total Count</Table.HeaderCell>
                                            <Table.HeaderCell>Number of Locations</Table.HeaderCell>
                                            <Table.HeaderCell>Transaction Value</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Skye</Table.Cell>
                                            <Table.Cell>17</Table.Cell>
                                            <Table.Cell>17</Table.Cell>
                                            <Table.Cell>9</Table.Cell>
                                            <Table.Cell>101770.20000000001</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div><br />

                </div>

            </div>
            
        </div>
    )
})

export default Banks;