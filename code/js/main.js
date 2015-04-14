(function(){

var templateHtml = $('#template').html();

var templateFactory = _.template(templateHtml);

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }



$('#slider').on('input', function(){
    var sliderVal = $( this ).val();
    var sliderValCom = commaSeparateNumber(sliderVal);
    $( '#sliderValue' ).html('$' + sliderValCom);

    d3.csv('data/result.csv', function(error, myData){
        if (error){
            console.log(error);
        }

        console.log(myData);

    	function selectSchools(){
    	$( '#canvas' ).html('');

    	var filteredRevs = _.filter(myData.TotRev, function(revs){ return revs < 7729000 });

		filteredRevs.forEach(function(acceptSchool){
				$('#canvas').append( templateFactory(acceptSchool) );
		      });

		// closes selectSchools function
		}

	return selectSchools();

    // closes getJSON function and for loops
    });
})


}).call(this);