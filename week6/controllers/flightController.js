require("../models/Flight");
const flights = require("../flight.json");
const fs = require('fs')

//Get All flights
exports.Flight = (req, res) => {
   try {
     const flight = flights
     res.status(200).json(flight)
   } catch (err) {
     res.status(500).json({
        message: err.message,
     })
   }
}
//Add flight
exports.addFlights = async (req, res) => {
    try {
        //console.log(req.body)
        let body = req.body;
        newflight = flights.push(body);
        var data = JSON.stringify(flights, null, 2);
        fs.writeFile('./flight.json', data, (err) => {
            return res.status(200).send(data)
        })
        console.log(newflight)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
        
    }
}
//Get a single flight
exports.getFlight = async (req, res) => {
    try {
        //console.log(req.params.id)
        let id = req.params.id
        let foundFlight = flights.find(ft => {{
            return String(ft.id) === id;
            
        }})
        //console.log(foundFlight)
        if (!foundFlight){
            res.status(404).json({
                message: "Flight not Available!"
            })
        } else {
            return res.status(200).json({
                flight: foundFlight
            })
        }
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
        
    }
}
//Update flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let index = flights.findIndex((ft) => String(ft.id) === id);
        let updFlight = {id: id, ...body };
        flights[index] = updFlight;
        var data = JSON.stringify(flights, null, 2);
        fs.writeFile('./flight.json', data, (err) => {
            return res.status(200).send(data)
        })
    } catch (err) {
       res.status(500).json({
        message: err.message
       }) 
    }
}

//Delete flights
exports.deleteFlight = async (req, res) => {
    try {
        let id = +req.params.id
        //console.log(id)
        let index = flights.findIndex((ft) => ft.id === id);
        console.log(index)
        if (index >= 0) {
            delFlight = flights.splice(index, 1);
            res.status(200).send(delFlight);
        } else res.status(404).send("No Flights Found!")
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


