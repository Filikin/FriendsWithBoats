public class BoatReviews {
	public BoatReviews ()
    {
        
    }
    @AuraEnabled
    public static list<BoatReview__c> getAll (Id boatId) {
        return [select Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
        	from BoatReview__c where Boat__c = :boatId];
    }
}