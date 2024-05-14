import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/db/schema.ts",
  out: "src/drizzle",
  dialect: "postgresql", // "postgresql" | "mysql"
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!,
  },
});
