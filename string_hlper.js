/*
* jQuery String Helper - v0.0.1
*
* Made by Rajarshi
* Under MIT License
*/

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
      return camelization(s);
    }
    else{
      return "Please enter a string with underscore";
    }
	};


  $.fn.underscore = function(s){
   	if(typeof s == "string"){
        underscorize(s);

    	}
    else{
      return "Please input a string";
    }
      
   };

   $.fn.classify = function(name){
    return camelization(name.replace(/.*\./, ''));
   };
   	
   $.fn.dasherize = function(s){
    return  s.replace('_', '-')
    
   }; 

   $.fn.ordinalize = function(number){
    return number.toString() + ordinal(number);
   };

   $.fn.demodulize = function(path){
      return demodule(path);
   };

   $.fn.foreignKey = function(s, underscore){
      return underscorize(demodule(s)) + (underscorize == true ? "_id" : "id")
   };

   function ordinal(number){
      var n = Math.abs(parseInt(number));
      var c = n % 100;
      var text;
      if($.inArray(c, [11,12,13])) {
        text = "th"
      }

      else{

        switch( n % 10) {
          case 1: 
            text = "st";
          case 2: 
            text = "nd";
          case 3: 
            text = "rd";
          default: 
              text = "th";

        }

      }
    return text

   };

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
 
  };
  
  function underscorize(s){
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

  };

  function demodule(s){
    var str = s.toString();
    var text = "";
    var i = s.lastIndexOf("::");
    if(i >= 0){
      for(i = i+2; i <= s.length - 1; i++){
        text += s[i]
      } 
    }
    else{
       text = text
    }
    return text
  }

}(jQuery));



