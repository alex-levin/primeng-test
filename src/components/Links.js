import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <header style={headerStyle}>
      <h1>PrimeReact Components</h1>
      <ol>
          <li><Link style={linkStyle} to="/datatable">DataTable</Link></li>
          <li><Link style={linkStyle} to="/treedatatable">TreeDataTable</Link></li>

      </ol>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Links;