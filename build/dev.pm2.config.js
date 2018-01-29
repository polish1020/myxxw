module.exports = {
    apps: [{
        name: "app",
        script: "./server/app.js",
        watch: ["server"],
        env: {
            "NODE_ENV": "development",
            PORT: 3000
        }
    }, {
        name: "static",
        watch: ["client"],
        interpreter: "parcel",
        script: "./views/index.html",
    }]
}
