export enum ShellActions {
    SHELL_VERSION = "shellVersion",
    SHELL_PUSH_TOKEN = "shellPushToken",
    SHELL_PLATFORM = "shellPlatform",
}

export enum ShellEvents {
    SHELL_ADMOB_INITIALIZE_FULL = "shellAdmobInitializeFull",
    SHELL_ADMOB_INITIALIZE_FULL_RESPONSE = "shellAdmobInitializeFullResponse",
    SHELL_ADMOB_INITIALIZE = "shellAdmobInitialize",
    SHELL_ADMOB_INITIALIZE_RESPONSE = "shellAdmobInitializeResponse",
    SHELL_ADMOB_TRACKING_AUTHORIZATION_STATUS = "shellAdmobTrackingAuthorizationStatus",
    SHELL_ADMOB_TRACKING_AUTHORIZATION_STATUS_RESPONSE = "shellAdmobTrackingAuthorizationStatusResponse",
    SHELL_ADMOB_REQUEST_TRACKING_AUTHORIZATION_STATUS = "shellAdmobRequestTrackingAuthorizationStatus",
    SHELL_ADMOB_REQUEST_TRACKING_AUTHORIZATION_STATUS_RESPONSE = "shellAdmobRequestTrackingAuthorizationStatusResponse",
    SHELL_ADMOB_REQUEST_CONSENT_INFO = "shellAdmobRequestConsentInfo",
    SHELL_ADMOB_REQUEST_CONSENT_INFO_RESPONSE = "shellAdmobRequestConsentInfoResponse",
    SHELL_ADMOB_SHOW_CONSENT_FORM = "shellAdmobShowConsentForm",
    SHELL_ADMOB_SHOW_BANNER = "shellAdmobShowBanner",
    SHELL_ADMOB_SHOW_BANNER_RESPONSE = "shellAdmobShowBannerResponse",
    SHELL_ADMOB_SHOW_INTERSTITIAL = "shellAdmobShowInterstitial",
    SHELL_ADMOB_SHOW_INTERSTITIAL_RESPONSE = "shellAdmobShowInterstitialResponse",
    SHELL_ADMOB_HIDE_BANNER = "shellAdmobHideBanner",
    SHELL_ADMOB_HIDE_BANNER_RESPONSE = "shellAdmobHideBannerResponse",
    SHELL_ADMOB_BANNER_LOADED = "shellAdmobBannerLoaded",
    SHELL_ADMOB_BANNER_FAILED_TO_LOAD = "shellAdmobBannerFailedToLoad",
    SHELL_ADMOB_BANNER_SIZE_CHANGED = "shellAdmobBannerSizeChanged",
    SHELL_ADMOB_BANNER_OPENED = "shellAdmobBannerOpened",
    SHELL_ADMOB_BANNER_CLOSED = "shellAdmobBannerClosed",
    SHELL_ADMOB_INTERSTITIAL_DISMISSED = "shellAdmobInterstitialDismissed",
    SHELL_ADMOB_INTERSTITIAL_FAILED_TO_LOAD = "shellAdmobInterstitialFailedToLoad",
    SHELL_ADMOB_INTERSTITIAL_FAILED_TO_SHOW = "shellAdmobInterstitialFailedToShow",
    SHELL_ADMOB_INTERSTITIAL_LOADED = "shellAdmobInterstitialLoaded",
    SHELL_ADMOB_INTERSTITIAL_SHOWED = "shellAdmobInterstitialShowed",
    SHELL_ADMOB_RESUME_BANNER = "shellAdmobResumeBanner",
    SHELL_ADMOB_RESUME_BANNER_RESPONSE = "shellAdmobResumeBannerResponse",
    SHELL_ADMOB_REMOVE_BANNER = "shellAdmobRemoveBanner",
    SHELL_ADMOB_REMOVE_BANNER_RESPONSE = "shellAdmobRemoveBannerResponse",
    SHELL_ANALYTICS_LOG_EVENT = "shellAnalyticsLogEvent",
    SHELL_ANALYTICS_SET_USER_ID = "shellAnalyticsSetUserId",
    SHELL_ANALYTICS_SET_USER_PROPERTY = "shellAnalyticsSetUserProperty",
    SHELL_ANALYTICS_SET_CURRENT_SCREEN = "shellAnalyticsSetCurrentScreen",
    SHELL_ANALYTICS_SET_SESSION_TIMEOUT_DURATION = "shellAnalyticsSetSessionTimeoutDuration",
    SHELL_ANALYTICS_SET_ENABLED = "shellAnalyticsSetEnabled",
    SHELL_ANALYTICS_IS_ENABLED = "shellAnalyticsIsEnabled",
    SHELL_ANALYTICS_IS_ENABLED_RESPONSE = "shellAnalyticsIsEnabledResponse",
    SHELL_ANALYTICS_RESET_ANALYTICS_DATA = "shellAnalyticsResetAnalyticsData",
    SHELL_DEVICE_GET_ID = "shellDeviceGetId",
    SHELL_DEVICE_GET_ID_RESPONSE = "shellDeviceGetIdResponse",
    SHELL_PUSH_REQUEST_PERMISSION = "shellPushRequestPermission",
    SHELL_PUSH_REQUEST_PERMISSION_RESPONSE = "shellPushRequestPermissionResponse",
    SHELL_PUSH_REGISTER = "shellPushRegister",
    SHELL_PUSH_REGISTER_RESPONSE = "shellPushRegisterResponse",
    SHELL_SCANNER_RESPONSE = "shellScannerResponse",
    SHELL_SCANNER_REQUEST_PERMISSION = "shellScannerRequestPermission",
    SHELL_SCANNER_REQUEST_PERMISSION_RESPONSE = "shellScannerRequestPermissionResponse",
    SHELL_SCANNER_START = "shellScannerStart",
    SHELL_SCANNER_STOP = "shellScannerStop",
    SHELL_SCANNER_ERROR = "shellScannerError",
    SHELL_BROWSER_OPEN = "shellBrowserOpen",
    SHELL_BROWSER_OPEN_RESPONSE = "shellBrowserOpenResponse",
    SHELL_VIBRATION = "shellVibration",
    SHELL_STATUSBAR_SET_STYLE = "shellStatusbarSetStyle",
    SHELL_STATUSBAR_SET_BACKGROUND_COLOR = "shellStatusbarSetBackgroundColor",
    SHELL_NETWORK_GET_CONNECTION = "shellNetworkGetConnection",
    SHELL_NETWORK_GET_CONNECTION_RESPONSE = "shellNetworkGetConnectionResponse",
    SHELL_NETWORK_ON_CHANGE = "shellNetworkOnChangeResponse",
    SHELL_NETWORK_ON_CHANGE_RESPONSE = "shellNetworkOnChangeResponse",
    SHELL_NETWORK_REMOVE_LISTENERS = "shellNetworkRemoveListeners",
}

export enum ShellErrors {
    SHELL_LOADING_REMOTE_OK = "shellLoadingRemoteOk",
}
