export interface User {
  id: string;
  email: string;
  displayName: string | null;
  createdAt: string;
}

// what the server returns after successful login/register
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds until access token expires
}

// The decoded payload inside a JWT — what lives in req.user after auth middleware
export interface JwtPayload {
  sub: string;   // subject = user ID (sub is the standard JWT claim name)
  email: string;
  iat: number;   // issued at (set automatically by jwt library)
  exp: number;   // expires at (set automatically by jwt library)
}