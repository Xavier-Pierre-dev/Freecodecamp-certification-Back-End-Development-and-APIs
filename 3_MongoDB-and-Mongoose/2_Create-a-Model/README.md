<div class="challenge-instructions"><div><section id="description">
<p><strong>C</strong>RUD Part I - CREATE</p>
<p>First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building block for Models. They can be nested to create complex models, but in this case we'll keep things simple. A model allows you to create instances of your objects, called documents.</p>
<p>Replit is a real server, and in real servers the interactions with the database happen in handler functions. These functions are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The <code>done()</code> function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as <code>done(null, data)</code> on success, or <code>done(err)</code> on error.</p>
<p>Warning - When interacting with remote services, errors may occur!</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token comment">/* Example */</span>

<span class="token keyword">const</span> <span class="token function-variable function">someFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//... do something (risky) ...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>Create a person schema called <code>personSchema</code> having this prototype:</p>
<pre class="language-markup" tabindex="0"><code class="language-markup">- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
</code></pre>
<p>Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See our <a href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" rel="noopener noreferrer nofollow" target="_blank">Mongoose article</a>.</p>
<p>Now, create a model called <code>Person</code> from the <code>personSchema</code>.</p>
</section></div><hr/></div>