# React Book Search Component 🔎📚

A simple React component implementing a real-time book search interface using the Open Library API and Redux Toolkit Query.

## Features

- ✨ **Real-time Search:** Fetches and displays book suggestions from the Open Library API as the user types.
- ⚡ **Debounced Input:** Includes a 500ms debounce on the search input to optimize performance and limit API requests during typing.
- ℹ️ **Data Display:** Shows book title, authors, first publish year, and cover image (with fallback).
- 🔗 **Amazon Linking:** Results link directly to relevant book searches on `amazon.com`, using ISBN when available, otherwise title and author.
- ⏳ **Loading & Error States:** Provides visual feedback during data fetching and handles API errors gracefully.
- 👇 **Dropdown UI:** Presents results in a dropdown list below the search input.
- 🖱️ **Dismiss Handling:** Dropdown automatically closes when clicking outside the component or pressing the Escape key.
- 🛠️ **Modern Tooling:** Built with TypeScript, Redux Toolkit, and `styled-components`.

## Technologies Used ⚙️

- React
- TypeScript
- Vite
- Redux Toolkit (including RTK Query)
- Styled-Components
- Open Library Search API

## Setup and Installation 🚀

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tavferreira/search-app.git](https://github.com/tavferreira/search-app.git)
    cd search-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The application should now be running locally, typically at `http://localhost:5173`.

## Implementation Notes 📝

- **State Management:** Leverages RTK Query for managing API interactions, including caching, loading, and error states, significantly simplifying data fetching logic.
- **Performance:** The `useDebounce` custom hook prevents excessive API calls while the user is actively typing.
- **Component Structure:** The application is organized into core components (`App`, `TopBar`), feature components (`Search`, `SearchInput`, `SearchResults`, `SearchResultItem`), API slices, and custom hooks (`useDebounce`, `useDismiss`). Styles are generally co-located within the components that use them.
- **Styling:** `styled-components` is used for component-scoped CSS and global styles, defined directly within component files.
- **External Linking:** The logic for generating Amazon links prioritizes ISBN for accuracy and uses advanced search parameters for better results on `amazon.com`.

## Future Enhancements ✨

While this implementation covers the core functionality, potential next steps could include:

- ⌨️ **Keyboard Navigation:** Implementing full WAI-ARIA compliant keyboard navigation for the search results list (Up/Down arrows, Enter for selection, `aria-activedescendant`, etc.).
- 🧪 **Testing:** Adding a comprehensive test suite, including:
  - Unit tests for custom hooks (`useDebounce`, `useDismiss`) and utility functions.
  - Integration tests for the `Search` component using React Testing Library and mocking API responses (e.g., with MSW).
- ♿ **Accessibility (A11y):** Performing a thorough accessibility audit and implementing any necessary improvements.
- 💅 **UI/UX Polish:** Refining focus states, adding subtle transitions, or improving layout responsiveness.
- ⚠️ **Error Handling:** Displaying more specific error messages or implementing retry logic.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
