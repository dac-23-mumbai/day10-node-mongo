import { MongoClient } from "mongodb";

async function insertRecord() {
  const uri = "mongodb://localhost:27017";
  // open the connection
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  let jsonDocument = { message: "Hello World", to: "santosh", from: "tejas" };
  await message.insertOne(jsonDocument);

  // close the connection
  await client.close();
  console.log("Record Added");
}

async function main() {
  await insertRecord();
}

main();
