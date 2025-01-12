import { jwtDecode } from "jwt-decode";

export const JwtDecoded = (token: string) => jwtDecode(token);
