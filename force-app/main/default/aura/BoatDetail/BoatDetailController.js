({
    doInit : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
        component.set (navEvt != undefined, 'v.detailAvailable');
	},
	onFullDetails : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
      		"recordId": component.get('v.boat').Id
    	});
    	navEvt.fire();	}
})