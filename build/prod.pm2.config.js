module.exports = {
    apps: [{
        name: "app",
        script: "./server/app.js",
        env: {
            "NODE_ENV": "production",
            PORT: 80
        }
    }, {
        name: "static",
        interpreter: "parcel",
        script: "./views/index.html"
    }]
}
