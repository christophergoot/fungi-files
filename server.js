require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
const { DATABASE_URL, PORT } = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const observationsRouter = require('./observationsRouter').router;
const passport = require('passport');

const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });



app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.static('public'));
app.use('/observations', observationsRouter);
app.use('*', function (req, res) {
	res.status(404).json({ message: 'Not Found' });
});

// A protected endpoint which needs a valid JWT to access it
app.get('/api/protected', jwtAuth, (req, res) => {
	return res.json({
	  data: 'rosebud'
	});
  });
  

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if (err) {
				return reject(err);
			}
			server = app.listen(port, () => {
				console.log(`Your app is listening on port ${port}`);
				resolve();
			})
				.on('error', err => {
					mongoose.disconnect();
					reject(err);
				});
		});
	});
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing server');
			server.close(err => {
				if (err) {
					return reject(err);
				}
				resolve();
			});
		});
	});
};

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
	runServer().catch(err => console.error(err));
}

// app.listen(process.env.PORT || 8080);


module.exports = { runServer, app, closeServer };

// module.exports = { app };