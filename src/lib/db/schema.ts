import { integer, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const role = pgTable("role", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  roleId: integer("role_id").references(() => role.id),
});

export type User = typeof user.$inferSelect;

export const token = pgTable("token", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: integer("user_id").references(() => user.id),
});
