# 🚀 Add a License to Your package.json 🚀<!-- omit in TOC -->

<div align="center">

![image](./../Logo/../../Logo/540px-Npm-logo.svg.png)

|[previous](./../4_Add-a-License-to-Your-package-json/Readme.md)|[index](./../../Readme.md)|[next](./../6_Expand-Your-Project-with-External-Packages-from-npm/Readme.md)|
|---|---|---|

</div>

## Summary <!-- omit in TOC -->

- [Task](#task)
- [Concepts](#concepts)
  - [version](#version)
  - [package.json](#packagejson)
- [Ressource](#ressource)

<br>
<br>

____

## Task

A ``version`` is one of the required fields of your ``package.json`` file (if you want to publish your package otherwise this is optional). This field describes the current version of your project. Here's an example :
```json
"version": "1.2.0",
```

You must add a ``version`` key to every npm package, specifying the version number as a string.

Create or edit a ``version`` key the package.json, and add in a version number as a string. The number doesn't matter.

<br>

## Concepts

### version

If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don’t plan to publish your package, the name and version fields are optional.

```json
"version": "1.2.0",
```

### package.json

All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.


<br>
<br>

<div align="center">


|[previous](./../4_Add-a-License-to-Your-package-json/Readme.md)|[index](./../../Readme.md)|[next](./../6_Expand-Your-Project-with-External-Packages-from-npm/Readme.md)|
|---|---|---|

</div>


<br>
<br>

## Ressource

* [Add a Version to Your package.json [ganesh][article]](https://www.notion.so/Add-a-Version-to-Your-package-json-780e62747d2b4d3da52c1e397471ec48)
* [What is the file `package.json`? [official][article]](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies.&text=The%20package.,-json%20file%20is)
* [configuring npm : ``package.json`` [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
