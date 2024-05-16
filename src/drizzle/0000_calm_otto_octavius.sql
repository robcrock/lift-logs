CREATE TABLE IF NOT EXISTS "lift" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" text NOT NULL,
	"lift" text NOT NULL,
	"date" date NOT NULL,
	"sets" numeric NOT NULL,
	"reps" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"create_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
