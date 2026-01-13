// ================= Reading Files with Readable Streams =================
const fs = require("fs");

// Create a readable stream from 'lot.txt'
const readable = fs.createReadStream("lot.txt", { encoding: "utf8" });

// Listen for 'data' event to receive chunks
readable.on("data", (chunk) => {
    console.log("Chunk received:", chunk);
});

// Listen for 'end' event when reading finishes
readable.on("end", () => {
    console.log("Finished reading the file.");
});

// Handle errors
readable.on("error", (err) => {
    console.error("Error reading file:", err);
});
