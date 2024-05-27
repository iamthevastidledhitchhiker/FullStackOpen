1. Browser makes GET request for notes.html
2. Server sends notes.html to browser.
3. Browser makes GET request for main.css
4. Server sends main.css to browser. 
5. Browser makes GET request for spa.js
6. Server sends spa.js
7. Browser begins executing spa.js
8. Browser makes GET request (via spa.js code) for data.json.
9. Server sends data.json
10. Browser displays data.json using callback function from spa.js
