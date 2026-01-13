// ================= Functions =================
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function greet(name) {
    console.log(`hey ${name}`);
}

// ================= Export =================
// Export multiple functions as an object
module.exports = { add, sub, greet };

// Optional: to export a single function instead:
// module.exports = function(name) {
//     return `hello ${name}`;
// }
