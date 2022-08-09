# 🚀 Add a Keywords to Your package.json 🚀<!-- omit in TOC -->

<div align="center">

![image](./../Logo/../../Logo/540px-Npm-logo.svg.png)

|[previous](./../2_Add-a-Description-to-Your-package-json/Readme.md)|[index](./../../Readme.md)|[next](./../4_Add-a-License-to-Your-package-json/Readme.md)|
|---|---|---|

</div>

## Summary <!-- omit in TOC -->

- [Task](#task)
- [Concepts](#concepts)
  - [description](#description)
  - [package.json](#packagejson)
- [Ressource](#ressource)

<br>
<br>

____

## Task

The ``keywords`` field is where you can describe your project using related ``keywords``. This will help your packages and projects get displayed to users when they search. You can add an array of related key word strings.

Add a ``keywords`` string to your ``package.json`` and make it an array of strings consisting of related keywords. Make sure you put ``freecodecamp`` as one of them.

In ``package.json``, add a new entry with 
```json
  "keywords": [
    "freecodecamp",
    "example",
    "project"
  ]
```

<br>

## Concepts

### description

Put keywords in it. It’s an array of strings. This helps people discover your package as it’s listed in ``npm search``.

```json
  "keywords": [
    "freecodecamp",
    "example",
    "project"
  ]
```

### package.json

All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.


<br>
<br>

<div align="center">


|[previous](./../2_Add-a-Description-to-Your-package-json/Readme.md)|[index](./../../Readme.md)|[next](./../4_Add-a-License-to-Your-package-json/Readme.md)|
|---|---|---|

</div>


<br>
<br>

## Ressource

* [Add a Keywords to Your package.json [ganesh][article]](https://www.notion.so/Add-Keywords-to-Your-package-json-e1e26afdd27a4e0f926aa3b3c05bc0a0)
* [What is the file `package.json`? [official][article]](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies.&text=The%20package.,-json%20file%20is)
* [configuring npm : ``package.json`` [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
  * [configuring npm : ``package.json`` - keywords [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#keywords)