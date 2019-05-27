const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_ADDRESS = process.env.DB_ADDRESS || 'mongodb://localhost:27017';
const port = process.env.PORT || 3005;
const app = express();

// 	//DB Connection
// mongoose.connect(`${DB_ADDRESS}/vanilla`, { useNewUrlParser: true });
// let db = mongoose.connection;

// 	//Check for connection and errors
// db.once('open', () => { console.log('Db heLLa conNecteD') });
// db.on('error', err => { console.log('That ain\'t right...', err)});

// 	// Init App
// const app = express();

// 	// Bring in Models
// let Admin = require('./models/admin');
// let Order = require('./models/orders');
// let User = require('./models/users');

// Load View Engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Public
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Homepage',
		heading: 'Welcome to my app!',
		content: 'Content!'
	});
});

// Route Files
let orders = require('./routes/orders');
// app.use('/orders', orders);
let users = require('./routes/users');
// app.use('/users', users);
let admin = require('./routes/admin');
// app.use('/admin', admin);

// Start server
app.listen(port, ()  => { console.log(`I'll be right by your side on PORT ${port}, hold up.` )});
