var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var PublicUser = keystone.list('PublicUser');
var mongoose = keystone.mongoose;

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

	// Views
	app.get('/', routes.views.index);

	app.post('/users', ({body}, res, next) => {
		const {name, email, password} = body;

		var user = new PublicUser.model({
			name,
			email,
			password
		});

		user.save(() => {
			res.status(200).end();
		});
	});

	app.get('/users/:id', ({params, body}, res, next) => {
		const { id } = params;
		PublicUser.model.findOne({_id: mongoose.Types.ObjectId( id )}).exec((err, result) => {
			if(err) {
				res.send(500).end(err);
			} else {
				res.json(result);
			}
		})
	});

	app.get('/users/:id', ({params}, res, next) => {
		const { id } = params;


		res.json({
			name: 'Tomek Ferens',
			id: id,
			avatar: 'https://www.contentchampion.com/wp-content/uploads/2013/11/avatar-placeholder.png',
			projects: [0, 1, 2, 5],
			organizations: [3, 4, 6],
			socialMedia: {
				fb: 'https://expressjs.com/en/starter/installing.html',
				github: 'https://expressjs.com/en/starter/installing.html',
				linkedin: 'https://expressjs.com/en/starter/installing.html',
			},
			about: 'Czesc mam na imie tomek, lubię jeść',
			skills: ['js', 'php', 'good practice', 'architecture'],
			interests: ['informatyka', 'dziewczyny', 'jedzenie', 'machine learnign']
		});
	});

	app.get('/organizations/:id', ({params}, res, next) => {
		const { id } = params;

		res.json({
			name: 'Klub jedzenia',
			id,
			projects: [1, 2],
			description: '<h1>Klub jedzenia wita!</h1><br/><span>Jestesmy klubem jedzenia xD</span>>',
			logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
			location: {
				long: 50.2899672,
				lat: 18.6764128,
			},
			events: [],
			admins: [1, 3, 5],
			socialMedia: {
				fb: 'https://expressjs.com/en/starter/installing.html',
				github: 'https://expressjs.com/en/starter/installing.html',
				linkedin: 'https://expressjs.com/en/starter/installing.html',
			},
			periodicMeetup: null,
			tags: ['informatyka', 'jedzenie', 'dupy'],

		});
	});


	app.get('/project/:id', ({params}, res, rext) => {
		const { id } = params;

		res.json({
			name: 'Zjedz pizze chellange',
			id,
			ownerId: 50,
			users: [0, 1, 5],
			posts: [{
				title: 'Jemy',
				image: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
				body: 'Zjedz chellage opis'
			}, {
				title: 'Jemy 2',
				image: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
				body: 'Zjedz chellage 2 opis'
			}, {
				title: 'Jemy 3',
				image: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
				body: 'Zjedz chellage 3 opis'
			}],
			image: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
			description: '<h1>Zledz pizza projekt!</h1><br/><span>O tym projekcie</span>',
			socialMedia: {
				fb: 'https://expressjs.com/en/starter/installing.html',
				github: 'https://expressjs.com/en/starter/installing.html',
				linkedin: 'https://expressjs.com/en/starter/installing.html',
			},
			tags: ['jedzenie', 'pizza', 'dupy'],
			skillsNeeded: ['eating', 'fat', 'js'],
			likes: 5,
		});
	});

	app.get('/events/:id', ({params}, res, rext) => {
		const { id } = params;

		res.json({
			name: 'Robienie pizzy',
			id,
			location: {
				long: 50.2899672,
				lat: 18.6764128,
			},
			users: [0, 34, 54, 2],
			description: '<h1>Robienie pizzy!</h1><br/><span>O tym projekcie robieniu pizzy</span>',
			ownerId: 6,
			tags: ['jedzenie', 'js', 'informatyka'],
		});
	});

	app.get('/tags', ({params}, res, rext) => {
		res.json({
			tags: ['jedzenie', 'js', 'informatyka', 'pizza', 'dupy']
		});
	});

	app.get('/skills', ({params}, res, rext) => {
		res.json({
			skills: ['js', 'php', 'good practice', 'architecture'],
		});
	});

	app.get('/search/:name', ({params}, res, rext) => {
		res.json({
			organizations: [{
				name: 'Klub jedzenie',
				id: 43,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}, {
				name: 'Klub jedzenia 2',
				id: 40,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}, {
				name: 'Klub jedzenie 3',
				id: 1,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}],
			projects: [{
				name: 'Projekt 1',
				id: 20,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}, {
				name: 'Projekt 2',
				id: 3,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}, {
				name: 'Projekt 3',
				id: 1,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}],
			events: [{
				name: 'Event 1',
				id: 30,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}, {
				name: 'Event 2',
				id: 220,
				logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
			}]
		})
	});
};
