import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  // open the connection
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");
  await message.insertOne({});

  // close the connection
  await client.close();
  console.log("Record Added");
}

main();
