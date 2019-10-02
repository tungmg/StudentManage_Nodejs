$(document).ready(function() {
	var viewStudent = document.getElementsByName('viewStudent');
	$(viewStudent).each(function() {
		this.onclick = function() {
			var id = $(this).attr('id');
			console.log(id);
			$.post('viewStudent.ejs', { id: id }, function(data) {
				$('#fill').html(data);
			});
		};
	});
});
