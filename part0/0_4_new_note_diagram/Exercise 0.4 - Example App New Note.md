1. Browser makes POST request with new note data.
2. Server receives POST and responds with 302 (redirect)
3. Server creates new note object, adds to existing notes array
4. Browser makes GET request for notes.html
5. Server sends notes.html to browser.
6. Browser makes GET request for main.css
7. Server sends main.css to browser. 
8. Browser makes GET request for main.js
9. Server sends main.js
10. Browser begins executing main.js
11. Browser makes GET request (via main.js code) for data.json.
12. Server sends data.json
13. Browser displays data.json using callback function from main.js
