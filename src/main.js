import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  let db = client.db("mydb");
  let messageCollection = db.collection("message");

  let inputDocument = { message: "helloo" };
  await messageCollection.insertOne(inputDocument);
  console.log("sucess");

  await client.close();
}
