ALTER TABLE "token" ALTER COLUMN "user_id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "token" ALTER COLUMN "user_id" SET NOT NULL;