module.exports = {
    db: {
        database: process.env.DB_NAME || 'timeClock',
        username: process.env.DB_USER || 'timeClock',
        password: process.env.DB_PASS || 'timeClock',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './timeClock.sqlite'
        }
    }    
}