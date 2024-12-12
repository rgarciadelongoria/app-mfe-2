import { Environment } from "@interfaces/environment.interface";

export const environment: Environment = {
    name: 'pro',
    api: {
        host: 'https://www2.app2.com/servicios-v2/',
    },
    web: {
        host: 'https://rgarciadelongoria.github.io/app2-app'
    },
    admob: {
        testingDevices: [''],
        initializeForTesting: false,
        idBannerAndroid: 'ca-app-pub-9601748671813438/7899125459',
        idBannerIos: 'ca-app-pub-9601748671813438/9567430346',
        idInterstitialAndroid: 'ca-app-pub-9601748671813438/4982028516',
        idInterstitialIos: 'ca-app-pub-9601748671813438/3002021997'
    }
}