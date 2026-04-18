const axios = require("axios");
const Flight = require("../Models/FlightModel.js");

exports.getFlight = async (req, res) => {
    try {
        const flightNumber = req.params.id;

        const response = await axios.get(
            `http://api.aviationstack.com/v1/flights?access_key=${process.env.API_KEY}&flight_iata=${flightNumber}`
        );

        const data = response.data.data[0];








        if (!data) {
            return res.status(404).json({ msg: "Flight not found" });
        }




        try {
            const flight = await Flight.create({
                flight: data.flight.iata,
                from: data.departure.airport,
                to: data.arrival.airport,
                status: data.flight_status
            })
        } catch (error) {
            res.status(500).json({ msg: "Error saving flight" });


        }
        res.json({
            flight: data.flight.iata,
            from: data.departure.airport,
            to: data.arrival.airport,
            status: data.flight_status
        });


    }








    catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "Error fetching flight" });

    }
};
