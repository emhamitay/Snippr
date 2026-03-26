'use server'
type UsernameStatus = "taken" | "pending..." | "available" | "empty" | "missing characters" ;
type UsernameCheckResult = { status : UsernameStatus }

//checks if username is available
export async function isUsernameAvailable(username: string) : Promise<UsernameCheckResult> {
    // Check if username is empty
    if (!username || username.trim() === "") {
        return { status: "empty" };
    }
    // Minimum username length (commonly 3 characters)
    if (username.length < 3) {
        return { status: 'missing characters' }; // Or use a custom status like "too short"
    }
    // DB check would go here
    return { status: "available" };
}

type EmailCheckResult = { status : Exclude<UsernameStatus, "missing characters"> | "invalid email" }

//checks if email is available
export async function isEmailAvailable(email: string): Promise<EmailCheckResult> {
    // Check if email is empty
    if (!email || email.trim() === "") {
        return { status: "empty" };
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { status: "invalid email" };
    }
    // DB check would go here
    return { status: "available" };
}