import Jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No Token, authorization denied" });

  Jwt.verify(token, process.env.TOKENJWS, (err, decode) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decode;
    next(); // Llamar a next() dentro de la función de callback de Jwt.verify
  });
};
