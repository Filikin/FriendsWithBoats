({
	onSave : function(component, event, helper) {
		component.find("service").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
                var toastEvent = $A.get("e.force:showToast");
                if (toastEvent !== undefined) {
    				toastEvent.setParams({
        				"title": "Success!",
        				"message": "The review has been created successfully."
    				});
    				toastEvent.fire();
                } else {
                    alert ("The review has been created successfully.");
                }
                helper.onInit (component, event, helper);
           		var compEvent = component.getEvent("boatReviewAdded");
		        compEvent.fire();

            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + 
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }))
	},
    onRecordUpdated : function(component, event, helper) {
		var toastEvent = $A.get("e.force:showToast");
        if (toastEvent !== undefined) {
    		toastEvent.setParams({
        		"title": "Success!",
        		"message": "The review has been updated."
    		});
    		toastEvent.fire();
        } else {
        	alert ("The review has been updated.");
        }

	},
    doInit : function(component, event, helper) {
		helper.onInit (component, event, helper);
	},
})