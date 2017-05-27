var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post');

Post.add({
	name: String,
	image: String,
	body: String,
});

Post.schema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
	}
});

//User.defaultColumns = 'name, email, isAdmin';
Post.register();
