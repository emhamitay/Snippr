import { users } from "../schema";
import { db } from "../index"
import { eq } from "drizzle-orm";

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export async function createUser(newUser : NewUser){
    return await db.insert(users).values(newUser).returning();
}

export async function isUsernameAvailable(username: string) : Promise<boolean> {
    const user = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return user.length === 0; // if length is 0, username is available
}

export async function isEmailAvailable(email: string) {
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return user.length === 0; // if length is 0, email is available
}