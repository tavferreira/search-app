import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Josh Comeau's Custom CSS Reset */

  /* https://www.joshwcomeau.com/css/custom-css-reset/ */
  

  /* 1. Use a more intuitive box-sizing model. */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Allow percentage-based heights in the application */
  html, body {
    height: 100%;
  }

  /* 4. Typographic tweaks */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Example font stack */

    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* 5. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 6. Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* 7. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 8. Create a root stacking context */
  #root { /* Or your actual root element ID */
    isolation: isolate;
  }

  /* 9. Add smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* 10. Improve focus outline for keyboard navigation */
  *:focus-visible {
    outline: 2px auto dodgerblue; /* Example focus color */
    outline-offset: 2px;
  }

  /* 11. Remove list styles on ul, ol elements with a list role */
  ul[role='list'],
  ol[role='list'] {
    padding: 0;
    list-style: none;
  }

  /* 12. Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
     scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle
