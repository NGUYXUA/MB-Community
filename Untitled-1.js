window.dataLayer_dag = window.dataLayer_dag || [];
window.dataLayer_dag.push({
    event: "<event>", // "pageView", "userLogin", "itemPurchased"
    site: {
        language: "<language>", // "de" für Deutsch, "en" für Englisch
    },
    user: {
        internal: "<internalTraffic>", // true für internen Traffic, false für externen Traffic
        loginState: "<loginState>", // "loggedIn", "loggedOut"
    },
    page: {
        name: "<pageName>", // "Homepage”
        type: "<pageType>", // "Landing", "Article"
        pagePath: "<pagePath>"
    },
    application: {
        id: "<applicationId>", // "app123" für eine eindeutige Anwendungs-ID
        version: "<applicationVersion>" // "1.2.3" für die Versionsnummer der Anwendung
    }
});
