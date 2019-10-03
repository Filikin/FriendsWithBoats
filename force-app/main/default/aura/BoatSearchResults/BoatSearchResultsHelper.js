({
	onSearch : function(component, event) {
		var boatType = component.get("v.boatTypeId");
		var action = component.get("c.getBoats"); 
        action.setParams({
            boatTypeId: boatType
        });
        action.setCallback(this, function(data) {
           component.set("v.boats", data.getReturnValue());
        });
        $A.enqueueAction(action);
	},
})