var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var PublicUser = keystone.list('PublicUser');
var Organization = keystone.list('Organization');
var Project = keystone.list('Project');
var mongoose = keystone.mongoose;

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

const singleUser = {
	id: 45,
	name: 'Jasiu dupa',
	avatar: 'https://www.contentchampion.com/wp-content/uploads/2013/11/avatar-placeholder.png',
};

const singleOrg = {
	id: 23,
	name: 'TO jest org',
	shortDescription: 'Jestesmy klubem w ktorym sie je ;)',
	logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
	location: {
		long: 50.2899672,
		lat: 18.6764128,
	},
};

const singleProj = {
	id: 233,
	shortDescription: 'To jest jakies short description',
	image: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg',
	name: 'TO jest prod',
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

		next();
	});

	app.options("/*", function(req, res, next){
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		res.send(200);
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
			if(err || !result) {
				res.status(400).json({
					message: `User not exist`
				});
			} else {
				res.json(result);
			}
		});
	});

	app.post('/login', ({body}, res, next) => {
		const {email, password} = body;

		PublicUser.model.findOne({email, password}).exec((err, result) => {
			if(err || !result) {
				res.status(401).json({
					message: 'Invalid credentials',
				});
			} else {
				res.json(result);
			}
		});
	});

	app.post('/register', ({body}, res, next) => {
		const {email, password, name, about, skills, interests, avatar} = body;

		var user = new PublicUser.model({
			email,
			password,
			name,
			about,
			skills,
			interests,
			avatar
		});

		user.save((err, result) => {
			if(err){
				res.status(400).send(err)
			} else {
				res.status(200).send(result);
			}
		});
	});

	// app.get('/users/:id', ({params}, res, next) => {
	// 	const { id } = params;
  //
  //
	// 	res.json({
	// 		name: 'Tomek Ferens',
	// 		id: id,
	// 		avatar: 'https://www.contentchampion.com/wp-content/uploads/2013/11/avatar-placeholder.png',
	// 		projects: [singleProj, singleProj, singleProj, singleProj],
	// 		organizations: [singleOrg, singleOrg, singleOrg],
	// 		socialMedia: {
	// 			fb: 'https://expressjs.com/en/starter/installing.html',
	// 			github: 'https://expressjs.com/en/starter/installing.html',
	// 			linkedin: 'https://expressjs.com/en/starter/installing.html',
	// 		},
	// 		about: 'Czesc mam na imie tomek, lubię jeść',
	// 		skills: ['js', 'php', 'good practice', 'architecture'],
	// 		interests: ['informatyka', 'dziewczyny', 'jedzenie', 'machine learnign']
	// 	});
	// });

	app.get('/organizations/search/:location/:tags/:radius/:name', ({params}, res, next) => {
		const {location: location_, tags: tags_, radius, name} = params;
		const location = decodeURI(location_).split(',');
		const tags = decodeURI(tags_).split(',');
		let queriesAnd = [];

		if(location_ != 'all') {
			queriesAnd.push({$where: getQueryFunction()});
		}

		if(tags_ != 'all') {
			queriesAnd.push({ tags: { $in: tags } });
		}

		if(name != 'all') {
			queriesAnd.push({ name: new RegExp(`^${name}`, 'i') });
		}

		function getQueryFunction() {
			return `function() {
				function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
					var R = 6371; // Radius of the earth in km
					var dLat = deg2rad(lat2-lat1);  // deg2rad below
					var dLon = deg2rad(lon2-lon1);
					var a =
						Math.sin(dLat/2) * Math.sin(dLat/2) +
						Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
						Math.sin(dLon/2) * Math.sin(dLon/2)
					;
					var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
					var d = R * c; // Distance in km
					return d;
				}

				function deg2rad(deg) {
					return deg * (Math.PI/180)
				}
				
				return (
					this.location.geo && 
					getDistanceFromLatLonInKm( ${location[0]},  ${location[1]}, this.location.geo[0], this.location.geo[1]) < ${radius}
				)
			}`;
		}

		let query = {};

		if(queriesAnd.length) {
			query = { $and : queriesAnd };
		}

		Organization.model.find(query, (err, result) => {

			if(err) {
				res.status(400).json({
					message: err,
				});
			} else {
				res.json({
					organizations: result,
				});
			}
		});
	});

	app.get('/organizations/:id', ({params}, res, next) => {
		const { id } = params;

		Organization.model.findOne({
			_id: id,
		}).populate('users projects admins').exec((err, result) => {
			if(err || !result){
				res.status(400).send(err)
			} else {
				res.json(result);
			}
		});
	});


	app.get('/project/:id', ({params}, res, rext) => {
		const { id } = params;

		Project.model.findOne({
			_id: id,
		}).populate('owner users posts').exec((err, result) => {
			if(err || !result){
				res.status(400).send(err)
			} else {
				res.json(result);
			}
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
			users: [singleUser, singleUser, singleUser, singleUser],
			description: '<h1>Robienie pizzy!</h1><br/><span>O tym projekcie robieniu pizzy</span>',
			ownerId: 6,
			tags: ['jedzenie', 'js', 'informatyka'],
		});
	});

	app.get('/organization/tags', ({params}, res, rext) => {
		Organization.model.distinct('tags', (err, result) => {
			if(err || !result){
				res.status(400).send(err);
			} else {
				res.json({
					tags: result
				});
			}
		});
	});

	app.get('/skills', ({params}, res, rext) => {
		res.json({
			skills: ['js', 'php', 'good practice', 'architecture'],
		});
	});

	app.get('/search/:name', ({params}, res, rext) => {
		const { name } = params;
		const org = new Promise((resolve) => {
			Organization.model.find({
				tags: {$in: [name]}
			}).populate('users projects admins').exec((err, result) => {
				if(err){
					console.log('err', err);
				} else {
					resolve(result);
				}
			});
		});

		const proj = new Promise((resolve) => {
			Project.model.find({
				tags: {$in: [name]}
			}, (err, result) => {
				if(err) {
					console.log('err', err);
				} else {
					resolve(result);
				}
			});
		});

		Promise.all([org, proj]).then(([orgs,projs]) => {
			res.json({
				organizations: orgs,
				projects: projs,
				events: [{
					name: 'Event 1',
					id: 30,
					logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
				}, {
					name: 'Event 2',
					id: 220,
					logo: 'https://image.shutterstock.com/display_pic_with_logo/698308/698308,1316410880,14/stock-photo-supreme-pizza-lifted-slice-84904912.jpg'
				}]
			});
		});
	});
};
