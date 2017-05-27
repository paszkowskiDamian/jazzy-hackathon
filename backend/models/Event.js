var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Event = new keystone.List('Event');

Event.add({
	name: String,
	location: { type: Types.Location },
	users: { type: Types.Relationship, ref: 'PublicUser', many: true },
	description: { type: Types.Html, wysiwyg: true },
	ownerId: { type: Types.Relationship, ref: 'Organization' },
	tags: { type: Types.TextArray },
});


/**
 * Registration
 */
//User.defaultColumns = 'name, email, isAdmin';
Event.register();
