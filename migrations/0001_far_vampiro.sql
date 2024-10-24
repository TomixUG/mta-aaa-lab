CREATE TABLE IF NOT EXISTS "paycheck" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer,
	"period" text NOT NULL,
	"grossPay" text NOT NULL,
	"taxDeductions" text NOT NULL,
	"netPay" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "paycheck" ADD CONSTRAINT "paycheck_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
