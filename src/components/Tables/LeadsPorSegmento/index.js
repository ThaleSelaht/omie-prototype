import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'antd';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const data = [{
  key: '1',
  name: 'Consultoria',
  age: 'Dezembro',
  address: 435,
}, {
  key: '2',
  name: 'Comércio',
  age: 'Dezembro',
  address: 256,
}, {
  key: '3',
  name: 'Restaurante',
  age: 'Dezembro',
  address: 335,
}, {
  key: '4',
  name: 'Consultoria',
  age: 'Novembro',
  address: 114,
}, {
    key: '5',
    name: 'Comércio',
    age: 'Novembro',
    address: 298,
}, {
    key: '6',
    name: 'Restaurante',
    age: 'Novembro',
    address: 315,
  }];

class LeadsPorSegmento extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Segmento',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Consultoria', value: 'Consultoria' },
        { text: 'Comércio', value: 'Comércio' },
        { text: 'Restaurante', value: 'Restaurante' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Mês',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Nº Leads',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];
    return (
      <div>
        <div className="example-config">
            <button className="k-button" onClick={this.exportPDFWithComponent}>Export with component</button>
            &nbsp;
            <button className="k-button" onClick={this.exportPDFWithMethod}>Export with method</button>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }

    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.grid), { paperSize: 'A4' });
        }
        exportPDFWithComponent = () => {
            this.pdfExportComponent.save();
    }
}

export default LeadsPorSegmento;