var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var PublicUser = new keystone.List('PublicUser');

PublicUser.add({
	name: String,
	avatar: String,
	//projects: [0, 1, 2, 5],
	organizations: { type: Types.Relationship, ref: 'Organization', many: true },
	socialMedia: {
		fb: String,
		github: String,
		linkedin: String,
	},
	about: String,
	skills: { type: Types.TextArray },
	interests: { type: Types.TextArray },
});

PublicUser.schema.add({
	password: String
});

/**
 * Registration
 */
//User.defaultColumns = 'name, email, isAdmin';
PublicUser.register();
