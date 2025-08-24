import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    jwt.verify(req.headers.token, "our_secret", (err, decoded) => {
        if (err) {
            return res.json({ message: "Invalid Token" });
        }
        req.decoded = decoded;
        next();
    });
}