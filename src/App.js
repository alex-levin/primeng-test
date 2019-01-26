import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CarsDataTable from './components/CarsDataTable';
import TreeTableData from './components/TreeTableData';
import Links from './components/Links';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Links />
            
            <Route path="/datatable" component={ CarsDataTable } />
            <Route path="/treedatatable" component={ TreeTableData } />
          </div>  
        </div>
      </Router>
    );    
  }
}

export default App;
