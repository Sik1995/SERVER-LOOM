
// window.addEventListener('message', function(e) {
// 	$("#container").stop(false, true);
// 	console.log(e.data.displayWindow)
// 	if (e.data.displayWindow == 'true') {
// 		$("#container").css('display', 'flex');

// 		// Array of logo URLs
// 		var logos = [
// 			"../img/logo.png",
// 			"../img/logo2.png"
// 		];

// 		var currentLogoIndex = 0;

// 		// Function to change the logo
// 		function changeLogo() {
// 			$("#logo").attr("src", logos[currentLogoIndex]);
// 			currentLogoIndex = (currentLogoIndex + 1) % logos.length;
// 		}

// 		// Initial logo change
// 		changeLogo();

// 		// Interval to change the logo every 5 seconds
// 		setInterval(changeLogo, 5000);

// 		$("#container").animate({
// 				bottom: "25%",
// 				opacity: "1.0"
// 			},
// 			700, function() {

// 		});

// 	} else {
// 		$("#container").animate({
// 				bottom: "-50%",
// 				opacity: "0.0"
// 			},
// 			700, function() {
// 				$("#container").css('display', 'none');

// 			});
// 	}
// });

