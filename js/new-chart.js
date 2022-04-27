( function ( $ ) {
	"use strict";

	//doughut chart
	var ctx = document.getElementById( "doughutChart" );
	ctx.height = 150;

    var myLabel = ["1","2","3","4","5"];
    var myData = [4, 3, 20, 18, 44];
    var myColor = [
        "rgba(0, 123, 255,0.9)",
        "rgba(0, 123, 255,0.7)",
        "rgba(0, 123, 255,0.5)",
        "rgba(0, 123, 255, 0.2)",
        "rgba(0,0,0,0.07)"
    ]
	var myChart = new Chart( ctx, {
		type: 'doughnut',
		data: {
			datasets: [ {
				data: myData,
				backgroundColor: myColor,
				hoverBackgroundColor: myColor
                            } ],
			labels: myLabel
		},
		options: {
			responsive: true
		}
	} );

} )( jQuery );
