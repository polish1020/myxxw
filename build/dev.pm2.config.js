module.exports = {
    apps: [{
        name: "app",
        script: "./server/app.js",
        watch: ["server"],
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }, {
        name: "static",
        watch: ["client"],
        interpreter: "parcel",
        script: "./views/index.html",
    }]
}
