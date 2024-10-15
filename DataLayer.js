window.dataLayer_dag = window.dataLayer_dag || [];
window.dataLayer_dag.push({
    event: "<event>", // "pageView", "userLogin", "itemPurchased"
    site: {
        language: "<language>" // "de" für Deutsch, "en" für Englisch
    },
    user: {
        loginState: "<loginState>" // "loggedIn", "loggedOut"
    },
    page: {
        name: "<pageName>", // "Homepage”
        type: "<pageType>", // "Landing", "Article"
        pagePath: "<pagePath>"
    }
});
