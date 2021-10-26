let a = 1;
a = 5;
a = 10;
let e = ["a", "b"];
e.push("c");
let f = ["a", "b"];
f.push("c");
let f1 = [1, 2, 3];
f1.push(4);
let g = {
    a: [1],
    b: [2],
};
let h = [1, "s", true];
var colour;
(function (colour) {
    colour[colour["Red"] = 0] = "Red";
    colour[colour["Green"] = 1] = "Green";
    colour[colour["Blue"] = 2] = "Blue";
})(colour || (colour = {}));
let i = 1;
let i1 = colour.Green;
console.log("i", i);
const sum = (a, b) => {
    return a + b;
};
