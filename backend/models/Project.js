var keystone = require('keystone');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project');

Project.add({
	name: String,
	owner: { type: Types.Relationship, ref: 'Organization' },
	users: { type: Types.Relationship, ref: 'PublicUser', many: true },
	posts: { type: Types.Relationship, ref: 'Post', many: true },
	image: String,
	description: { type: Types.Html, wysiwyg: true },
	shortDescription: String,
	socialMedia: {
		fb: String,
		github: String,
		linkedin: String,
	},
	tags: { type: Types.TextArray },
	skillsNeeded: { type: Types.TextArray },
	likes: Number,
});

Project.schema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
	}
});

//User.defaultColumns = 'name, email, isAdmin';
Project.register();
