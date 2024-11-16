export default () => ({
	databaseUrl: process.env.DATABASE_URL,
	accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
	accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION
})
