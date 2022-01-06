const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'fooDatabase';

console.log('-- mongodb --');

async function main() {
  console.log('... start connected to server');
  await client.connect().db('someDb');
  console.log('Connected successfully to server');
  // const db = client.db(dbName);
  // const collection = db.collection('documents');

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());