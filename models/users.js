const fs = require('fs');
const path = require('path');

module.exports = class User {
	constructor(username, age) {
		(this.username = username), (this.age = age);
	}
	save() {
		let users = [];
		fs.readFile(path.join(__dirname, '../data/users.json'), 'utf8', (err, data) => {
			if (err) throw err;
			users = JSON.parse(data);
			users.push({ username: this.username, age: this.age });
			fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users), err => {
				if (err) throw err;
			});
		});
	}
	static findAll() {
		return users;
	}
};
