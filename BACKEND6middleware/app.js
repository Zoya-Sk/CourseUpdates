const express = require("express");
const app = express();

/* 
🔹 What is Middleware?
Middleware is a function that has access to req, res, and next.
Used for logging, authentication, error handling, etc.
*/

/* 
🔹 Our 1st Middleware
Logs a message before response is sent.
Use `next()` to move to next middleware/route.
*/
// app.use((req, res, next) => {
//     console.log("Hi, I am a Middleware.");
//     next(); // Without next(), request will hang.
// });

/* 
🔹 Chaining Middlewares
You can have multiple middlewares; all will run in order.
*/
// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd Middleware");
//     next();
// });

/* 
🔹 Utility Middleware Example
Log each incoming request’s method & path (useful for debugging).
*/
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

/* 
🔹 Using app.use()
Runs for *all* routes and methods (GET, POST, etc.).
Useful for global logic like logging, parsing JSON, etc.
*/

/* 
🔹 Route-level Middleware Example
Apply logic only to specific route if needed.
*/
app.get("/", (req, res) => {
    res.send("Hi I am root.");
});

app.get("/random", (req, res) => {
    res.send("This is a random page.");
});

/* 
🔹 API Token as Query String
Example: ?token=secret — You can check req.query.token in a middleware.
*/

// app.use((req, res, next) => {
//     if (req.query.token === "secret") next();
//     else res.status(403).send("Forbidden");
// });

/* 
🔹 Passing Multiple Middlewares
You can pass multiple middleware functions to a single route.
*/
// app.get("/example", middleware1, middleware2, (req, res) => {
//     res.send("Finished!");
// });

/* 
🔹 Error Handling Middleware (Express default)
Defined with 4 params: (err, req, res, next)
Must be at the end after all routes.
*/
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send("Something broke!");
// });

app.listen(8080, () => {
    console.log("Server listening to port 8080..");
});
