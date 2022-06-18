[[Python_basics#Dictionaries methods]]
# Count letters
```python
message="It was a bright cold day in April"
count={}
for character in message.upper():
	count.setdefault(character,0)
	count[character]=count[character]+1
print(count)
```

# Large documents
>text = ''' blah blah blah '''
# Print formatting
>import pprint
>pprint.pprint(count)
## Save ouput as string
>text=pprint.pformat(count)
# Useful methods
- Note that adding **is** turns some of these into a boolean expression
## split(letter) 
- Splits string on given letter
## rjust(number) 
- adds whitespace left until a string is a given length
## center(number)
- Same as rjust but centers word
## ljust(number)
- adds whitespace right until a string is a given length
- Whitespace can also be replaced with other characters eg. A by ljust(10,A)
## strip()
- Removes spaces / characters (case sense) eg:
>'SpamSpamBaconSpamEggsSpam'.strip('ampS')
>returns BaconSpamEggs
- Note it returns everything between the words that don't satisfy strip request.
- This can also be limited to just left or right of string by:
## lstrip()
## rstrip()
## replace('e','XYZ') 
- Replaces a character 
