(function($){
	$.fn.showLinkLocation = function(){

	  return this.each(function(){
        var link = $(this);
        link.append("(" + link.attr("href")+")");
        debug(link);
	  });
	  
	};


	$.fn.camelize = function(s){
    if(s.indexOf("_") > 0){
      camelization(s);
    }
    else{
      return "Please enter a string with underscore";
    }
	};


  $.fn.underscore = function(s){
   	if(typeof s == "string"){
      var i=0;
      var word = "";
      for(var i =0, len = s.length ; i < len; i++){
        ch = s[i];
        if(ch.match(/[A-Z]/) && i > 0 && s[i-1] != ":"){
          ch = "_" + ch
        }
        word += ch.toLowerCase();
      }
    return word.replace(" ", "_").replace("::", "/"); 
   	}
   };

   $.fn.classify = function(name){
    return camelization(name.replace(/.*\./, ''));
   }
   	
   $.fn.dasherize = function(s){
      s.replace('_', '-')
    end
   } 

	function debug(object){
	  if(window.console && window.console.log ) {
	    window.console.log("highlight section" + object.length);
	  }
	};

  function camelization(s){
   if(typeof s == "string"){
      var m =  s.replace("_", " ");
      var t = m.replace(/\b[a-z]/g, function(letter) {
         return letter.toUpperCase();
      });
      return t.replace("/","::"); 
    }
    else{
      return "Please enter a string";
    }  
 
  }

}(jQuery));

