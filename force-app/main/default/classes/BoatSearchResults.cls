public with sharing class BoatSearchResults {
	public BoatSearchResults ()
    {
        
    }
    @AuraEnabled
    public static list<Boat__c> getBoats (String boatTypeId)
    {
    	if (boatTypeId == null || boatTypeId == ''){
        	return [select Id, Name, Contact__r.Name, Picture__c from Boat__c];
    	}
    	else{
        	return [select Id, Name, Contact__r.Name, Picture__c from Boat__c where	BoatType__c=:boatTypeId];
    	}
    }
    
}