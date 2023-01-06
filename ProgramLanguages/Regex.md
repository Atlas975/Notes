# Regex
date created: "2022-06-20 18:15"
#Scraping

---

- [Regular expressions](https://regexr.com/) cheatsheet

> ![[Pasted image 20220617113314.png]]
# Character classes
## Character set
> ![[Pasted image 20220804170605.png]]
## Negated set
> ![[Pasted image 20220804170646.png]]
## Range set
> ![[Pasted image 20220804170704.png]]
## Any set
> ![[Pasted image 20220804170757.png]]
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

> ![[Pasted image 20220804170922.png]]
> ![[Pasted image 20220804170939.png]]
# Escaped characters
- Escaped characters require a backslash in order to be used as part of regex pattern
- Reserved characters requiring a backslash include

> +*?^$.[]{}()|/

> ![[Pasted image 20220804144505.png]]
# Quantifiers
## 1 or more +
> ![[Pasted image 20220804171742.png]]
## 0 or more *
> ![[Pasted image 20220804171819.png]]
## Fixed quantifier {}
> ![[Pasted image 20220804171910.png]]
## Optional quantifier ?
> ![[Pasted image 20220804172016.png]]
## Lazy quantifier
> ![[Pasted image 20220804172658.png]]
## Alternation quantifier
> ![[Pasted image 20220804172758.png]]
# Lookaround
## Positive lookahead
> ![[Pasted image 20220804180703.png]]
## Negative lookahead
> ![[Pasted image 20220804180818.png]]
## Positive lookbehind
- Specifies a group that can not match before the main expression (if it matches, the result is discarded).

> ![[Pasted image 20220804182300.png]]
## Negative lookbehind
- Specifies a group that can not match before the main expression (if it matches, the result is discarded).

> ![[Pasted image 20220804182404.png]]
# Group referencing

## Indexed capturing group
>![[Pasted image 20220805231552.png]]
## Capturing group
> ![[Pasted image 20220804203711.png]]
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
> ![[Pasted image 20220804205625.png]]