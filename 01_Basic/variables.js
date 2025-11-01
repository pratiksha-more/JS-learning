const accountName = "Pratiksha";
let accountID = 123456;
var accountBalance = 1000;

console.log("Account Name:", accountName);
console.log("Account ID:", accountID);
console.log("Account Balance:", accountBalance);

console.table({ accountName, accountID, accountBalance });

//accountName = "John Doe"; // This will cause an error
accountID = 654321;
accountBalance += 500;

console.log("Updated Account ID:", accountID);  
console.log("Updated Account Balance:", accountBalance);

console.table({ accountName, accountID, accountBalance });


/*
===========================================
🧾 NOTES: Difference between var, let, and const
===========================================

### 🟢 1. var
-------------------------------------------
* Scope: Function-scoped
* Hoisting: Yes (moved to top, initialized as `undefined`)
* Can be Re-declared: ✅ Yes
* Can be Updated: ✅ Yes

📘 Example:
var x = 10;
var x = 20; // Re-declaration allowed
x = 30;     // Update allowed
console.log(x); // 30

⚠️ Problem:
`var` ignores block scope — it can be accessed outside `{}` blocks.

if (true) {
  var a = 5;
}
console.log(a); // 5 (still accessible)

-------------------------------------------

### 🟡 2. let
-------------------------------------------
* Scope: Block-scoped (`{ }`)
* Hoisting: Yes, but not initialized (can’t use before declaration → Temporal Dead Zone)
* Can be Re-declared: ❌ No (in same scope)
* Can be Updated: ✅ Yes

📘 Example:
let y = 10;
// let y = 20; ❌ Error (same scope)
y = 30; // ✅ Allowed
console.log(y); // 30

if (true) {
  let b = 10;
}
// console.log(b); ❌ Error (block scope)

-------------------------------------------

### 🔵 3. const
-------------------------------------------
* Scope: Block-scoped (`{ }`)
* Hoisting: Yes, but not initialized
* Can be Re-declared: ❌ No
* Can be Updated: ❌ No (for primitive values)

📘 Example:
const z = 50;
// z = 60; ❌ Error (cannot reassign)
console.log(z); // 50

📘 But for objects or arrays:
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed
console.log(arr); // [1, 2, 3, 4]

-------------------------------------------

### 🧠 Quick Summary Table
-------------------------------------------
| Feature        | var               | let                 | const                            |
|----------------|-------------------|---------------------|----------------------------------|
| Scope          | Function          | Block               | Block                            |
| Hoisting       | Yes (undefined)   | Yes (not initialized)| Yes (not initialized)            |
| Re-declaration | ✅ Yes             | ❌ No                | ❌ No                             |
| Re-assignment  | ✅ Yes             | ✅ Yes               | ❌ No (except object/array)      |
| Common Use     | Old JS code       | Modern variable      | Constants / fixed values         |
-------------------------------------------

✅ Summary:
- Use `var` → for old JS or legacy code only.
- Use `let` → for variables that will change.
- Use `const` → for constants or fixed references (recommended).

*/
