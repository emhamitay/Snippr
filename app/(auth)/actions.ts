'use server'

import type { ActionResult } from "@/app/components/Input";
import { createUser , isEmailAvailable as runIsEmailAvailable, isUsernameAvailable as runIsUsernameAvailable } from "@/lib/db/queries/users";
import type { NewUser } from "@/lib/db/queries/users";
import { revalidatePath } from "next/cache";

export async function Login(formData: FormData){
    console.log('login');
}

export async function Logout(){
    console.log('logout');
    
}

//checks if username is available
export async function isUsernameAvailable(username: string) : Promise<ActionResult> {
    try {
        const available = await runIsUsernameAvailable(username);
        if (!available) {
            return { status: "error" };
        }
        return { status: "success" };
    } catch (error) {
        console.error('Error connecting to database:', error);
        return { status: "error" };
    }
}

//checks if email is available
export async function isEmailAvailable(email: string): Promise<ActionResult> {
    try {
        const available = await runIsEmailAvailable(email);
        if (!available) {
            return { status: "error" };
        }
        return { status: "success" };
    } catch (error) {
        console.error('Error connecting to database:', error);
        return { status: "error" };
    }
}

export async function CreateAccount(formData: FormData) {
    //create object from form data
    const user : NewUser = {
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }
    
    try {
        const createdUser = await createUser(user);
        revalidatePath("/app/");
        //
    } catch (error) {
        console.error('Error creating user:', error);
        //
    }
}