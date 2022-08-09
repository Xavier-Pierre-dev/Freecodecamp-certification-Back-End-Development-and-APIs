<div class="challenge-instructions"><div><section id="description">
<p>Similar to how the tilde we learned about in the last challenge allows npm to install the latest PATCH for a dependency, the caret (<code>^</code>) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.</p>
<p>Your current version of <code>@freecodecamp/example</code> should be "~1.2.13" which allows npm to install to the latest 1.2.x version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any 1.x.x version.</p>
<pre class="language-json" tabindex="0"><code class="language-json">"package": "^1.3.8"
</code></pre>
<p>This would allow updates to any 1.x.x version of the package.</p>
</section></div><hr/><div><section id="instructions">
<p>Use the caret (<code>^</code>) to prefix the version of <code>@freecodecamp/example</code> in your dependencies and allow npm to update it to any new MINOR release.</p>
<p><strong>Note:</strong> The version numbers themselves should not be changed.</p>
</section></div><hr/></div>