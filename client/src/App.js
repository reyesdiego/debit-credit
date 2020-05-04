import React, { useState, useEffect } from 'react';
import './App.css';
import { Table } from 'antd';
import axios from 'axios';
import { formattedCurrency } from './helpers/format';

import 'antd/dist/antd.css'; //TODO move to index.html


const columns = [
  { title: 'Transaction', dataIndex: 'type', key: 'type', render: (type) => `${type[0].toUpperCase()}${type.substring(1)}` },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', align: 'right', render: (amount, record) => <span className={record.type === 'debit' ? 'color-debit' : 'color-credit'}>{formattedCurrency(record.type === 'Debit' ? amount * -1 : amount)}</span> }
];

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api-v1/transactions?begin=0' //TODO move host url to env
    }).then(response => {
      const dataq = response.data.map(item => ({ ...item, key: item.id }));
      console.log(dataq)
      setData(dataq)
    }).catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      <Table
        pagination={false}
        columns={columns}
        expandable={{
          expandedRowRender: record => <><span>{record.effectiveDate}</span> <p style={{ margin: 0 }}>{record.description}</p><span>Balance: {formattedCurrency(record.balance)}</span></>
        }}
        dataSource={data}
      />
    </div>
  );
}

export default App;
