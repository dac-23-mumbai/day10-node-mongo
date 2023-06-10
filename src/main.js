import { insertMessage, readMessage } from "./mydb.js";

async function main() {
  // insert
  let jsonDocument = {
    message: "Hello Universee",
    to: "santosh",
    from: "tejas",
  };
  await insertMessage(jsonDocument);

  // read
  let list = await readMessage();
  console.log(list);
}

main();
