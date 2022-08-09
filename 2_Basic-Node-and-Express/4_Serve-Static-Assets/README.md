<div class="challenge-instructions"><div><section id="description">
<p>An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).</p>
<p>In Express, you can put in place this functionality using the middleware <code>express.static(path)</code>, where the <code>path</code> parameter is the absolute path of the folder containing the assets.</p>
<p>If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method <code>app.use(path, middlewareFunction)</code>. The first <code>path</code> argument is optional. If you don’t pass it, the middleware will be executed for all requests.</p>
</section></div><hr/><div><section id="instructions">
<p>Mount the <code>express.static()</code> middleware to the path <code>/public</code> with <code>app.use()</code>. The absolute path to the assets folder is <code>__dirname + /public</code>.</p>
<p>Now your app should be able to serve a CSS stylesheet. Note that the <code>/public/style.css</code> file is referenced in the <code>/views/index.html</code> in the project boilerplate. Your front-page should look a little better now!</p>
</section></div><hr/></div>