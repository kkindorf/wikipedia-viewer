# wikipedia-viewer
A wikipedia Viewer built with jQuery

This is a pretty simple search and display application that connects a form who's value, when submitted, gets added to a wikipedia search query and then returns the results of the query.

I'm using jQuery to set up the ajax request to wikipedia. The most challenging part about setting up this application was finding the right query string to access the data I wanted from Wikipedia's API.

But once I figured that out, I was able to use the JSON returned from the request to format each panel of content pretty easily.

Some potential TODO's for this project if I have the time: re-write the getJSON request so that the query string to Wikipedia's API is easier to maintain.

Update the CSS and HTML so that the text is a little easier to read against the blue background and update H2 links so that they are always underlined.
