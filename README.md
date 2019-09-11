# util-kits

util kits for browser.js.

## Installation

`npm install @worktile/util-kits --save`

## Usage

```
// browser
var currentLanguage = utilKits.browser.getLanguage();
console.log(currentLanguage);

```

```
// cookie
utilKits.cookie('sid'); // get cookie 'sid'
utilKits.cookie('sid', 'xxxxxxx'); // set cookie 'sid=xxxxxxx'

```

```
// URI
// get current url query param 
// http://127.0.0.1:8080?name=hello => 'hello'
utilKits.URI.query('name'); 

(new utilKits.URI('http://127.0.0.1:8080?name=hello')).query.name; // hello
```
