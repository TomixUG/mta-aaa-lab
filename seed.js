import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// import { role, user } from "./src/lib/db/schema";

import * as dotenv from "dotenv";
import { sql } from "drizzle-orm/sql";
dotenv.config();

const { DATABASE_URL } = process.env;
if (!DATABASE_URL) throw "PLEASE SPECIFY DATABASE_URL in .env";
// import { dev } from "$app/environment";

// const client = dev ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: 'require' });
const client = postgres(DATABASE_URL);
const db = drizzle(client, {});

// add data
async function seed() {
  try {
    await db.execute(sql`
       insert into role (id, name) values
          (0, 'Admin'),
          (1, 'Accounting'),
          (2, 'Employee')
          ON CONFLICT (id) DO NOTHING;
      `);

    await db.execute(sql`
      insert into "user" (id, name, email, password, role_id) values 
      (0, 'Linus Torvalds', 'linus.torvalds@gmail.com', 'mypass', 0),
      (1, 'Jane Purple', 'jane.purple@coolcompany.com', 'mypass', 1),
      (2, 'Ben Dover', 'ben.dover@coolcompany.com', 'mypass', 2)
      ON CONFLICT (id) DO NOTHING;
      `);

    console.log("Seeding completed.");
  } catch (error) {
    console.error("Error while seeding:", error);
  } finally {
    client.end();
  }
}

seed();
