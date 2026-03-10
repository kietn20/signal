export const SIGNAL_VERSION = '0.1.0';

// Types
export type { User, AuthTokens, JwtPayload } from './types/user.types';
export type { Session, SessionStatus }        from './types/session.types';
export type { ApiSuccess, ApiError, ApiResponse } from './types/api.types';

// Schemas (both the Zod object AND the inferred type)
export { RegisterSchema, LoginSchema, RefreshTokenSchema } from './schemas/auth.schemas';
export type { RegisterInput, LoginInput }                  from './schemas/auth.schemas';

export { CreateSessionSchema, UpdateSessionSchema } from './schemas/session.schemas';
export type { CreateSessionInput, UpdateSessionInput } from './schemas/session.schemas';