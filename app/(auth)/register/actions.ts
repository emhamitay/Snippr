'use server'
import type { ActionResult } from "@/app/components/Input";

//checks if username is available
export async function isUsernameAvailable(username: string) : Promise<ActionResult> {
    // run db check here
    return { status: "success" } ;
}

//checks if email is available
export async function isEmailAvailable(email: string): Promise<ActionResult> {
    // run db check here
    return { status: "success" } ;
}

export async function CreateAccount(formData: FormData){
    console.log(formData);
    
    //validate data

    //create user

    //rediract
    console.log('user created rediract');
}