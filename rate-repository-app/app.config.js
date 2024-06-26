import 'dotenv/config';

export default  {
    "name": "rate-repository-app",
    "slug": "rate-repository-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "package": "com.rategithubrepos.rategithubrepos",
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "env": process.env.URL,
      "NODE_ENV": process.env.NODE_ENV
    },
    "entryPoint": "./App.js"
  }
