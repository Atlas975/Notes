# Regular expressions
- Example, prints first occurrence:
>import re
phoneNumReg=re.compile(r'\d\d\d-\d\d\d\-\d\d\d')
mo=phoneNumReg.search('Call me 415-555-321')
>print (mo.group())
## findall()
- Replace search(), returns all occurrences in a list
## group(anyNum)
>(r'(\d\d\d)-(\d\d\d\-\d\d\d'))
- Same regular expression, but passing a num will return groups. No num returns the whole things
- To insert literal brackets use \\(
>(r'\\((\d\d\d)\\)-(\d\d\d\-\d\d\d'))
# Pipe character
- Includes variant ends of same word:
>re.compile(r"Bat(man|mobile|plane)")
# Greedy matches
- Includes variant middle of same word:
>re.compile(r"Bat(wo)?man")
- wo can occur 1 or 0 times, so either batman or batwoman will satisfy
## 0 or more (optional)
- Same logic, but allows more than one occurrence by using star
>re.compile(r"Bat(wo)\*man")   
## 1 or more
>re.compile(r"Bat(wo)+man")
## Literal greedy match character
- Start and proceed with backslash
>re.compile(r"\\+\\\*\\")   
returns +\\\*
## Duplicate expressions
>re.compile(r'(Ha){3}')
- This can also be done in a range:
>re.compile(r'(Ha){3,5})
- By default this will look for as many dupes as possible, doing the following will try keep it to a minimum: 
>re.compile(r'(Ha){3,5}?)
- Minimum dupes:
>re.compile(r'(Ha){3,}')
