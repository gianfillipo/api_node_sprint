const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

router.get("/register", (req, res) => {
    res.sendFile(path.resolve("./public/pages-register.html"))
})

router.get("/login", (req, res) => {
    res.sendFile(path.resolve("./public/pages-login.html"))
})

router.get("/logged-company", (req, res) => {
    res.sendFile(path.resolve("./public/pages-logged-company.html"))
})

router.get("/logged-user", (req, res) => {
    res.sendFile(path.resolve("./public/pages-logged-user.html"))
})

router.get("/register-user", (req, res) => {
    res.sendFile(path.resolve("./public/pages-register-user.html"));
})

router.get("/register-machine", (req, res) => {
    res.sendFile(path.resolve("./public/pages-register-machine.html"));
})

module.exports = router;