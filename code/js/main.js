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

    $.getJSON('data/d1bball.json', function(myData){

    	function selectSchools(){
    	$( '#canvas' ).html('');
            // myData.forEach(function(dataPoint){
            //     var revenues = dataPoint.TotRev;
            // })
            var filterVal = _.pluck(myData, 'TotRev');
            var filterLogic = _.filter(filterVal, function(num){ return num > sliderVal; });

            var filteredRevs = myData.filter(function(dataPoint){
                return dataPoint.TotRev;
                })

            console.log(filteredRevs);
            
            filteredRevs.forEach(function(acceptSchool){
                    $('#canvas').append( templateFactory(acceptSchool) );
                  });

            }

	selectSchools();

    // closes getJSON function and for loops
    });
})


}).call(this);