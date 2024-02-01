---
aliases:
  - Regular expressions
---

> [!important]- Metadata
> **Tags:** #<% tp.file.cursor(2) %>
> **Located:** ProgramLanguages
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let cur = dv.current().file;
> let paths = new Set(
>     [...cur.inlinks.filter(p => !p.path.endsWith(".png")), ...cur.outlinks].map(p => p.path));
> paths.delete(cur.path);
> dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p =>
>     [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Regex





- [Regular expressions](https://regexr.com/) cheatsheet:

![[Pasted image 20220617113314.png|450|450]]
# Character classes
## Character set []
![[Pasted image 20220804170605.png|250|250]]
## Negated set ^
![[Pasted image 20220804170646.png|250|250]]
## Range set - 
![[Pasted image 20220804170704.png|250|250]]
## Any set .
![[Pasted image 20220804170757.png|250|250]]
## Whitespace sets
- Note the whitespace set includes space, tabs and line breaks
- \s grabs all whitespace
- \S grabs all non whitespace
## Unicode category (limited support)
- \p{L} will catch any
- \P{L} will catch all non unicode
# Flags
- Denoted by /"regex pattern placeholder"/"flags"
## Ignore case i
```ad-example
/aBc/i would match AbC
```
## Global search g
- Captures all matches rather than just the first occurrence

```ad-example
/aaaa/g would catch aaaa instead of just a
```
## Dotall .
- Matches any character including newlines
## Sticky y
- Negates global flag, makes
# Anchors
## Beginning ^
- Matches the beginning of a string
## End $
- Matches the end of a string
## Word boundary \b
- Matches anything within the beginning or end boundary
- \B ignores word boundaries (center matches)

![[Pasted image 20220804170922.png|350|350]]
![[Pasted image 20220804170939.png|350|350]]
# Escaped characters
- Escaped characters require a backslash in order to be used as part of regex pattern
- Reserved characters requiring a backslash include

> +*?^$.[]{}()|/

![[Pasted image 20220804144505.png|250|250]]
# Quantifiers
## 1 or more +
![[Pasted image 20220804171742.png|450|450]]
## 0 or more *
![[Pasted image 20220804171819.png|450|450]]
## Fixed quantifier {}
![[Pasted image 20220804171910.png|450|450]]
## Optional quantifier ?
![[Pasted image 20220804172016.png|450|450]]
## Lazy quantifier
![[Pasted image 20220804172658.png|450|450]]
## Alternation quantifier
![[Pasted image 20220804172758.png|450|450]]
# Lookaround
## Positive lookahead
![[Pasted image 20220804180703.png|450|450]]
## Negative lookahead
![[Pasted image 20220804180818.png|450|450]]
## Positive lookbehind
- Specifies a group that can not match before the main expression (if it matches, the result is discarded).

![[Pasted image 20220804182300.png|450|450]]
## Negative lookbehind
- Specifies a group that can not match before the main expression (if it matches, the result is discarded).

![[Pasted image 20220804182404.png|450|450]]
# Group referencing

## Indexed capturing group
![[Pasted image 20220805231552.png|450|450]]
## Capturing group
![[Pasted image 20220804203711.png|450|450]]
## Named capturing group 
> (?<\name>ABC)
> creates a capture group that can referenced by a specific name 

```python
import re

txt = "Adil Wazeer"

pattern = re.compile("(?P<first>\w+)\s(?P<last>\w+)")

match = pattern.match(txt)

print(match["first"])
```


## Non capturing group 
![[Pasted image 20220804205625.png|250|250]]