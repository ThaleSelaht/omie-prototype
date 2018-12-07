import React, { Component } from 'react';
import 'antd/dist/antd.css';
import LeadsPorSegmento from './components/Tables/LeadsPorSegmento';
import Export from './components/Tables/Export';

class Relatorio extends Component {
  render() {
    return (
      <div>
        <LeadsPorSegmento />
      <Export />
      </div>
    );
  }
}

export default Relatorio;
