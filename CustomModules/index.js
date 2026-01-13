// ================= Demo: Using Custom Module =================

// Import your custom module
const custom = require("./custom-module"); // filename must match exactly

// Using the add function
console.log("Add 2 + 3 =", custom.add(2, 3)); // 5

// Using the sub function
console.log("Sub 2 - 3 =", custom.sub(2, 3)); // -1

// Using the greet function
custom.greet("Jamex"); // hey Jamex
