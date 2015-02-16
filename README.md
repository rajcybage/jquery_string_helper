# jquery_string_helper

We use same Ruby on Rails Active support string helper methods to make it easy on string operation.

#A Jquery Plugins For Some String Helper methods Like Camelize, Underscore, Dasherize, Classify, Ordinalize 



<h1>Requirements</h1>
<ul>
  <li>jQuery(> 1.4)</li>
</ul>

Installation


1)Include jQuery:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>


2)Include plugin's code:

    <script src="http://github.com/rajcybage/string_helper.js"></script>


Just Begins to add some String Helper Methods for Jquery


    $().underscore("ActiveModel");#"active_model"  
    $().ordinalize(1000) #"1000th"
    $().underscore("ActiveModel::Errors"); #"active_model/errors"
    $().classify('calculus'); #Calculus<
    $().camelize("active_model"); #"Active Model"
    $().camelize("active_model/errors") #"ActiveModel::Errors"
    $().foreignKey("Admin::Post", true) # post_id
    $().foreignKey("Admin::Post", false) # postid
    $().dasherize("pam_pal") #"pam-pal"
