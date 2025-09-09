# Theme Context, Provider, and Toggler: Complete Guide

## Overview

This documentation provides a comprehensive explanation of how the theme system works in this React application. The theme system allows users to toggle between light and dark modes, with the changes applied globally across the application.

## Architecture

The theme system is built using React Context API, which provides a way to share state between components without having to pass props down manually at every level.

### Key Components

1. **ThemeContext**: The context object that holds the theme state
2. **ThemeProvider**: The provider component that wraps the application
3. **useTheme Hook**: A custom hook for consuming the theme context
4. **Theme Toggler**: UI components that allow users to switch themes

## Implementation Details

### 1. ThemeContext.jsx

```jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default to light

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### Code Breakdown

**Imports:**
```jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
```
- `createContext`: Creates the context object
- `useContext`: Hook to consume the context
- `useState`: Manages the theme state
- `useEffect`: Handles side effects (DOM manipulation)

**Context Creation:**
```jsx
const ThemeContext = createContext();
```
- Creates an empty context object that will hold the theme state and functions

**Custom Hook:**
```jsx
export const useTheme = () => useContext(ThemeContext);
```
- Provides a clean API for components to access the theme context
- Throws an error if used outside of ThemeProvider

**ThemeProvider Component:**
```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default to light
  // ... rest of the component
};
```

**State Management:**
```jsx
const [theme, setTheme] = useState('light');
```
- `theme`: Current theme value ('light' or 'dark')
- `setTheme`: Function to update the theme
- Default value is 'light'

**DOM Manipulation:**
```jsx
useEffect(() => {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
}, [theme]);
```
- Accesses the root HTML element (`<html>`)
- Removes existing theme classes
- Adds the current theme class
- Runs whenever `theme` changes

**Toggle Function:**
```jsx
const toggleTheme = () => {
  setTheme(prev => prev === 'dark' ? 'light' : 'dark');
};
```
- Toggles between 'light' and 'dark' themes
- Uses functional update to access previous state

**Provider:**
```jsx
return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
```
- Provides the theme state and toggle function to all child components
- `value` prop contains the context data

### 2. App.jsx Integration

```jsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### 3. Using the Theme in Components

```jsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
};
```

## How It Works

### 1. Initialization
- When the app starts, `ThemeProvider` is rendered
- `theme` state is initialized to 'light'
- `useEffect` runs, adding 'light' class to the `<html>` element

### 2. Theme Toggle
- User clicks a toggle button
- `toggleTheme` function is called
- `theme` state changes from 'light' to 'dark' or vice versa
- `useEffect` runs again, updating the `<html>` class

### 3. CSS Application
- CSS uses the class on `<html>` to apply theme styles
- Example:
```css
/* Light theme */
.light .bg-primary { background-color: #ffffff; }
.light .text-primary { color: #000000; }

/* Dark theme */
.dark .bg-primary { background-color: #1f2937; }
.dark .text-primary { color: #ffffff; }
```

### 4. Component-Level Theming
- Components can access `theme` value from context
- Conditionally apply classes based on theme
- Example:
```jsx
<div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
```

## Benefits

1. **Global State Management**: Theme state is accessible from any component
2. **Performance**: No need to pass theme props down component tree
3. **Consistency**: Single source of truth for theme state
4. **Maintainability**: Easy to modify theme logic in one place
5. **Type Safety**: Can be enhanced with TypeScript for better development experience

## Best Practices

1. **Default Theme**: Always set a sensible default theme
2. **Persistence**: Consider saving theme preference to localStorage
3. **System Preference**: Detect user's system theme preference
4. **Smooth Transitions**: Add CSS transitions for theme changes
5. **Accessibility**: Ensure sufficient contrast in both themes

## Advanced Usage

### Persisting Theme Preference

```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ... rest of the component
};
```

### System Theme Detection

```jsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## Troubleshooting

### Common Issues

1. **Context not found error**: Ensure component is wrapped with ThemeProvider
2. **Theme not applying**: Check if CSS is properly set up for .light and .dark classes
3. **State not updating**: Verify toggleTheme is called correctly

### Debugging

```jsx
const { theme } = useTheme();
console.log('Current theme:', theme);
```

## Conclusion

This theme system provides a robust, scalable solution for implementing dark/light mode in React applications. The Context API approach ensures clean, maintainable code while providing excellent performance and developer experience.