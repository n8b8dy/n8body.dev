CREATE TABLE IF NOT EXISTS "experiences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"company_name" text NOT NULL,
	"position_name" text NOT NULL,
	"description" text,
	"start_date" date NOT NULL,
	"end_date" date
);
