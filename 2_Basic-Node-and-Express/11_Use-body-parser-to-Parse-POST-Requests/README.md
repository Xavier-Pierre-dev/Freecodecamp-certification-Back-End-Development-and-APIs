<div class="challenge-instructions"><div><section id="description">
<p>Besides GET, there is another common HTTP verb, it is POST. POST is the default method used to send client data with HTML forms. In REST convention, POST is used to send data to create new items in the database (a new user, or a new blog post). You don’t have a database in this project, but you are going to learn how to handle POST requests anyway.</p>
<p>In these kind of requests, the data doesn’t appear in the URL, it is hidden in the request body. The body is a part of the HTTP request, also called the payload. Even though the data is not visible in the URL, this does not mean that it is private. To see why, look at the raw content of an HTTP POST request:</p>
<pre class="language-http" tabindex="0"><code class="language-http">POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&amp;age=25
</code></pre>
<p>As you can see, the body is encoded like the query string. This is the default format used by HTML forms. With Ajax, you can also use JSON to handle data having a more complex structure. There is also another type of encoding: multipart/form-data. This one is used to upload binary files. In this exercise, you will use a URL encoded body. To parse the data coming from POST requests, you must use the <code>body-parser</code> package. This package allows you to use a series of middleware, which can decode data in different formats.</p>
</section></div><hr/><div><section id="instructions">
<p><code>body-parser</code> has already been installed and is in your project's <code>package.json</code> file. <code>require</code> it at the top of the <code>myApp.js</code> file and store it in a variable named <code>bodyParser</code>. The middleware to handle URL encoded data is returned by <code>bodyParser.urlencoded({extended: false})</code>. Pass the function returned by the previous method call to <code>app.use()</code>. As usual, the middleware must be mounted before all the routes that depend on it.</p>
<p><strong>Note:</strong> <code>extended</code> is a configuration option that tells <code>body-parser</code> which parsing needs to be used. When <code>extended=false</code> it uses the classic encoding <code>querystring</code> library. When <code>extended=true</code> it uses <code>qs</code> library for parsing.</p>
<p>When using <code>extended=false</code>, values can be only strings or arrays. The object returned when using <code>querystring</code> does not prototypically inherit from the default JavaScript <code>Object</code>, which means functions like <code>hasOwnProperty</code>, <code>toString</code> will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.</p>
</section></div><hr/></div>