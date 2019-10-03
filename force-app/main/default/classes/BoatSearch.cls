public class BoatSearch 
{
	public BoatSearch ()
    {
        
    }
    @AuraEnabled
    public static list<BoatType__c> getBoatTypes ()
    {
        return [select Id, Name from BoatType__c];
    }
}