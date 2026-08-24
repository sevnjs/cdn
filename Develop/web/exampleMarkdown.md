# The Ultimate Markdown Test & Tutorial Document

Welcome to this comprehensive document that serves two purposes:
1. **Testing** your markdown renderer's functionality
2. **Teaching** beginners the essential markdown syntax

## Quick Start: Basic Formatting

### Text Styling
Markdown makes text formatting simple and intuitive:

- *Italic text* using `*asterisks*` or `_underscores_`
- **Bold text** using `**double asterisks**` or `__double underscores__`
- ***Bold and italic*** using `***triple asterisks***` or `___triple underscores___`
- ~~Strikethrough~~ using `~~double tildes~~`
- `Inline code` using ``backticks``
- ==Highlighted text== using `==double equals==` (supported by some renderers)

### Special Characters Test
Test how your renderer handles special characters: ! @ # $ % ^ & * ( ) _ + { } : " < > ? ` ~

## Headings: Structure Your Content

# H1 - Main Title (use #)
## H2 - Major Section (use ##)
### H3 - Subsection (use ###)
#### H4 - Detailed Section (use ####)
##### H5 - Fine Detail (use #####)
###### H6 - Smallest Heading (use ######)

**Pro Tip:** Headings create a table of contents hierarchy. Don't skip levels (e.g., H1 → H3 without H2).

## Lists: Organize Information

### Unordered Lists (Bullet Points)
- First item (use `-`, `+`, or `*`)
- Second item
  - Nested item (indent with 2-4 spaces)
    - Deeper nested item
- Back to main level

### Ordered Lists (Numbered)
1. First item (use `1.`, `2.`, etc.)
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item with a nested bullet:
   - Mixed nesting works too
   - Just indent properly

### Task Lists (Checkboxes)
- [x] Completed task
- [ ] Pending task
- [x] Nested task list:
  - [x] Sub-task done
  - [ ] Sub-task pending

## Links and Images

### Hyperlinks
- [Google](https://google.com) - Standard link
- [Link with title](https://google.com "Google's Homepage") - With tooltip
- <https://autolink.com> - Automatic link without brackets
- [Relative link](./README.md) - Link to local file

### Images
![Placeholder Image](https://via.placeholder.com/150 "Sample Image")

### Reference-style Links
[I'm a reference-style link][reference]
[Reference]: https://www.markdownguide.org "Markdown Guide"

## Code: Show Your Code Properly

### Inline Code
Use `` `backticks` `` for inline code: `var x = 10;`

### Code Blocks with Syntax Highlighting

#### Bash/Shell
```bash
#!/bin/bash
name="Markdown"
echo "Testing $name renderer"
for i in {1..5}; do
  echo "Iteration $i"
done
```

#### JavaScript
```javascript
// Test with template literals
const message = "Hello";
const greeting = `Testing ${message} with special chars: !@#$%^&*()`;
console.log(greeting);

// Function example
function testRenderer(features) {
  return features.every(f => f.works) ? "✅ Passed" : "❌ Failed";
}
```

#### Python
```python
# Test Python syntax highlighting
def calculate_sum(a, b):
    """Add two numbers together."""
    result = a + b
    return result

# List comprehension test
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(f"Results: {squared}")
```

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Markdown Test</title>
</head>
<body>
    <div class="container">
        <p>Testing HTML in markdown</p>
        <script>
            // This should NOT execute if properly escaped
            console.log("This is a code block, not real HTML");
        </script>
    </div>
</body>
</html>
```

## Blockquotes: Highlight Important Text

> This is a standard blockquote.
> Use `>` at the start of each line.

> **Tip:** Blockquotes can contain formatting:
> - Bold, *italic*, `code`
> 
> > Nested blockquotes are also possible
> > Just add more `>` characters

## Tables: Display Data Clearly

### Basic Table
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Left     | Center   | Right    |
| Cell     | Cell     | Cell     |

### Table with Alignment
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Content      | Content        | Content       |
| More text    | Centered       | Right         |
| `code here`  | **bold**       | *italic*      |

### Table with Special Characters
| Feature | Test Value |
|---------|------------|
| Pipeline | `a \| b \| c` |
| Backticks | ``code `with` backticks`` |
| Bold/Italic | ***bold+italic*** |

## Horizontal Rules: Section Dividers

Use three or more dashes, asterisks, or underscores:

---
***
___

## Footnotes: Add References

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content. It can be multiple lines.

## Escaping Characters

To display literal markdown characters, use backslashes:

\*Not italic\*  
\_Not underline\_  
\#Not a heading  
`Not code` (but this is actual code)

## Complex Mixed Formatting Test

***This is bold, italic, and contains `code` with *nested* formatting***  
~~Strikethrough with **bold** and *italic*~~  
[Link with **bold** text](https://example.com)  
![Alt text with **bold**](https://via.placeholder.com/50)

## Real-World Example: Documentation Snippet

### API Endpoint Documentation

**Endpoint:** `/api/v1/users`  
**Method:** `POST`  
**Authentication:** Required (Bearer token)

#### Request Body
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_pass123"
}
```

#### Response
```json
{
  "status": "success",
  "data": {
    "id": 123,
    "username": "john_doe",
    "email": "john@example.com",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

#### Error Codes
| Code | Description |
|------|-------------|
| 400  | Invalid request body |
| 401  | Missing or invalid token |
| 409  | Username or email already exists |
| 500  | Internal server error |

## Testing Checklist for Renderers

- [x] Headings show proper hierarchy
- [x] Bold, italic, and strikethrough render correctly
- [x] Inline code is distinguishable
- [x] Code blocks preserve formatting and have language-specific highlighting
- [x] Lists nest properly
- [x] Links are clickable
- [x] Images display (or show alt text)
- [x] Tables align correctly and handle special characters
- [x] Blockquotes are indented and styled
- [x] Task lists show interactive checkboxes (if supported)
- [x] Horizontal rules display as separators
- [x] Footnotes appear at the bottom
- [x] Special characters render properly (not interpreted as markdown)
- [x] HTML is escaped in code blocks but rendered in raw HTML sections
- [x] Nested formatting works inside other elements

## Edge Cases to Test

### Empty Elements
- [ ] Empty list item:
- [ ] Empty table cell | |

### Overlapping Formatting
This is **bold and *italic* and `code`** all mixed.

### Long Lines and Word Wrap
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Unicode and Emoji
Testing Unicode: ü, é, ñ, 你好, こんにちは, 🌟, 🚀, ✅, ❌, 📝

## Conclusion

This document should help you:
- **Test** all major markdown features
- **Learn** the syntax as a beginner
- **Debug** renderer issues with specific examples

Happy Markdowning! 🎉

---

* Document last updated: Aug 2026*  
[Back to Top](#the-ultimate-markdown-test--tutorial-document)