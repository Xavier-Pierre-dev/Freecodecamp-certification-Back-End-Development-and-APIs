<div class="challenge-instructions"><div><section id="description">
<p><code>Model.remove()</code> is useful to delete all the documents matching given criteria.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the <code>removeManyPeople</code> function to delete all the people whose name is within the variable <code>nameToRemove</code>, using <code>Model.remove()</code>. Pass it to a query document with the <code>name</code> field set, and a callback.</p>
<p><strong>Note:</strong> The <code>Model.remove()</code> doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the <code>done()</code> callback, since we use it in tests.</p>
</section></div><hr/></div>