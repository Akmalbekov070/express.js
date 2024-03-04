const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'akmal070',
	database: 'user_list',
	host: 'localhost',
	port: 5432,
});

module.exports = pool;
