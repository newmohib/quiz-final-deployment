 window.fbAsyncInit = function() {
    FB.init({
      appId      : '',
      xfbml      : true,
      version    : 'v3.2'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


	
//button call fuction
		function checkLoginState() {
		  FB.getLoginStatus(function(response) {
		    statusChangeCallback(response);
		  });
      
		}

   


	//after login work start
	function statusChangeCallback(response) {
	  	if (response.status === 'connected') {
	  		//alert(response.authResponse.email)
	  		console.log(response.authResponse.userID);
	  		window.location.replace("home.html?userId="+response.authResponse.userID);
	  		//window.location.href ='home.html';
	  		//window.location.href = "http://stackoverflow.com";
        //window.location.replace("home.html");
	 	}else{
	 		console.log('username or password is wrong');
	 		window.location.replace("index.html");
	 	}
	  }



       function checkLogout() {
        FB.logout(function(response) {
        console.log('logout me');
          window.location.replace("index.html");
      });
      }