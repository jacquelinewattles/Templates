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
            myData.forEach(function(dataPoint){
                var revenues = dataPoint.TotRev;
            })
            
            var filteredRevs = myData.filter(function(dataPoint){
                return _.filter(dataPoint, function(v) { return v.revenues > 6000000 });
                // return _.where(dataPoint.revenues, function (num){num <= sliderVal});
             })

            console.log(filteredRevs.length);
            
            filteredRevs.forEach(function(acceptSchool){
                    $('#canvas').append( templateFactory(acceptSchool) );
                  });

            }

	selectSchools();

    // closes getJSON function and for loops
    });
})


}).call(this);