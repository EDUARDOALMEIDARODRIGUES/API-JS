const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Eduar:pame1LAdDEb0tA@cluster0.tdkunri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("test_db");
    const colletion = database.collection("cadastro");

    const doc = { name : "Edu", shape:"inepliscavel"};
    const result = await colletion.insertOne(doc);

    console.log(
      `nao sei o que não sei o que lá o _ID é ${result.insertedId}`
    );
  } finally {
    await client.close();
  }
}

run();