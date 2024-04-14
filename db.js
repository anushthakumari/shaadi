import pg from "pg";

import { isProd } from "@/utils/helpers";

const { Pool } = pg;

const pool = new Pool({
	ssl: isProd() ? "no-verify" : undefined,
});

export default pool;
