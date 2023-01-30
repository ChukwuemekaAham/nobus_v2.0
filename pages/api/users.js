// import path from "path";
// import { promises as fs } from "fs";

// export default async function json_test(req, res) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), "data");
//   //Read the json data file db.json
//   const fileContents = await fs.readFile(jsonDirectory + "/db.json", "utf8");
//   //Return the content of the data file in json format
//   res.status(201).json(fileContents);
// }

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({
      message: "Only POST requests allowed",
    });
  }
  try {
    const data = await req.body;
    console.log(data);
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't submit form", error });
  }
}
