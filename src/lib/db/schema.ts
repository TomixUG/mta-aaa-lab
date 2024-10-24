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

export type Auth = {
  user: typeof user.$inferSelect;
  role: typeof role.$inferInsert;
};

export const token = pgTable("token", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: integer("user_id").references(() => user.id),
});

export const paycheck = pgTable("paycheck", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: integer("user_id").references(() => user.id),
  period: text("period").notNull(),
  gross_pay: text("gross_pay").notNull(),
  tax_deductions: text("tax_deductions").notNull(),
  net_pay: text("net_pay").notNull(),
});

export const accounting = pgTable("accounting", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
});
