 (function(){

var templateHtml = $('#template').html();

var templateFactory = _.template(templateHtml);

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

$.getJSON('data/d1bball.json', function(myData){
    var datOnLoad = myData.filter(function(e){
        return e.TotRev >= 7729000;
    });

        datOnLoad.forEach(function(acceptSchool){
        $('#canvas').append( templateFactory(acceptSchool) );
        });

     console.log(datOnLoad);

        $('#slider').on('input', function(){
        var sliderVal = $( this ).val();
        var sliderValCom = commaSeparateNumber(sliderVal);
        $( '#sliderValue' ).html('$' + sliderValCom);

    	function selectSchools(){
    	$( '#canvas' ).html('');

            var filteredRevs = myData.filter(function(e){
                return e.TotRev >= sliderVal;
            })

            console.log(sliderVal);
            console.log(filteredRevs.length);
            
            filteredRevs.forEach(function(acceptSchool){
                    $('#canvas').append( templateFactory(acceptSchool) );
                  });

        }

        selectSchools();
    });
})


}).call(this);