import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import DataService from '../services/DataService';

class CarsDataTable extends Component {

    constructor() {
        super();
        this.state = {};
        this.dataService = new DataService();
    }

    componentDidMount() {
        this.dataService.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        return (
            <DataTable value={this.state.cars}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        );
    }
}

export default CarsDataTable;







