import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const payLoad = { userId };
  const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwtToken", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};