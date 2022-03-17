import React from 'react';
import ReactDOM from 'react-dom';

let requests = [
  {
    Id : Craig-213133,
    Item: 'Clothes',
    Destination:'Jakarta',
    Status:'Verifying'
  },
];

let count = requests.length;
const service = {
  fetchItems: () => {
    let result = Array.from(requests);
    return Promise.resolve(result);
  },
  create: (request) => {
    count += 1;
    requests.push({
      ...request,
      id: count,
    });
    return Promise.resolve(request);
  },
  update: (data) => {
    const request = requests.find(t => t.id === data.id);
    request.Item = data.Item;
    request.Destination = data.Destination;
    return Promise.resolve(request);
  },
  delete: (data) => {
    const request = requests.find(t => t.id === data.id);
    requests = requests.filter(t => t.id !== request.id);
    return Promise.resolve(request);
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


