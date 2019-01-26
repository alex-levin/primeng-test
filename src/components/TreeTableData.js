import React, { Component } from 'react';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column';
import { Button } from 'primereact/button';
import { TreeTableSubmenu } from 'primereact/treetable';
import DataService from '../services/DataService';

class TreeTableData extends Component {
    constructor() {
        super();
        this.state = {};
        this.dataService = new DataService();
        // no need of toggleApplications is an arrow
        // this.toggleApplications = this.toggleApplications.bind(this);
    }

    componentDidMount() {
        this.dataService.getTreeTableNodes().then(data => {
            this.setState({nodes: data});
            console.log('>>>' + data);
        });
    }

    toggleApplications = () => {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    render() {
        return (
            <div>
                
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Uncontrolled</h3>
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleApplications} label="Toggle Applications" />
                    <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}

export default TreeTableData;
