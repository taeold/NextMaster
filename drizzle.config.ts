import "./drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.PG_HOST!,
    user: process.env.PG_USER!,
    password: process.env.PG_PWD!,
    database: process.env.PG_NAME!,
    ssl: false,
  },
  verbose: true,
  strict: true,
});
