var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Organization = new keystone.List('Organization');

Organization.add({
	name: String,
//	projects: [1, 2],
	description: { type: Types.Html, wysiwyg: true },
	logo: String,
	location: { type: Types.Location },
	//events: [],
	admins: { type: Types.Relationship, ref: 'PublicUser', many: true },
	socialMedia: {
		fb: String,
		github: String,
		linkedin: String,
	},
	//periodicMeetup: null,
	tags: { type: Types.TextArray },
});

Organization.schema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
	}
});


/**
 * Registration
 */
//User.defaultColumns = 'name, email, isAdmin';
Organization.register();
