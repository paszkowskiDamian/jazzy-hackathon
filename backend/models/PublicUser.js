var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var PublicUser = new keystone.List('PublicUser');

PublicUser.add({
	email: {
		type: String,
		unique: true,
	},
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

PublicUser.schema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
		delete ret.password;
	}
});

/**
 * Registration
 */
//User.defaultColumns = 'name, email, isAdmin';
PublicUser.register();
