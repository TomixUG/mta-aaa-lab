import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
  throw new Error("No url");
}
export default {
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: DATABASE_URL,
  },
} satisfies Config;
