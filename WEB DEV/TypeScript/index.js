"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello ${name}`;
}
function add(a, b) {
    return a + b;
}
function delay(fn) {
    setTimeout(fn, 1000);
}
delay(() => {
    console.log("Hello");
    return 5;
});
//# sourceMappingURL=index.js.map