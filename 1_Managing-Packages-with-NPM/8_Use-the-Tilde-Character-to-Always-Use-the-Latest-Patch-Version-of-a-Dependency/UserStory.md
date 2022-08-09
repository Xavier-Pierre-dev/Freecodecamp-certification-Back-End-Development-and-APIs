<div class="challenge-instructions"><div><section id="description">
<p>In the last challenge, you told npm to only include a specific version of a package. That’s a useful way to freeze your dependencies if you need to make sure that different parts of your project stay compatible with each other. But in most use cases, you don’t want to miss bug fixes since they often include important security patches and (hopefully) don’t break things in doing so.</p>
<p>To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (<code>~</code>) character. Here's an example of how to allow updates to any 1.3.x version.</p>
<pre class="language-json" tabindex="0"><code class="language-json">"package": "~1.3.8"
</code></pre>
</section></div><hr/><div><section id="instructions">
<p>In the package.json file, your current rule for how npm may upgrade <code>@freecodecamp/example</code> is to use a specific version (1.2.13). But now, you want to allow the latest 1.2.x version.</p>
<p>Use the tilde (<code>~</code>) character to prefix the version of <code>@freecodecamp/example</code> in your dependencies, and allow npm to update it to any new <em>patch</em> release.</p>
<p><strong>Note:</strong> The version numbers themselves should not be changed.</p>
</section></div><hr/></div>