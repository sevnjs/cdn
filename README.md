# SevnJS cdn

- To host and distribute SevnJS and minified version
- To keep version history for production level apps
- To keep development setup 







# Version History

### v0.8.4

#### update gen. 
Now multilevel nested tags can be generated, first paramenter can contains coma seperated tags, and second paramenter can also take coma seperated ids,
given code ```script 
gens("ul, li, a", "nav", "text", "classa, classb, classc")
```
Will create nested elements like this.
```html 
<ul id="nav">
    <li>
        <a class="classa classb classc">text</a>
    </li>
</ul>
```

### v0.8.3
- Improve parsemd to work with checklist and fix html codeblock
- Improved grab and append to define specific element when selecting from classname or elementtag using [number], say `grab("h1[2]"")` or `append("h1[2]"","newheading","r")`.
- Show version in load


### v0.8.2
- Refactor load, now it can also work with string input containing mix of scripts, css and scss seperated by coma.
- Added show and hide function
- Added nix-shell and python script to minify sevn.js to sevn.min.js and sevn.min.js.gz

### v0.8.1

Relaunching GeneratorJS as SevnJS, copy last updated version from generatorjs.github.io.
SevJS is formely known as GeneratorJS.
It is named SevnJS because of its 7 functions to frontend design.