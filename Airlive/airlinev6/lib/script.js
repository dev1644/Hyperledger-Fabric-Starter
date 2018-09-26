/**
 * Create Flight Transaction
 * @param {org.acme.airline.flight.CreateFlight} flightData
 * @transaction
 */

 function createFlight(flightData){
     return getAssetRegistry('org.acme.airline.flight.Flight')
     .then(function(flightRegistry){

        //Now add the Flight
        let factory = getFactory();
        let NS = 'org.acme.airline.flight';

        let flightId= 'AE102-05-12-18';
        let flight = factory.newResource(NS, 'Flight', flightId);

        flight.flightNumber = flightData.flightNumber;

        let route = factory.newConcept(NS,"Route");

        route.orgin
     })
 }