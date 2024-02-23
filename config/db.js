const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'akmal070',
	database: 'user_lists',
	host: 'localhost',
	port: 5433,
});

module.exports = pool;
