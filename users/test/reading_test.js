const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'joe' });
		joe.save()
			.then(() => done());
	})

	it('finds all the users with name joe', (done) => {
		User.find({ name: 'joe' })
			.then((users) => {
				assert(users[0]._id.toString() === joe._id.toString());
				done();
			});
	});	

	it('find u user with particular id', (done) => {
		User.findOne({ _id: joe._id })
			.then((user) => {
				assert(user.name === 'joe');
				done();
			});
	});
});