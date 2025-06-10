CREATE TABLE IF NOT EXISTS "domains" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"background_color" text,
	"border_color" text,
	"featured" boolean DEFAULT false NOT NULL,
	CONSTRAINT "domains_slug_unique" UNIQUE("slug"),
	CONSTRAINT "domains_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "technologies" ADD COLUMN "domainId" uuid;