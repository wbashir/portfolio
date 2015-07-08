$(document).ready(function() {
    
    var body = $(document.body);
    var navigation = $('.navigation');

    // set the footer
	var footerTemplate = JST['templates/footer.handlebars'];
	var navigationTemplate = JST['templates/navigation.handlebars'];

	body.append(footerTemplate);
	navigation.append(navigationTemplate);


	// set the head
	var headTemplate = JST['templates/head.handlebars'];
	$(document.head).append(headTemplate);

});