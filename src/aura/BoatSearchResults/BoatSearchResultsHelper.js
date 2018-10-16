({
	onSearch : function(component) {
		var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId: component.get("v.BoatTypes")
        });
        action.setCallback(this, function(data) {
           component.set("v.Boats", data.getReturnValue());
        });
        $A.enqueueAction(action);
		
	}
})