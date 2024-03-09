const fs = require('fs');
const path = require('path');
const pathModule = path.join(__dirname, '../data/users.json');
const pool = require('../config/db');

module.exports = class User {
	constructor(username, age) {
		(this.username = username), (this.age = age);
	}

	save() {
		let users = [];
		fs.readFile(pathModule, 'utf8', (err, data) => {
			if (err) throw err;
			users = JSON.parse(data);
			users.push({ username: this.username, age: this.age });
			fs.writeFile(pathModule, JSON.stringify(users), err => {
				if (err) throw err;
			});
		});
	}
	static async findAll() {
		const users = await pool.query('SELECT * FROM user_info');
		return users.rows;
	}

	// static findByUid(uid) {
	// 	const data = () => fs.readFileSync(pathToFile, 'utf8');
	// 	const users = JSON.parse(data());
	// 	const user = users.find(el => el.uid === uid);
	// 	return user;
	// }
};
