var searchTerm="";
var form  = $("#form");
var wikiContent ="";
var wikiContainer =$(".wiki-container");
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    wikiContainer.html("");
    searchTerm = form.val();
    form.val("");
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+searchTerm+"&gsrlimit=10&prop=info|extracts&&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?", function(data){
      var queryObj = data.query;
      for(var key in queryObj){
        var obj = queryObj[key];
        for(var prop in obj){
          var singleObj = obj[prop];
          var title = singleObj.title;
          var url = singleObj.fullurl;
          var extract = singleObj.extract;
          wikiContent = "<div class='wiki-content'><h2><a href="+url+" target='_blank'>"+title+"</a></h2><p class='extract'>"+extract+"</p></div>";
          wikiContainer.append(wikiContent)
        }
      }
    })

  })
})
