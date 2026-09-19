# Question: Why Can't We Import Everything from a File at Once in JavaScript?

When we import a file in JavaScript, why do I have to write specific variables or functions? Why can't I just import the file and get access to everything written in that file, like in Python or other languages?

---

### **Answer:**

The difference comes down to **how modern module systems (ES Modules) work**, along with key web-focused design priorities like **tree-shaking** and **scope safety**.

In Python, `import math` imports the whole module into its own namespace (`math.sqrt()`). If you try to write `import file` directly in standard JavaScript, it won't expose variables into a named namespace automatically. 

Here is why JavaScript relies on explicitly exporting and importing specific items, and how you can actually achieve Python-style imports if you want to.

---

### 1. You CAN Import Everything (Namespace Imports)
If you want the Python-style experience where you grab everything written in a file at once, **JavaScript actually lets you do this using `import * as`**:

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;