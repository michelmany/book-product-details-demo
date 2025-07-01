# Book Product Details Demo

A responsive ReactJS application displaying detailed information for a book product.

## Project Description

This project demonstrates a clean, accessible, and responsive book product details page built with React and Vite. It features a modern UI that displays comprehensive information about a book, including its title, author, description, pricing, and more.

## How to Run Locally

1. Clone the repository
2. Install dependencies: ```npm install```
3. Start the development server: ```npm run dev```

## How to Build for Production

To create a production build: ```npm run build```

## How to Preview the Built Site

To preview the production build locally: ```npm run preview```

## Where to Test the Application

- **Local Testing**: Access at http://localhost:5173/ when running the development server
- **Live Demo**: Visit [books.yourdomain.com](https://books.yourdomain.com) to see the deployed version

## Future Improvements

With more time, I would implement the following enhancements:

### Design Refinements
- Add subtle animations for improved user experience
- Create a dark mode theme option
- Implement more interactive elements for the book previews
- Refine typography and spacing for better visual hierarchy

### Code Refactoring
- Split the monolithic ProductPage component into smaller, reusable components:
  - ProductHeader
  - ProductImage
  - ProductDescription
  - ProductPricing
  - ProductRetailers
  - AuthorBio
  - ProductReviews
- Implement state management with Context API or Redux for larger applications
- Add proper error boundaries and loading states

### Additional Features
- Implement book preview functionality
- Add user reviews and ratings system
- Create a wishlist/save for later feature
- Implement related books recommendations
- Add unit and integration tests with Jest and React Testing Library

## Technical Notes

### Data Source
- The product data is fetched from: https://v3-static.supadu.io/radley-books-us/products/9732397900366.json

### Customizations
- **Image Sizing**: The book cover image can be resized by changing the `h=648` parameter in the image URL to adjust height.
- **UI Themes**: The styling can be easily customized by modifying the SCSS variables.

### Mobile Responsiveness
- The layout adapts to different screen sizes using a mobile-first approach
- Single column layout on mobile, two-column layout on larger screens
- Optimized typography and spacing for all devices

### BEM/SCSS Structure
- The project follows the BEM (Block Element Modifier) naming convention
- Component styling is organized in a modular fashion
- Consistent naming patterns ensure maintainability and readability

### Accessibility Features
- Semantic HTML structure for screen readers
- Keyboard navigation support
- ARIA attributes for dynamic content
- Skip links for keyboard users
- Color contrast that meets WCAG standards
