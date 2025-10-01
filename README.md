# priscripto

Priscripto is a minimal React + Vite starter template, ideal for quick prototyping and scalable web app development.

## Features

- **React**: Modern UI development with reusable components.
- **Vite**: Lightning-fast build tool with Hot Module Replacement (HMR).
- **ESLint**: Basic linting for syntax and code quality.
- **Plugin Options**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (uses [Babel](https://babeljs.io/) for Fast Refresh)
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) (uses [SWC](https://swc.rs/) for Fast Refresh)

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Start development server**  
   ```bash
   npm run dev
   ```

3. **Build for production**  
   ```bash
   npm run build
   ```

## React Compiler

The React Compiler is _not_ enabled by default.  
To add it, see [React Compiler Installation](https://react.dev/learn/react-compiler/installation).

## ESLint Configuration

For production apps, consider using TypeScript with type-aware lint rules.  
See the [Vite TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more details.

## Project Structure

```
priscripto/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT

