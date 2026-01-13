// ================= Piping Streams =================
const fs = require("fs");

// Create readable and writable streams
const read = fs.createReadStream("lot.txt", { encoding: "utf8" });
const write = fs.createWriteStream("output.txt");

// Pipe readable stream into writable stream
read.pipe(write);

// Listen for 'finish' event when piping is done
write.on("finish", () => {
    console.log("Piping complete: data copied to 'output.txt'.");
});

// Handle errors
read.on("error", (err) => console.error("Error reading file:", err));
write.on("error", (err) => console.error("Error writing file:", err));
