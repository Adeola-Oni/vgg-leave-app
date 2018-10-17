import React from 'react';
import Nav from '../FAAN/Nav';
import Side from '../FAAN/Side'
import './CSS/Dashboard.css';
import {Table, Select} from 'semantic-ui-react'

const Transactions = (()=>{
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
                            {/* <Select placeholder='Select Location'  /> */}
                            <div class='row name'>
                            <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Transaction Id</Table.HeaderCell>
                                            <Table.HeaderCell>Date</Table.HeaderCell>
                                            <Table.HeaderCell>Bank</Table.HeaderCell>
                                            <Table.HeaderCell>Terminal Id</Table.HeaderCell>
                                            <Table.HeaderCell>Location</Table.HeaderCell>
                                            <Table.HeaderCell>Amount</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>n4wkbdo25wdcile</Table.Cell>
                                            <Table.Cell>Thu Apr 05 2018 10:52:05 GMT+0100 (British Summer Time)</Table.Cell>
                                            <Table.Cell>Fidelity</Table.Cell>
                                            <Table.Cell>87houfb8</Table.Cell>
                                            <Table.Cell>Ibadan</Table.Cell>
                                            <Table.Cell>9333.97</Table.Cell>
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

export default Transactions;