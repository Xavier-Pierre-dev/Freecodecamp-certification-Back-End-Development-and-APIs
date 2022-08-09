# 🚀 Add a Description to Your package.json 🚀<!-- omit in TOC -->

<div align="center">

![image](./../Logo/../../Logo/540px-Npm-logo.svg.png)

|[previous](./../1_How-to-Use-package-json-the-Core-of-Any-Node-js-Project-or-npm-Package/Readme.md)|[index](./../../Readme.md)|[next](./../3_Add-Keywords-to-Your-package-json/README.md)|
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

We can describe our project or npm packed with the ``description`` field in ``package.json``.

In ``package.json``, add a new entry with 
```json
"description" : "<YOUR DESCRIPTION >"
```

<br>

## Concepts

### description

Put a description in it. It's a string. This helps people discover your package, as it's listed in ``npm search``.

```json
"description" : "<YOUR DESCRIPTION >"
```

### package.json

All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.


<br>
<br>

<div align="center">


|[previous](./../1_How-to-Use-package-json-the-Core-of-Any-Node-js-Project-or-npm-Package/Readme.md)|[index](./../../Readme.md)|[next](./../3_Add-Keywords-to-Your-package-json/README.md)|
|---|---|---|

</div>


<br>
<br>

## Ressource

* [Add a Description to Your package.json [ganesh][article]](https://www.notion.so/Add-a-Description-to-Your-package-json-f621d0a8ec9b4ae0b17685fd066856a2)
* [What is the file `package.json`? [official][article]](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies.&text=The%20package.,-json%20file%20is)
* [configuring npm : ``package.json`` [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
  * [configuring npm : ``package.json`` - description [npm][Docs]](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#description-1)