<div class="challenge-instructions"><div><section id="description">
<p>Recent versions of Mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the classic method is still useful in many situations. <code>findByIdAndUpdate()</code> can be used when searching by id.</p>
</section></div><hr/><div><section id="instructions">
<p>Modify the <code>findAndUpdate</code> function to find a person by <code>Name</code> and set the person's age to <code>20</code>. Use the function parameter <code>personName</code> as the search key.</p>
<p><strong>Note:</strong> You should return the updated document. To do that, you need to pass the options document <code>{ new: true }</code> as the 3rd argument to <code>findOneAndUpdate()</code>. By default, these methods return the unmodified object.</p>
</section></div><hr/></div>