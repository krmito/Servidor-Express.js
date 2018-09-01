const express = require('express');
const router = express.Router();


const items = [
	{id: 1, name: 'Product1'},
	{id: 2, name: 'Product2'},
	{id: 3, name: 'Product3'}
];


router.get('/', (req,res) => {
	res.render('index', {
		title: 'WebStore'
	});
});

router.get('/products', (req,res,next) => {
	res.render('products', {
		title : 'Lista de Productos',
		items: items
	});
});

router.post('/new-product', (req,res,next) => {
	var {newItem} = req.body;
	items.push({
		id: items.length + 1,
		name : newItem
	});
	res.redirect('/products');
});
module.exports = router;