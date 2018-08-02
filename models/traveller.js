const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
  return journey.startLocation
})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
  return journey.endLocation
})
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
  return journey.transport
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0;
  return this.journeys.reduce((total, journey) => total += journey.distance , total)
};


Traveller.prototype.getUniqueModesOfTransport = function (transport) {
return Array.from(new Set(this.getModesOfTransport()));
};


module.exports = Traveller;
