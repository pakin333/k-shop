const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const port = 3000;
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/html');
    res.sendFile( path.join(__dirname, 'public', 'index.html'));
});

router.get('/product', (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'public','product', 'index.html'));
}   );

router.get('/product/:id', (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/html');
    const productId = req.params.id;
    if (productId === '1') {
        res.sendFile(path.join(__dirname, 'public','product', 'product1.html'));
    } else if (productId === '2') {
        res.sendFile(path.join(__dirname, 'public','product', 'product2.html'));
    } else {
        // res.status(404).send('Product not found');
        res.redirect('/product');
    }
    res.sendFile(path.join(__dirname,'public', 'product', 'index.html'));
});

app.use('/', router);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
