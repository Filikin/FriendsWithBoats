({
	onBoatClick : function(component, event, helper) {
		var compEvent = component.getEvent("boatSelect");
        compEvent.setParam ("boatId", component.get("v.boat.Id"));
        compEvent.fire();
        var appEvent = $A.get("e.c:BoatSelected");
        appEvent.setParam ("boat", component.get("v.boat"));
        appEvent.fire();
        var plotMapEvent = $A.get("e.c:PlotMapMarker");
        plotMapEvent.setParam("sObjectId", component.get("v.boat.Id"));
        plotMapEvent.setParam("lat", component.get("v.boat.Geolocation__Latitude__s"));
        plotMapEvent.setParam("long", component.get("v.boat.Geolocation__Longitude__s"));
        plotMapEvent.setParam("label", component.get("v.boat.Name"));
        plotMapEvent.fire();
	}
})