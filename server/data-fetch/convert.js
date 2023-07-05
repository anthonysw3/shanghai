const fs = require("fs");
const path = require("path");

// Fetch all files in the current directory
fs.readdirSync(".").forEach((file) => {
  // Check if the file is a JSON file
  if (path.extname(file) === ".json") {
    // Read the file
    const data = fs.readFileSync(file);
    // Parse it as JSON
    const jsonData = JSON.parse(data);
    // Create a write stream
    const writeStream = fs.createWriteStream(file.replace(".json", ".ndjson"));
    // Write each object as a stringified JSON object on a new line
    jsonData.forEach((jsonObject) => {
      writeStream.write(JSON.stringify(jsonObject) + "\n");
    });
    writeStream.end();
  }
});
