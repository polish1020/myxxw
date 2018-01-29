module.exports = {
    apps: [{
        name: "app",
        script: "./server/app.js",
        env: {
            "NODE_ENV": "production",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }, {
        name: "static",
        script: "parcel build ./views/index.html"
    }]
}
