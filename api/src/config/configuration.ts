export default () => ({
	port: process.env.PORT,
	redisHost: process.env.REDIS_HOST,
	redisPort: process.env.REDIS_PORT,
	databaseUrl: process.env.DATABASE_URL,
	accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
	accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION
})
