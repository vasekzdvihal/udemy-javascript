# Express.js

## What is Express.js?
- Express.js is Node.js framework - a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built (middleware!)
- It's highly extensible and other packages can be plugged into it (middleware!)

## Middleware, next() and res()
- Express.js relies heavily on middleware functions - you can easily add them by calling use()
- Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response

## Routing 
- You can filter request by path and method 
- If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is matched
- You can use the express. Router to split your routes across files elegantly

## Serve files
- You're not limited to serving dummy text as a response
- You can sendFile()s to your users - e.g. HTML files, images, etc.
- If a request is directly made for a file (e.g. a .css file is requested), you can enable static serving for such files via express.static()


http://expressjs.com/en/starter/installing.html
