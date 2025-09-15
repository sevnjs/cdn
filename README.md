# **SevnJS CDN**

* Hosts and distributes SevnJS and its minified versions.
* Maintains version history for production-level applications.
* Provides a setup for development use.

---

# **Version History**


### **v0.9.1**
- fix `parsemd`,  callback fixed, causing problem with parseNotebook, if callback is missing.


### **v0.9.0**
- fix `parsemd`, proper bold italic render with simple regex


### **v0.8.9**

- update `parsemd`, escape | in table if inside inline code block, bold italic escape if not enclosed with not word characters

### **v0.8.8**
- fix `parsemed` codeblock render detection and workaround with javascript string literal tick (\`) in code.  


### **v0.8.7**

- fix `parsemd` to process inline and block math


### **v0.8.5**

- Minor bug fix in `grab`

### **v0.8.4**

#### Update: `gen`

Now supports multilevel nested tag generation.
The first parameter can contain comma-separated tags, and the second parameter can accept comma-separated IDs.
For example:

```javascript
gens("ul, li, a", "nav", "text", "classa, classb, classc");
```

Generates the following nested elements:

```html
<ul id="nav">
  <li>
    <a class="classa classb classc">text</a>
  </li>
</ul>
```

---

### **v0.8.3**

* Improved `parsemd` to handle checklists and fixed issues with HTML code blocks.
* Enhanced `grab` and `append` to allow selection by index using `[number]`, e.g., `grab("h1[2]")` or `append("h1[2]", "newheading", "r")`.
* Displays version info during load.

---

### **v0.8.2**

* Refactored `load`: now accepts a string containing a mix of scripts, CSS, and SCSS separated by commas.
* Added `show()` and `hide()` utility functions.
* Added `nix-shell` and Python script to minify `sevn.js` to `sevn.min.js` and `sevn.min.js.gz`.

---

### **v0.8.1**

* Relaunched **GeneratorJS** as **SevnJS**.
* Ported the latest version from [generatorjs.github.io](https://generatorjs.github.io).
* SevnJS, formerly known as GeneratorJS, is named for its **seven core functions** dedicated to front-end design.

