(function(){

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

// Show slider value
var sliderValue = $('#slider').on('input', function(){
    var sliderVal = $( this ).val();
    var sliderValCom = commaSeparateNumber(sliderVal);
    $( '#sliderValue' ).html('$' + sliderValCom);
    return sliderVal;
	})


$.getJSON( "data/d1bball.json", function( myData ) {

  	// console.log(myData);
})




}).call(this);