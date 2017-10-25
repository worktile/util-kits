var defaultLanguage = 'zh-cn';
var supportLanguages = [
    'zh-cn',
    'zh-tw',
    'en-us'
];
var EN_REGEX = /^en/g;

export default {
    setDefaultLanguage: function(language) {
        defaultLanguage = language;
    },
    setSupportLanguages: function(languages) {
        supportLanguages = languages
    },
    getLanguage: function() {
        var language = (navigator.language || navigator.userLanguage);
        language = language ? language.toLowerCase() : '';
        if (supportLanguages.indexOf(language) >= 0) {
            return language;
        } else if (EN_REGEX.test(language)) {
            return 'en-us';
        } else {
            return defaultLanguage;
        }
    }
};