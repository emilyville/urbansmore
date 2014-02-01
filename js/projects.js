  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/a/emilyville.com/spreadsheet/pub?key=0AhXimdB90zwNdHdfNV9mc1dZOXFrSXRFSGJTNG9ETlE&output=html';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {

    $.each(data, function(i, project) {

		var projectTitle = $('<h3/>',{text: project.title});

		var projectSubtitle = $('<p/>', {text: project.subtitle});

    	var projectUrl = $('<a/>',{href: project.url});

		var columnContainer = $('<div/>', {'class': 'col-6 col-sm-6 col-lg-4'});

		var projectContainer = $('<div/>', {'class':'project-container'});

		var image = $('<img/>', {'class': 'img-rounded img-responsive', 'src': 'assets/img/colormetimbers-main.jpg'})

		var imageContainer = $('<div/>', {'class': 'image-container'});

		var imageMainURL = $('<img/>', {'class': 'img-responsive desaturate', 'src': project.imagemain });

		$('#projects-container').append(
			columnContainer.append(
				projectUrl.append(
					projectContainer.append(
						imageContainer.append(imageMainURL),
						projectTitle,
						projectSubtitle	
						)
					)
				)
			)
		});
  }
