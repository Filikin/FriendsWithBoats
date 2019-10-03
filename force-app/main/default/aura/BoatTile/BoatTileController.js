({
	onBoatClick : function(component, event, helper) {
		var compEvent = component.getEvent("boatSelect");
        compEvent.setParam ("boatId", component.get("v.boat.Id"));
        compEvent.fire();
        var appEvent = $A.get("e.c:BoatSelected");
        appEvent.setParam ("boat", component.get("v.boat"));
        appEvent.fire();
	}
})