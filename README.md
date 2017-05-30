# uploadFrom
Beautiful upload form by GL with 6 colors

Requirements:
Jquery and Bootstrap


Styles
<link rel="stylesheet" href="css/uploadForm.css">

Scripts
<script type="text/javascript" src="js/uploadForm.js"></script>


Main code
<label class="file-browser">
	<span class="btn file-upload"><i class="fa fa-folder-open"></i> Browse</span>
	<span class="file_name"><span class="files_text">Selected files: </span><span class="files_count">0</span></span>
	<input type="file" class="hidden file" multiple name="userfiles[]" onchange="file_browser(this);">
</label>


For another color add in class="file-browser" color name from list:
green
red
blue
yellow
orange
purple
lime
brown