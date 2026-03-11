# SS Dairy Products

A web application for browsing and showcasing dairy products including ghee, butter, and paneer.

## Project Overview

SS Dairy Products is a Node.js and Express-based web application that displays information about various dairy products. The application features a clean, responsive user interface for customers to explore available products.

## Features

- **Product Showcase**: Display of dairy products (Ghee, Butter, Paneer)
- **Responsive Design**: Modern HTML and CSS for seamless viewing on different devices
- **Server-side Backend**: Express.js server for handling requests
- **CORS Support**: Cross-origin resource sharing enabled for API access

## Tech Stack

- **Frontend**: HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Additional Dependencies**: 
  - CORS (Cross-Origin Resource Sharing)
  - Body-parser (JSON parsing)

## Project Structure

```
.
├── public/              # Static files and front-end assets
│   ├── ghee.html       # Ghee product page
│   ├── butter.avif     # Butter product image
│   ├── ghee.css        # Styling for dairy products
│   ├── ghee,butter,panner.html  # Combined products page
│   ├── file.html       # General page
│   └── server.js       # Note: This file in public should be reviewed
├── server.js           # Main server file
├── package.json        # Project dependencies and metadata
└── README.md          # This file
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SriSarvesh08/SSdairy_products.git
   cd SSdairy_products
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

1. **Start the server**
   ```bash
   node server.js
   ```

2. **Access the application**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in server.js)

## Available Products

- **Ghee**: Pure butter ghee
- **Butter**: Fresh dairy butter
- **Paneer**: Indian cottage cheese

## Dependencies

- **express** (v5.1.0): Web application framework
- **cors** (v2.8.5): Middleware for enabling CORS
- **body-parser** (v2.2.0): Middleware for parsing request bodies

## Configuration

The server configuration can be adjusted in `server.js`. Default settings:
- Port: 3000 (or as configured in server.js)
- CORS: Enabled for cross-origin requests

## Development

To contribute to this project:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description of changes

## License

ISC

## Author

Sri Sarvesh B

## Contact

For inquiries about this project, please visit the [GitHub repository](https://github.com/SriSarvesh08/SSdairy_products)

---

**Last Updated**: March 2026