// Wait for DOM to load
$(document).ready(function(){
	// listen for clicks
	$('button').click(function(){
		// Toggle button
		var whatToDo = $(this).attr('toDo');
		// console.log(whatToDo);
		if (whatToDo == "hide"){
			$('#thing').hide("fast");
		}else if (whatToDo == "show"){
			$('#thing').show("fast");
		}else if (whatToDo == "toggle"){
			$('#thing').toggle("fast");
		}else if (whatToDo == "html"){
			var theThing = $('#thng');
			console.log(theThing.html());
			$('#thing').html('<table border="1"><tr><td>I am a table now!</td></tr></table>');
			console.log($('#thing').html());
		}else if (whatToDo == "prepend"){
			$('#thing').prepend('<table><tr><td>I have a friend to my right!</td></tr></table>');
		}else if (whatToDo == "append"){
			$('#thing').append('<table><tr><td>I have a friend to my left!</td></tr></table>');
		}else if (whatToDo == "css"){
			$('#thing').css({
				'color': 'orange',
				'font-size': '70px',
				'background-color': 'blue'
			});
		}else if (whatToDo == "addC"){
			$('#thing').addClass('text-uppercase');
		}else if (whatToDo == "removeC"){
			$('#thing').removeClass('text-uppercase');
		}else if (whatToDo == 'each'){
			$('button').each(function(){
				console.log($(this).html('Hurry up happy hour!!!'));
			});
		}
	})	
});

// function toggle(){
// 	var thing = document.getElementById('thing');
// 	if(thing.style.display == "block"){
// 		thing.style.display = "none";
// 	}else{
// 		thing.style.display = "block";
// 	}
// }

// var jQuery2 = {
// 	hide: function(idToTarget){
// 		document.getElementById(idToTarget).style.display = "none";
// 	}
// }

// jQuery2.hide('thing');

