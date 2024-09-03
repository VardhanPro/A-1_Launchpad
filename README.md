# A1 Fence Cost Estimator

## Overview
A1 Fence Cost Estimator is a web-based application developed by **Team Horus** as part of the A-1 Launchpad Final-Year Engineering Challenge for Innovative Solutions. The application enables users to estimate the cost of erecting a 1 km fence, providing a detailed breakdown of the essential segments, their weight, cost, and quantity. The application is designed to be responsive, user-friendly, and compatible with various devices and browsers.

## Team Members
- **Gopi Thumati**
- **Ashish Vardhan Pilla**

## Features
### 1. Responsive Design with Media Queries
- The application is designed using CSS media queries to provide a responsive layout that adjusts based on the screen size. The product grid structure adapts from one column on smaller devices to three columns on larger devices, ensuring a consistent user experience across smartphones, tablets, and desktops.

### 2. Dynamic Content Management with JavaScript
- JavaScript is used extensively to manage dynamic content, especially for product descriptions, the shopping cart, and user interactions. The `viewDetails()` function dynamically updates the product details in a modal when a user selects a product, following the Model-View-Controller (MVC) pattern.

### 3. Quantity Management with Input Validation
- The shopping cart includes a quantity selection feature with input validation. The `changeQuantity()` function ensures that users cannot select a quantity less than 1, preventing errors in the ordering process.

### 4. Real-Time Price Calculation
- The application calculates the total cost, including Goods and Services Tax (GST), in real-time as users add products to the cart. The `addToCart()` and `updateTotal()` functions ensure that the cart total is updated immediately, enhancing the user experience.

### 5. Cross-Browser Compatibility
- The application includes CSS styles that ensure consistent functionality across different browsers. For instance, custom styles are added to hide default spin buttons in number input fields in WebKit browsers like Chrome and Safari.

## Technical Details
- **HTML/CSS/JavaScript**: Core technologies used for front-end development.
- **Media Queries**: Implemented for responsive design.
- **JavaScript Functions**: Used for dynamic content management and real-time updates.
- **Cross-Browser Compatibility**: Ensured through specific CSS rules.

## Future Enhancements
- **Backend Integration**: Future plans include developing a backend system to handle dynamic storage and retrieval of data, user information, transactions, and more.
- **Payment Processing**: Adding a backend for payment processing and inventory control to extend the functionality and business value of the application.

## Website
[Visit A1 Fence Cost Estimator](https://vardhanpro.github.io/A-1_Launchpad/)

## GitHub Repository
[GitHub Repository](https://github.com/VardhanPro/A-1_Launchpad)

---

This README file covers the key aspects of your project, providing users with a clear understanding of its features, technical details, and future enhancements.
