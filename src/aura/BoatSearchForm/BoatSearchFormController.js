({
	doInit : function(component, event, helper) {
		var isEnabled = $A.get("e.force:createRecord");
		if (isEnabled) {
			component.set("v.showNewButton", true);
  		}
        var action = component.get("c.getBoatTypes");
        
        action.setCallback(this, function(data) {
            component.set("v.BoatTypes", data.getReturnValue());
        });
        $A.enqueueAction(action);
		
	},
    handleSearch : function(component, event, helper){
        
    },
    handleNewBoat : function(component, event, helper){
        var createRecordEvent = $A.get("e.force:createRecord");
        var BoatTypeSelected = component.get("v.selectedValue");
        if (BoatTypeSelected == ""){
            createRecordEvent.setParams({
                "entityApiName": "Boat__c"
            });
        }else{
            createRecordEvent.setParams({
                "entityApiName": "Boat__c",
                 'defaultFieldValues': {
                        'BoatType__c' : BoatTypeSelected
                    }
            });
        }
        createRecordEvent.fire();
    }
})