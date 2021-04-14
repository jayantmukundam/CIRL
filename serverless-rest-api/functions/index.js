const functions = require("firebase-functions")
const admin = require("firebase-admin")
const express = require("express")

const cors = require("cors")

const api = express()
api.use(cors({ origin: true }))

var serviceAccount = require("./permissions.json")
const { response } = require("express")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
const db = admin.firestore()

// get to the server endpoint
api.get(["/api/v1", "/api/v1/"], (req, res) => {
    res.status(200).send(`<h1>Hello from the server</h1>`)
})

// get all products

// create a product
api.post(["/api/v1/products", "/api/v1/products/"], (req, res) => {
    const product = {
        barcodeId: req.body.barcodeId,
        details: req.body.details,
    }

    db.collection("products")
        .doc("/" + req.body.barcodeId + "/")
        .set(product)
        .then((response) => {
            res.status(200).send(`Saved!`)
            return
        })
        .catch((reason) => {
            res.error(reason)
        })
})

// update a product
api.patch(
    ["/api/v1/product/:barcodeId", "/api/v1/product/:barcodeId/"],
    (req, res) => {
        const update = req.body
        console.log(req.params.barcodeId)
        db.collection("products")
            .doc(req.params.barcodeId)
            .update(update)
            .then((response) => {
                res.status(200).send(`Updated`)
                return
            })
            .catch((reason) => {
                res.error(reason)
            })
    }
)

// get a product
api.get(
    ["/api/v1/product/:barcodeId", "/api/v1/product/:barcodeId/"],
    (req, res) => {
        var docRef = db.collection("products").doc(req.params.barcodeId)

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    res.status(200).send(doc.data())
                    return
                } else {
                    res.status(200).send("No such document!")
                    return
                }
            })
            .catch((error) => {
                return res.status(500).send(error)
            })
    }
)

exports.api = functions.https.onRequest(api)
