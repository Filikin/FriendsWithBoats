({
	onInit : function(component, event) {
		var boat = component.get("v.boat");
        var boatId = boat.Id;
		var action = component.get("c.getAll"); 
        action.setParams({
            boatId: boatId
        });
        action.setCallback(this, function(response) {
        	var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
	}
})