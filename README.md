# jquery_string_helper

We use same Ruby on Rails Active support string helper methods to make it easy on string operation.

#A Jquery Plugins For Some String Helper methods Like Camelize, Underscore, Dasherize, Classify, Ordinalize, ForeignKey
All Below formats will be able to display of a string


<ul>
  <li> Camelize</li>
  <li> Underscore</li> <li>Dasherize</li> <li>Classify</li> <li>Ordinalize</li> <li>ForeignKey</li><li>Humanize</li><li>Today</li><li>Next Day</li><li>Previos Day</li></ul>
  


<h1>Requirements</h1>
<ul>
  <li>jQuery(greater or eq 1.4)</li>
</ul>

Installation


1)Include jQuery:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>


2)Include plugin's code:

    <script src="http://github.com/rajcybage/string_helper.js"></script>


Just Begins to add some String Helper Methods for Jquery


    $().underscore("ActiveModel");#"active_model"  
    $().ordinalize(1000) #"1000th"
    $().ordinalize(3)   #"3rd"
    $().underscore("ActiveModel::Errors"); #"active_model/errors"
    $().classify('calculus'); #Calculus
    $().camelize("active_model"); #"Active Model"
    $().camelize("active_model/errors") #"ActiveModel::Errors"
    $().foreignKey("Admin::Post", true) # post_id
    $().foreignKey("Admin::Post", false) # postid
    $().dasherize("pam_pal") #"pam-pal"
    $().humanize("ssl_error") #"Ssl Error"
    $().humanize("abbc_error", flase) #abbc error
    $().today()# 17th February 2015
    $().today(new Date(99, 5, 25)) # 25th May 1999
    $().today(1)#17-02-2015
    $().today(2)#17/2/2015
    $().today(3)#2-17-2015
    $().next_day()#18th February 2015
    $().prev_day()#16th February 2015
    you can use these formats for this date as well.
   
   
    
## Contributing

1. Fork it ( https://github.com/rajcybage/jquery_string_helper/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
    
