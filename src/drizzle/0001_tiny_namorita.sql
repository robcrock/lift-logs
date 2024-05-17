ALTER TABLE "lift" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lift" DROP COLUMN IF EXISTS "userId";