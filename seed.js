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
      (0, 'Linus Torvalds', 'linus.torvalds@gmail.com', 'superSecretPassword!@##', 0),
      (1, 'Jane Purple', 'jane.purple@coolcompany.com', 'janePurple123', 1),
      (2, 'Ben Heinz', 'ben.heinz@coolcompany.com', 'penguinsAreCool', 2)
      ON CONFLICT (id) DO NOTHING;
      `);

    await db.execute(sql`
        SELECT setval('user_id_seq', 3, true); 
    `);

    await db.execute(sql`
    INSERT INTO public.paycheck (user_id, "period", gross_pay, tax_deductions, net_pay) VALUES
    (2, '2025-01', '5000', '1000', '4000'),
    (2, '2025-02', '5100', '1020', '4080'),
    (2, '2025-03', '5200', '1040', '4160'),
    (2, '2025-04', '5300', '1060', '4240'),
    (2, '2025-05', '5400', '1080', '4320'),
    (2, '2025-06', '5500', '1100', '4400'),
    (2, '2025-07', '5600', '1120', '4480'),
    (2, '2025-08', '5700', '1140', '4560'),
    (2, '2025-09', '5800', '1160', '4640'),
    (2, '2025-10', '5900', '1180', '4720'),
    
    (1, '2025-01', '6000', '1200', '4800'),
    (1, '2025-02', '6100', '1220', '4880'),
    (1, '2025-03', '6200', '1240', '4960'),
    (1, '2025-04', '6300', '1260', '5040'),
    (1, '2025-05', '6400', '1280', '5120'),
    (1, '2025-06', '6500', '1300', '5200'),
    (1, '2025-07', '6600', '1320', '5280'),
    (1, '2025-08', '6700', '1340', '5360'),
    (1, '2025-09', '6800', '1360', '5440'),
    (1, '2025-10', '6900', '1380', '5520'),
    
    (0, '2025-01', '7000', '1400', '5600'),
    (0, '2025-02', '7100', '1420', '5680'),
    (0, '2025-03', '7200', '1440', '5760'),
    (0, '2025-04', '7300', '1460', '5840'),
    (0, '2025-05', '7400', '1480', '5920'),
    (0, '2025-06', '7500', '1500', '6000'),
    (0, '2025-07', '7600', '1520', '6080'),
    (0, '2025-08', '7700', '1540', '6160'),
    (0, '2025-09', '7800', '1560', '6240'),
    (0, '2025-10', '7900', '1580', '6320');
`);

    console.log("Seeding completed.");
  } catch (error) {
    console.error("Error while seeding:", error);
  } finally {
    client.end();
  }
}

seed();
