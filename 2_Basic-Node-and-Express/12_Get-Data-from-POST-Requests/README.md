<div class="challenge-instructions"><div><section id="description">
<p>Mount a POST handler at the path <code>/name</code>. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object <code>req.body</code>. Have a look at the usual library example:</p>
<blockquote>route: POST '/library'<br/>urlencoded_body: userId=546&amp;bookId=6754 <br/>req.body: {userId: '546', bookId: '6754'}</blockquote>
<p>Respond with the same JSON object as before: <code>{name: 'firstname lastname'}</code>. Test if your endpoint works using the html form we provided in the app frontpage.</p>
<p>Tip: There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:</p>
<p>POST (sometimes PUT) - Create a new resource using the information sent with the request,</p>
<p>GET - Read an existing resource without modifying it,</p>
<p>PUT or PATCH (sometimes POST) - Update a resource using the data sent,</p>
<p>DELETE =&gt; Delete a resource.</p>
<p>There are also a couple of other methods which are used to negotiate a connection with the server. Except from GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.</p>
</section></div><hr/></div>