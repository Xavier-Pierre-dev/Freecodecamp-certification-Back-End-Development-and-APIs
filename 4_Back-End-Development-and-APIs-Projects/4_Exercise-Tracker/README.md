<div class="challenge-instructions"><div><section id="description">
<p>Build a full stack JavaScript app that is functionally similar to this: <a href="https://exercise-tracker.freecodecamp.rocks" rel="noopener noreferrer nofollow" target="_blank">https://exercise-tracker.freecodecamp.rocks</a>. Working on this project will involve you writing your code using one of the following methods:</p>
<ul>
<li>Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/" rel="noopener noreferrer nofollow" target="_blank">this GitHub repo</a> and complete your project locally.</li>
<li>Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker" rel="noopener noreferrer nofollow" target="_blank">our Replit starter project</a> to complete your project.</li>
<li>Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.</li>
</ul>
<p>When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the <code>Solution Link</code> field. Optionally, also submit a link to your project's source code in the <code>GitHub Link</code> field.</p>
</section></div><hr/><div><section id="instructions">
<p>Your responses should have the following structures.</p>
<p>Exercise:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"fcc_test"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">"Mon Jan 01 1990"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"5fb5853f734231456ccb3b05"</span>
<span class="token punctuation">}</span>
</code></pre>
<p>User:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"fcc_test"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"5fb5853f734231456ccb3b05"</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Log:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"fcc_test"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">"5fb5853f734231456ccb3b05"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">log</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">"Mon Jan 01 1990"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Hint:</strong> For the <code>date</code> property, the <code>toDateString</code> method of the <code>Date</code> API can be used to achieve the expected output.</p>
</section></div><hr/></div>