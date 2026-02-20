//Write a function formatUser(name, email) that trims extra spaces, converts name to uppercase, masks the email (example: ra***@gmail.com), and returns a formatted string using template literals

function formatUser(name,email) {
    //Trim extra spaces
    const trimmedName =name.trim().toUpperCase();
    const trimmedEmail =email.trim();

    const [username,domain] =trimmedEmail.split("@");

    //Mask email(first 2 chars visible)
    const maskedUsername = username.slice(0,2) + "***";

    //Return formatted string using template literals
    return `User: ${trimmedName} | Email: ${maskedUsername}@${domain}`;
}

console.log(formatUser("  Sanjay Kumar  ","  sanjay@gmail.com  "));
