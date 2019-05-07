


function toggleSidebar() {
	var toggle;
	var sidebar = document.querySelector('.sidebar').classList.toggle('active');
	var menu =document.querySelector('.flyoptionMenu').classList.toggle('active');

	if ( toggle === sidebar){

		sidebar;
	}else{
		menu
	}
}



$(".control").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});