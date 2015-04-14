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

        $.getJSON( "data/d1bball.json", function(myData) {
            $.each(myData.TotRev, function(x, TotRevOf) {

    	function selectSchools(){
    	$( '#canvas' ).html('');

    	var filteredRevs = _.where(TotRev, function(revs){ return revs < 7729000 });

        console.log(filteredRevs);

		filteredRevs.forEach(function(acceptSchool){
				$('#canvas').append( templateFactory(acceptSchool) );
		      });

		// closes selectSchools function
		}

	return selectSchools();
    
    // closes each statements
    });
    // closes getJSON function and for loops
    })
})


}).call(this);