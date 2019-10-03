({
	onFormSubmit: function(component, event, helper) {
			var formData = event.getParam("formData");
			var boatSearchRes = component.find("boatSearchResultsId");
			boatSearchRes.search(formData.boatTypeId);
	},
	doInit : function(component, event, helper) {
            $A.createComponents([
                ["c:BoatSearchResults",
            		{
                		"aura:id": "boatSearchResultsId"
            		}],
                ["c:BoatSearchForm",
            		{
                		"aura:id": "boatSearchFormId"
            		}]
            ],
            function(components, status, errorMessage){
                if (status === "SUCCESS") {
                    var searchResults = components[0];
                    var searchForm = components[1];
                    var compon = component.get("v.body");
                    compon.push (searchForm);
                    compon.push (searchResults);
                    component.set("v.body", compon);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            });
/*        
	        $A.createComponent("c:BoatSearchForm",
            {
                "aura:id": "boatSearchFormId"
            },
            function(newComponent, status, errorMessage){
                if (status === "SUCCESS") {
                   var compon = component.get("v.body");
                    compon.push (newComponent);
                    component.set("v.body", compon);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            });
*/
	}
})