import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "shaadi",
	password: "root",
	port: 5432,
});

export default pool;
