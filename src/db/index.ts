import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

export const db = drizzle(
  `postgresql://${process.env.PG_USER}:${process.env.PG_PWD}@${process.env.PG_HOST}:5432/${process.env.PG_NAME}`,
  { schema }
);
