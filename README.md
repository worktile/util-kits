# util-kits

util kits for browser.js.

## Installation

`npm install @worktile/util-kits --save`

## Usage

```
// browser
var currentLanguage = utilMisc.browser.getLanguage();
console.log(currentLanguage);

```

```
// cookie
utilMisc.cookie('sid'); // get cookie 'sid'
utilMisc.cookie('sid', 'xxxxxxx'); // set cookie 'sid=xxxxxxx'

```

```
// URI
// get current url query param 
// http://127.0.0.1:8080?name=hello => 'hello'
utilMisc.URI.query('name'); 

(new utilMisc.URI('http://127.0.0.1:8080?name=hello')).query.name; // hello
```