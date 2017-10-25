var defaultLanguage = 'en-us';
var supportLanguages = [
    'zh-cn',
    'zh-tw',
    'en-us'
];

export default {
    getLanguage: function() {
        var language = (navigator.language || navigator.userLanguage).toLowerCase();
        if (supportLanguages.indexOf(language) >= 0) {
            return language;
        } else {
            return defaultLanguage;
        }
    }
};