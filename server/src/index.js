import express from "express";
import cors from "cors";
// import Query from "./model/query.js";
// import session from "express-session";
import "dotenv/config";

import router from "./router/index.routes.js";


const PORT = 9000;
const app = express();

// app.set("views", "./src/views").set("view engine", "ejs");
app.use(express.json())
    .use(cors())
    .use(router)
    .use(express.static("public"))
    .use(express.urlencoded({ extended: true }))
    // .use(session({
    //     secret: process.env.SK,
    //     resave: false,
    //     saveUninitialized: false,
    // }))
    // .use((req, res, next) => {
    //     if (!req.session.user) {
    //         req.session.user = { isLogged: false, alias: null }
    //     }
    //     res.locals.user = req.session.user;
    //     next();
    // })
    // .use(router);


// app.get("/api/v1", async (req, res) => {

//     const query = "SELECT * FROM story";
//     const [data] = await Query.find(query);


//     res.json({ message: "Hello from server!" });

//     console.log("ça console.log")
// });

app.listen(PORT, () => console.log("running on http://localhost:" + PORT + "/api/v1"));



// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/message", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.listen(8000, () => {
//     console.log(`Server is running on port 8000.`);
// });