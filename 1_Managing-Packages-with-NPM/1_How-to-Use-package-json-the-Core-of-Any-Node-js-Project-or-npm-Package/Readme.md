# 🚀 How to Use package json the Core of Any Node js Project or npm Package 🚀<!-- omit in TOC -->

<div align="center">

![image](./../Logo/../../Logo/540px-Npm-logo.svg.png)

|[index](./../../Readme.md)|[next](./../2_Add-a-Description-to-Your-package-json/Readme.md)|
|---|---|

</div>

## Summary <!-- omit in TOC -->

- [Task](#task)
- [Concepts](#concepts)
  - [people fields : author, contributors](#people-fields--author-contributors)
    - [contributors default value](#contributors-default-value)
  - [npm](#npm)
    - [package.json](#packagejson)
  - [node modules](#node-modules)
- [Ressource](#ressource)

<br>
<br>

____

## Task

We look at the package.json file in a bit more detail. We then add some author information with the 'author' field in that file.

In 'package.json', add a new entry with : 
```json
"author:" : "<YOUR NAME>"
```

<br>

## Concepts

### people fields : author, contributors

* ``author`` is one ``person``. 
* ``contributors`` is an array of ``person``. 
* ``person`` is an object with a ``name`` field and optionally ``url`` and ``email`` like this:

```json
"author": {
  "name" : "Barney Rubble",
  "email" : "b@rubble.com",
  "url" : "http://barnyrubble.tumblr.com/"
}
```

Or you can shorten that all into a single string, and npm will parse it for you :
```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```
email and url are optional. npm also sets a top-level ``maintainers`` field with your npm user info.

#### contributors default value

And for ```"contributors": [...]```

If there is an ``AUTHORS`` file in the root of your package, npm will treat each line as a ``Name`` ``<email>`` ``(url)`` format, where email and url are optional. Lines which start with a ``#`` or are blank, will be ignored.

[``AUTHORS`` file example](https://github.com/nodejs/node/blob/main/AUTHORS)

```
# Authors ordered by first contribution.

Ryan Dahl <ry@tinyclouds.org>
Urban Hafner <urban@bettong.net>
Joshaven Potter <yourtech@gmail.com>
Abe Fettig <abefettig@gmail.com>
Kevin van Zonneveld <kevin@vanzonneveld.net>
```

And the ``AUTHORS`` file will populate the ``contributors`` array

<br>

### npm

npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

#### package.json

All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.

### node modules

Packages are dropped into the node_modules folder under the prefix. When installing locally, this means that you can require("packagename") to load its main module, or require("packagename/lib/path/to/sub/module") to load other modules.

<br>
<br>

<div align="center">


|[index](./../../Readme.md)|[next](./../2_Add-a-Description-to-Your-package-json/Readme.md)|
|---|---|

</div>


<br>
<br>

## Ressource

* [How to Use package.json, the Core of Any Node.js Project or npm Package [ganesh][article]](https://www.notion.so/How-to-Use-package-json-the-Core-of-Any-Node-js-Project-or-npm-Package-d80c2c4a702b469ebfc6cece36f8c6ef)
* [What is the file `package.json`? [official][article]](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies.&text=The%20package.,-json%20file%20is)
* [configuring npm : ``package.json`` [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
  * [configuring npm : ``package.json`` - people fields : author, contributors [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#people-fields-author-contributors)