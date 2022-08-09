<div class="challenge-instructions"><div><section id="description">
<p>In this challenge you will have to create and save a record of a model.</p>
</section></div><hr/><div><section id="instructions">
<p>Within the <code>createAndSavePerson</code> function, create a document instance using the <code>Person</code> model constructor you built before. Pass to the constructor an object having the fields <code>name</code>, <code>age</code>, and <code>favoriteFoods</code>. Their types must conform to the ones in the <code>personSchema</code>. Then, call the method <code>document.save()</code> on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token comment">/* Example */</span>

<span class="token comment">// ...</span>
person<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//   ...do your stuff here...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</section></div><hr/></div>