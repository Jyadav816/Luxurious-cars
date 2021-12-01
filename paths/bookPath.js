const express = require("express");
const router = express.Router();
const Booking = require("../models/bookDiag")
//const Car = require("../models/carDiag")
const { v4: uuidv4 } = require('uuid')
const stripe = require("stripe")('sk_test_51JyfM7Fu8hGj4820esTXMSLbU9Cx4og89WlrqneFNbfsTyWtrIJnke7Rb33Q9k9gGP4F6Fyq3Qt4KDPhTLWF02te00lQUfPG5V')
router.post("/bookcar", async (req, res) => {

    const { token } = req.body
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: req.body.totalAmount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4(),
        })
        if (payment) {
            req.body.transId = payment.source.id
            const newbooking = new Booking(req.body)
            await newbooking.save()
            //const car = await Car.findOne({_id : req.body.car})
            //car.reserveSlot.push(req.body.reserveSlot)
            //await car.save()
            res.send('booked successfully')
        } else {
            return res.status(400).json(error);
        }
    } catch (error) {
        return res.status(400).json(error);
    }

})

module.exports = router;