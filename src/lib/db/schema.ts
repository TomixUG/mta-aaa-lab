import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const role = pgTable("role", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  roleId: integer("role_id").references(() => role.id),
});

export const token = pgTable("token", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => user.id),
});
