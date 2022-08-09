<div class="challenge-instructions"><div><section id="description">
<p>In the first two lines of the file <code>myApp.js</code>, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is <code>app.listen(port)</code>. It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the <code>server.js</code> file for you.</p>
<p>Let’s serve our first string! In Express, routes takes the following structure: <code>app.METHOD(PATH, HANDLER)</code>. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form <code>function(req, res) {...}</code>, where req is the request object, and res is the response object. For example, the handler</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Response String'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>will serve the string 'Response String'.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the <code>app.get()</code> method to serve the string "Hello Express" to GET requests matching the <code>/</code> (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Replit.</p>
<p><strong>Note:</strong> All the code for these lessons should be added in between the few lines of code we have started you off with.</p>
</section></div><hr/></div>