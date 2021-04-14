const functions = require("firebase-functions")
const admin = require("firebase-admin")
const express = require("express")
const cors = require("cors")
const api = express()
api.use(cors({ origin: true }))

admin.initializeApp(functions.config().firebase)

const db = require("faunadb")
const q = db.query

const client = new db.Client({
    secret: "fnAEGwpoOAACB9CORWsp9AOPDp_9pLe4qR9Z2ksT",
})

api.get(["/api/v1", "/api/v1/"], (req, res) => {
    res.status(200).send(
        `<img src="https://media.giphy.com/media/hhkflHMiOKqI/source.gif">`
    )
})

exports.api = functions.https.onRequest(api)
