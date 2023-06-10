import { MongoClient } from "mongodb";

async function insertMessage(jsonDocument) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function readMessage() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  // logic of read
  let db = client.db("mydb");
  let message = db.collection("message");

  let list = await message.find().toArray();
  await client.close();

  return list;
}

export { insertMessage, readMessage };
