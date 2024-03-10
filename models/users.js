// const fs = require('fs');
// const path = require('path');
// const pathModule = path.join(__dirname, '../data/users.json');
const pool = require('../config/db');

module.exports = class User {
	constructor(username, age) {
		(this.username = username), (this.age = age);
	}

	async save() {
		await pool.query(
			`
		INSERT INTO user_info (username, age) VALUES ($1,$2)
		`,
			[this.username, this.age]
		);
		// let users = [];
		// fs.readFile(pathModule, 'utf8', (err, data) => {
		// 	if (err) throw err;
		// 	users = JSON.parse(data);
		// 	users.push({ username: this.username, age: this.age });
		// 	fs.writeFile(pathModule, JSON.stringify(users), err => {
		// 		if (err) throw err;
		// 	});
		// });
	}
	static async findAll() {
		const users = await pool.query('SELECT * FROM user_info');
		return users.rows;
	}

	static async findByid(id) {
		const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [id]);
		return user.rows[0];
	}
	static async findByUpdate(id, username, age) {
		await pool.query('UPDATE user_info SET username = $1, age = $2 WHERE id = $3', [username, age, id]);
	}
};
