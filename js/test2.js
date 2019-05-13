// Default word value on start ;)
var word = 'beauty';
var randoNum = parseInt(9* Math.random());

function myFunction(){

	var baseURL = 'http://poetrydb.org/title';
	// var query = baseURL + '/' + word + '/title';
	var songURL = 'https://api.spotify.com/v1/search?q=';
	var apiKey = '&type=track'
	var query = baseURL + '/' + word;
	var querySong = songURL + word + apiKey;

	// SMOOTH SCROLL
$("a").on('click', function(event) {
	if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
var hash = this.hash;
// Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().bottom
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });  // END OF SMOOTH SCROLL

$.get( query, function(response){

	if(response.status != '404'){

	console.log(response);

	var random = parseInt( response.length * Math.random() );
	var newtitle = response[random] ? response[random].title : 'OOPS';
	var newAuthor = response[random] ? response[random].author: 'OOPS';
	var randomLine = parseInt( response[random].lines.length * Math.random() );
	// console.log(response[random].lines.length)
	var newLine = response[random] ? response[random].lines[randomLine]: 'OOPS';

	document.getElementById('poemRes').innerText = newtitle;
	document.getElementById('poemAuth').innerText = newAuthor;
	document.getElementById('poemLine').innerText = '"' + newLine + '"';
	console.log('hi');
	console.log(newAuthor);


	} else {
		alert('there is no poem with that word in the title! Try another one!');
	}

}); // end of get request

// var loadData = function(querySong){
// 	console.log('searching for'+ querySong);
} // end of my function


var loadData = function(query){

	console.log('searching for'+query);

	$.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'track',
            limit: 9,
            offset: 10,
            access_token: "BQAl-o3qYs4Gmw_0-Yx631QN-4ksYAz0Qf3a3LhujYIFMfpVfEBxfc__xzCAyRLYjTv6f1OMUaSTAbrjjtkbQFPsR-AoYs4RNexUi3l1AAaW3VTbTbfEsWofYRifpQrhlSB2JNO2gaUIYrI"
        },
	success:function(response){
		var random = parseInt( response.length * Math.random() );
		var results = response.tracks.items;
		
		console.log(results);
		appendData(results);
	}

}); // end of ajax request

}; // end of loadData


var appendData = function(data){
	
	for (var i=0; i<data.length; i++){

		console.log(data[randoNum].name);
		// var newtitle = data[1] ? data[random].name : 'OOPS';
		// var newtitle = data[i].name;
	}
	$('#popRes').text(data[randoNum].name);
	$('#popAuth').text(data[randoNum].artists[0].name);
}; // end of appendData function




myFunction();


var inputText = $('#words').val();

$('#search-box').submit( function(){
	event.preventDefault();
	word = $('#words').val();
	myFunction();
	loadData(word);
	return false;
})