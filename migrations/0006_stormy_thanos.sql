DROP TABLE "token";--> statement-breakpoint
ALTER TABLE "role" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE serial;