var keystone = require('keystone');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project');

Project.add({
	name: String,
	ownerId: { type: Types.Relationship, ref: 'Organization' },
	users: { type: Types.Relationship, ref: 'PublicUser', many: true },
	posts: { type: Types.TextArray },
	image: String,
	description: { type: Types.Html, wysiwyg: true },
	socialMedia: {
		fb: String,
		github: String,
		linkedin: String,
	},
	tags: { type: Types.TextArray },
	skillsNeeded: { type: Types.TextArray },
	likes: Number,
});
//User.defaultColumns = 'name, email, isAdmin';
Project.register();
