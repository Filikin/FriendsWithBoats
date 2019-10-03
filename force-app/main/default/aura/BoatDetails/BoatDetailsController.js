({
	doInit : function(component, event, helper) {
	},
    onBoatSelected : function (component, event, helper){
        var selectedBoat = event.getParam('boat');
  		component.set ("v.id", selectedBoat.Id);
 
        var boatDetails = component.find ("service");
        boatDetails.reloadRecord();
     },
	onRecordUpdated : function (component, event, helper){
        var selectedBoat = component.get('v.id');
    },
    onBoatReviewAdded : function (component, event, helper){
		component.find("tabs").set("v.selectedTabId", "boatreviewtab");
		var reviews = component.find("BoatReviews");
		reviews.refresh();
    },
})