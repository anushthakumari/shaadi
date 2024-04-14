import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
	ssl: "no-verify",
});

export default pool;
