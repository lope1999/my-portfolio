import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-bg: #1a1a1a; /* Dark mode background */
    --primary-text: #f4f4f4; /* Light text */
    --accent-color: #8b5e3c; /* Warm brown accent */
      --font-primary: 'Playfair Display', serif;
  --font-secondary: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary-bg);
    color: var(--primary-text);
    font-family: var(--font-secondary);
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, .mySpecialClass {
    font-family: var(--font-primary);
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
  }
`;

export default GlobalStyles;
