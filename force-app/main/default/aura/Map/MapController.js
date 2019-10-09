({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onBoatPlotted: function(component, event){
        console.log ("on boat plotted");
        console.log (event.getParam('label'));
        var location= new Object();
        location.lat = event.getParam('lat');
        location.long = event.getParam('long');
        console.log (location);
        component.set("v.location", location);
    }
})