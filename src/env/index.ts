import 'dotenv/config';
import {z} from 'zod';

const envSchema = z.object({
	  NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'),
	  PORT: z.number().positive(),
	  MONGO_URI: z.string(),
	  JWT_SECRET: z.string(),
	  JWT_EXPIRES_IN: z.string(),
	  JWT_COOKIE_EXPIRES_IN: z.string(),
	  JWT_COOKIE_SECURE: z.boolean(),
	  JWT_COOKIE_SAME_SITE: z.enum(['strict', 'lax', 'none']),
	  JWT_COOKIE_HTTP_ONLY: z.boolean(),
	  JWT_COOKIE_DOMAIN: z.string(),
	  JWT_COOKIE_PATH: z.string(),
	  JWT_COOKIE_SIGNED: z.boolean(),
	  JWT_COOKIE_MAX_AGE: z.number().positive(),
	  JWT_COOKIE_ENCODE: z.function().args(z.string()).returns(z.string()),
	  JWT_COOKIE_DECODE: z.function().args(z.string()).returns(z.string()),
	  JWT_COOKIE_SECRET: z.string(),
	  JWT_COOKIE_KEYS: z.array(z.string()),
	  JWT_COOKIE_KEYGIRL: z.function().args(z.string()).returns(z.string()),
	  JWT_COOKIE_SIGNED_KEYS: z.array(z.string()),
	  JWT_COOKIE_SIGNED_KEYGIRL: z.function().args(z.string()).returns(z.string()),
	
});

