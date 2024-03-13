import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type { dogs } from "./schema";

export type NewDog = InferInsertModel<typeof dogs>;
export type Dog = InferSelectModel<typeof dogs>;
