# 🧪 JavaScript Vitest Testing

This project sets up **unit testing** using [Vitest](https://vitest.dev/) with **V8 code coverage**.

---

## 📦 Installation

```bash
npm install
```

## 🚀 Run Tests

```bash
npm test
# or
npx vitest
```

## 📊 Run Tests with Coverage

```bash
npx vitest run --coverage
```

> Coverage reports will be generated in the `coverage/` folder.

---

## 🧢 Testing Tools

* [`vitest`](https://www.npmjs.com/package/vitest): Blazing fast unit testing powered by Vite
* [`@vitest/coverage-v8`](https://www.npmjs.com/package/@vitest/coverage-v8): Coverage reporting using V8's native instrumentation

---

## 🛠 Scripts

| Command                     | Description                   |
| --------------------------- | ----------------------------- |
| `npm test`                  | Run unit tests with Vitest    |
| `npx vitest`                | Run tests in interactive mode |
| `npx vitest run --coverage` | Run tests with coverage       |

---

## 📁 Project Structure

```
.
├── node_modules/
├── .gitignore
├── package.json
├── README.md
├── coverage/
└── test/
    └── eg.test.js
```

