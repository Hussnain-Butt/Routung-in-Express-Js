// Route parameters are used to capture values specified at certain positions in the URL. They are defined by prefixing a colon (:) to the name of the parameter in the route path.

const express = require('express');
const app = express();

// Define a route with a parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Access the route parameter using `req.params`
  res.send(`User ID: ${userId}`);
});

// / Multiple Route Parameters

app.get('/user/:id/orders/:orderId', (req, res) => {
  const { id, orderId } = req.params;
  res.send(`User ID: ${id}, Order ID: ${orderId}`);
});

// Optional and Regex Route Parameters
// You can define optional route parameters using the ? character and use regular expressions to define more flexible routes.

app.get('/user/:id?', (req, res) => {
  const userId = req.params.id || 'Unknown';
  res.send(`User ID: ${userId}`);
});

// Regex Route Parameters
// This route will only match if the productId is a numeric value, e.g., /product/123.

app.get('/product/:productId([0-9]+)', (req, res) => {
  const productId = req.params.productId;
  res.send(`Product ID: ${productId}`);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
