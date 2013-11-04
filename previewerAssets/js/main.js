$(document).ready(function () {
	var converter = new Showdown.converter();
	$('#fileinput').change(function (e) {
		var file = e.target.files[0];
		if (file) {
			var reader = new FileReader();
			reader.onload = function(e) {
				var contents = e.target.result,
					html = converter.makeHtml(contents);
				$('#display').html(html);
			}
			reader.readAsText(file);
		} else {
			alert('Failed to load file.');
		}
	});
});