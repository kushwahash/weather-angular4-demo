const PROXY_CONFIG = [
    {
        context: [
            "/defaultCityTest",
            "/getCityList",
            "/getWeatherByCity",
            "/getDefaultWeatherByCity",
            "/getUSCityList",
            "/to",
            "/proxy"
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;