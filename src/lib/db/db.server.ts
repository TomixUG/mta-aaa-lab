// db/db.server.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as dotenv from "dotenv";
dotenv.config();

const { DATABASE_URL } = process.env;
if (!DATABASE_URL) throw "PLEASE SPECIFY DATABASE_URL in .env";
// import { dev } from "$app/environment";

// const client = dev ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: 'require' });
const client = postgres(DATABASE_URL);
export const db = drizzle(client, {});
