# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# my-portfolio

## GitHub Heatmap Integration

To integrate the GitHub heatmap of activity in your profile, follow these steps:

1. **Install the `github-calendar` package**:
   ```sh
   npm install github-calendar
   ```

2. **Create a new component `GithubHeatmap.tsx`**:
   ```tsx
   import React, { useEffect, useRef } from 'react';
   import GitHubCalendar from 'github-calendar';

   const GithubHeatmap = () => {
     const calendarRef = useRef(null);

     useEffect(() => {
       if (calendarRef.current) {
         GitHubCalendar(calendarRef.current, 'harshitIIITD');
       }
     }, []);

     return <div ref={calendarRef}></div>;
   };

   export default GithubHeatmap;
   ```

3. **Update `App.tsx` to include the `GithubHeatmap` component**:
   ```tsx
   import GithubHeatmap from './components/GithubHeatmap';

   function App() {
     return (
       <div>
         {/* Other components */}
         <GithubHeatmap />
       </div>
     );
   }

   export default App;
   ```

4. **Run your application**:
   ```sh
   npm start
   ```

This will display the GitHub heatmap of activity in your profile section.
