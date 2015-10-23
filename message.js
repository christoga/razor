var i =0;
								function start(){
									$(".element").typed({
										strings: [
										"Oh. Hello there.^2000",
										"I'm Christo.^3000",
										"I code Razor.^2000",
										"Razor is a hacker message framework.^2000",
										"You can clone it.^2000",
										"Its open source.^2000",
										":) ^2000",
										"I also tweet, @andrechristoga .^2000",
										"Mostly technonews and my github updates.^2000",
										"github = https://github.com/christoga .^2000",
										"Go open it.^2000",
										"If you wanna find me in the internet,^2000",
										"My username is always @andrechristoga ^2000",
										"Thank you, ^3000 adios.^2000"


									],
									typeSpeed: 0,
									cursorChar: "_",
									callback: function() {
									},
									preStringTyped: function() {
										check();
									}

								});
}

function check(){
	i++;

	if(i===3){
		$("#github").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===6){
		$("#twitter").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===10){
		$("#writink").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===12){
		$("#facebook").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===13){
		$("#nodejs").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===15){
		$("#markdown").css('visibility','visible').hide().fadeIn("slow");
	}
	if(i===17){
		$("#mail").css('visibility','visible').hide().fadeIn("slow");
	}
}
