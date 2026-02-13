#Task2

# CSS Styling – A Brief History of the Internet

This branch contains the **complete CSS implementation** for the *“A Brief History of the Internet”* project.  
The focus of this branch is on applying **modern CSS concepts**, visual design principles, and responsive layout techniques to an existing HTML structure.

---

## Overview

The CSS in this branch enhances the HTML page by applying:
- A dark-themed, modern UI
- Clear visual hierarchy
- Responsive layout
- Glassmorphism-inspired card design
- Icon integration and interactive elements

The styling is implemented **without JavaScript frameworks** and follows best practices in CSS organization and readability.

---

## CSS Concepts Covered

### 1. Text & Typography
- Custom font integration using **Google Fonts (Inter)**
- Font properties: `font-family`, `font-size`, `font-weight`, `line-height`
- Typography hierarchy for headings and body text
- Styling for emphasis elements (`strong`, `em`)
- Monospace styling for code blocks

### 2. Colors & Backgrounds
- Dark mode color palette
- Background colors and gradients
- Accent colors for links, buttons, and highlights
- Use of RGBA for subtle transparency
- Consistent text color contrast for readability

### 3. Borders, Shadows & Effects
- Rounded corners using `border-radius`
- Hover effects with `box-shadow`
- Focus styles for form elements
- Glassmorphism effect using:
  - `backdrop-filter`
  - Semi-transparent borders

### 4. Display & Layout
- CSS Grid (12-column layout system)
- Flexbox for navigation and icon alignment
- Block and inline layout behavior
- Controlled spacing and alignment
- Responsive adjustments using media queries

### 5. Forms Styling
- Styled inputs, selects, radio buttons, and checkboxes
- Custom focus and hover states
- Accessible and user-friendly form layout

### 6. Media Styling
- Responsive images with fixed height and object-fit behavior
- Styled video and audio elements
- Caption styling for figures

### 7. Tables
- Structured table layout with captions
- Header and body styling
- Row hover effects for better readability

### 8. Iconography
- Integration of **Lucide SVG icons**
- Icon alignment using Flexbox
- Consistent icon sizing and coloring

---

## Design Principles Used

- **Glassmorphism**: Frosted-glass card effect using background blur
- **Consistency**: Unified spacing, colors, and typography
- **Responsiveness**: Layout adapts smoothly to smaller screens
- **Accessibility**: Readable contrast, proper spacing, and focus states

---

## Technologies Used

- CSS3
- Google Fonts (Inter)
- Lucide Icons (SVG-based)

---

## Notes

- No JavaScript logic is used for styling.
- No external CSS frameworks (Bootstrap, Tailwind, etc.) are used.
- The CSS is designed to match and enhance the existing semantic HTML structure.
- This branch focuses **only on styling**, keeping structure and content responsibilities separate.

---

## How to View

Switch to this branch and open the HTML file in a browser to see the applied styles.

```bash
git checkout css
