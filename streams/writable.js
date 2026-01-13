// ================= Writing Files with Writable Streams =================
const fs = require("fs");

// Create a writable stream to 'lot2.txt'
const writable = fs.createWriteStream("lot2.txt");

// Write data to the file
writable.write("Hello Node.js\n");
writable.write("This is a writable stream example.\n");

// Close the stream
writable.end("Finished writing.");

// Listen for 'finish' event
writable.on("finish", () => {
    console.log("Finished writing to file.");
});

// Handle errors
writable.on("error", (err) => {
    console.error("Error writing file:", err);
});
