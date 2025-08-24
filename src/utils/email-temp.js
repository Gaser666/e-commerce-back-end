import jwt from "jsonwebtoken";
export const emailTemp = (email) => {
    const token = jwt.sign({ email: email }, "our_secret_key");
    return `
    <div style="max-width: 700px; margin:auto; border:10px solid #ddd; padding:50px 20px; font-size:110%;">
    <h2 style="text-align:center; text-transform:uppercase;color:teal;">Welcome to the E-commerce.</h2>
    <p>Congratulations! You're almost set to start using E-commerce.
        Just click the button below to validate your email address.
    </p>
    
    <a href=${`http://localhost:3000/users/verify/${token}`} style="background: crimson; text-decoration:none; color:white; padding:10px 20px; margin:10px 0; display:inline-block;">Verify your email</a>
 
    <p>If the button doesn't work for any reason, you can also click on the link below:</p>
 
    <div>${`http://localhost:3000/users/verify/${email}`}</div>
    </div>
    `
}