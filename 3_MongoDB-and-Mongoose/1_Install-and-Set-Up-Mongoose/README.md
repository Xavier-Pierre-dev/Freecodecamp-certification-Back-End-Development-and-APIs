<div class="challenge-instructions"><div><section id="description">
<p>Working on these challenges will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete these challenges locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete these challenges.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field.</p>
<p>In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.</p>
<p>Follow <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" rel="noopener noreferrer nofollow" target="_blank">this tutorial</a> to set up a hosted database on MongoDB Atlas.</p>
</section></div><hr/><div><section id="instructions">
<p><code>mongoose@^5.11.15</code> has been added to your project’s <code>package.json</code> file. First, require mongoose as <code>mongoose</code> in <code>myApp.js</code>. Next, create a <code>.env</code> file and add a <code>MONGO_URI</code> variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the <code>=</code> in environment variables. For example, <code>MONGO_URI='VALUE'</code>.</p>
<p><strong>Note:</strong> If you are using Replit, you cannot create a <code>.env</code> file. Instead, use the built-in <dfn>SECRETS</dfn> tab to add the variable. <em>Do not</em> surround the values with quotes when using the <em>SECRETS</em> tab.</p>
<p>When you are done, connect to the database using the following syntax:</p>
<pre class="language-js" tabindex="0"><code class="language-js">mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Your <span class="token constant">URI</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/></div>