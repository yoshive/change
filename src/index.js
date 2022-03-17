import React from 'react';
import ReactDOM from 'react-dom';
import CRUDTable,
{
  Fields,
  Field,
} from 'react-crud-table';

let requests = [
  {
    Id : 213133,
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

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const Example = () => (
  <div style={styles.container}>
    <CRUDTable
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field
          name="id"
          label="Id"
          hideInCreateForm
          readOnly
        />
        <Field
          name="Item"
          label="Item"
          placeholder="Item"
        />
        <Field
          name="Destination"
          label="Destination"
          placeholder="Destination"
        />
        <Field
          name="Status"
          label="Status"
          hideInCreateForm
          readOnly
          hideInUpdateForm
        />
      </Fields>
      </CRUDTable>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);


