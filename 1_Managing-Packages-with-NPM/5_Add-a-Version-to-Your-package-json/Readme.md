# π Add a Version to Your package.json π<!-- omit in TOC -->

<div align="center">

![image](./../Logo/../../Logo/540px-Npm-logo.svg.png)

|[previous](./../4_Add-a-License-to-Your-package-json/Readme.md)|[index](./../../Readme.md)|[next](./../6_Expand-Your-Project-with-External-Packages-from-npm/Readme.md)|
|---|---|---|

</div>

## Summary <!-- omit in TOC -->

- [Task](#task)
- [Concepts](#concepts)
  - [version](#version)
  - [π industry standard for software versioning : Semantic Versioning (SemVer)](#-industry-standard-for-software-versioning--semantic-versioning-semver)
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

If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you donβt plan to publish your package, the name and version fields are optional.

```json
"version": "1.2.0",
```

<br>

See [semver](https://github.com/npm/node-semver#versions) for more details about specifying version ranges.

version Must match version exactly
* ``>version`` Must be greater than version
* ``>=version`` etc
* ``<version``
* ``<=version``
* ``~version`` "Approximately equivalent to version" See [semver](https://github.com/npm/node-semver#versions)
* ``^version`` "Compatible with version" See [semver](https://github.com/npm/node-semver#versions)
* ``1.2.x`` ``1.2.0``, ``1.2.1``, etc., but not ``1.3.0``
* ``http://...`` See 'URLs as Dependencies' below
* ``*`` Matches any version
* ``""`` (just an empty string) Same as ``*``
* ``version1 - version2`` Same as ``>=version1 <=version2``.
* ``range1 || range2`` Passes if either range1 or range2 are satisfied.
* ``git...`` See 'Git URLs as Dependencies' below
* ``user/repo`` See 'GitHub URLs' below
* ``tag`` A specific version tagged and published as tag [``See npm dist-tag``](https://docs.npmjs.com/cli/v8/commands/npm-dist-tag)
* ``path/path/path`` See [Local Paths](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#local-paths) below

For example, these are all valid :

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}

```

<br>

### π industry standard for software versioning : Semantic Versioning (SemVer)

``Versions`` of the npm packages in the dependencies section of your package.json file follow whatβs called ``Semantic Versioning (SemVer)``, an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, __your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding__ why things that worked yesterday suddenly donβt work today. This is how Semantic Versioning works according to the official website:</p>
```json
"package": "MAJOR.MINOR.PATCH"
```

* The ``MAJOR`` version should increment when you make incompatible API changes. 
* The ``MINOR`` version should increment when you add functionality in a backwards-compatible manner. 
* The ``PATCH`` version should increment when you make backwards-compatible bug fixes. 

This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that wonβt work with earlier versions.

<br>

[Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.](https://semver.org/)

```
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

<version core> ::= <major> "." <minor> "." <patch>

<major> ::= <numeric identifier>

<minor> ::= <numeric identifier>

<patch> ::= <numeric identifier>

<pre-release> ::= <dot-separated pre-release identifiers>

<dot-separated pre-release identifiers> ::= <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

<build> ::= <dot-separated build identifiers>
```

<details>
<summary>pre-release : <code>MAJOR.MINOR.PATCH-PRE-RELEASE</code> => <code>1.2.13-alpha</code> or <code>1.2.13-0.1</code></summary>

A pre-release version MAY be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version. Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading zeroes. Pre-release versions have a lower precedence than the associated normal version. A pre-release version indicates that the version is unstable and might not satisfy the intended compatibility requirements as denoted by its associated normal version. 

Examples: 
```
1.0.0-alpha
1.0.0-alpha.1
1.0.0-0.3.7
1.0.0-x.7.z.92
1.0.0-x-y-z.β.
```

</details>

<details>
<summary>Build metadata : <code>MAJOR.MINOR.PATCH-PRE-RELEASE+BUILD</code> => <code>1.2.13-alpha+001</code> or <code>1.2.13-0.1+21AF26D3</code></summary>

Build metadata MAY be denoted by appending a plus sign and a series of dot separated identifiers immediately following the patch or pre-release version. Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be ignored when determining version precedence. Thus two versions that differ only in the build metadata, have the same precedence.

Examples: 
```
1.0.0-alpha+001
1.0.0+20130313144700
1.0.0-beta+exp.sha.5114f85
1.0.0+21AF26D3β-117B344092BD.
```

</details>


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
