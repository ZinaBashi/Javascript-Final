/*------------------------------------------------*/
// Web App 
// We'll work with Spotify API that returns album thumbnails based on the search keyword.
/*------------------------------------------------*/

var app = app || {}; 
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});


app.main = (function(){

const poemApi = "http://poetrydb.org/title/";
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});
var url = '';
const popSong = $('#popRes');
const poemVerse = $('#poemRes');
const popArtist = $('#popResTwo');
const poet = $('#poemResTwo');
var word = "";
let randArrayItem = Math.floor(Math.random() * 20);

//All the events go here
var attachEvent = function(){

console.log('Attaching events');

	// $('#search-button').off('click').on('click',function(){
	// 	loadData($('#search-box').val()); 
	// }); // end of button click function

	//let submitted = $('#search-box');

	let submitted = $('#search-box');

	$('#words').keydown(function(e){
		
		console.log('what the fuck yo');
		var word = $('input').val();
		//13 is the numeric value of enter
		if(e.keyCode == 13){
			// loadData($('#search-box').val());
			console.log('hi');
			console.log(word);

			// url = poemApi + word +"/title";
			console.log(url);
		}

   // var word= 'beauty';
		url = poemApi +"beauty/title";
	});

	


function loadData(query) {
	// body...
// $.get(url, function(){

// 	response => response.json()
//       .then(json => {
//         // console.log(json);

//         const theTitle = json[randArrayItem].title;
//         console.log(theTitle);
// })
$.get( poemApi, function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    console.log(val.title);

  });
 
   })     
    //})  
	// });
}



};  // end of attach event function




var init = function(){
	console.log('Initializing app');
	attachEvent();
	

};

return{
	init:init
};

})();  // end of app.main



window.addEventListener('DOMContentLoaded', app.main.init);











//All the events go here
// var attachEvent = function(){
// 	console.log('Attaching events');

	// $('#search-button').off('click').on('click',function(){
	// 	loadData($('#search-box').val()); 
	// }); // end of button click function

	//let submitted = $('#search-box');

// 	let submitted = $('#search-box');

// 	$('input').keyup(function(e){
		
// 		var word = $('input').val();
// 		//13 is the numeric value of enter
// 		if(e.keyCode == 13){
// 			// loadData($('#search-box').val());
// 			console.log('hi');
// 			console.log(word);
// 		}

// 	});
// };  // end of search-box function


	// var loadData = function(query){


	// 	// console.log('Searching for ' + query + '...');
	// 	// $.ajax({
	// 		// success: function(response){

	// 		// 	var results = response.albums.items;

	// 		// 	appendData(results);

	// 		// }
	// 	// });

	//////******************* THIS WORKS
		
	// }



	