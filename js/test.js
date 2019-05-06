// Default word value on start ;)
var word = 'beauty';


function myFunction(){

	var baseURL = 'http://poetrydb.org/title';
	// var query = baseURL + '/' + word + '/title';
	var query = baseURL + '/' + word;

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
		alert('not found');
	}

});;

}

myFunction();


var inputText = $('#words').val();

$('#search-box').submit( function(){
	event.preventDefault();
	word = $('#words').val();
	myFunction();
	return false;
})