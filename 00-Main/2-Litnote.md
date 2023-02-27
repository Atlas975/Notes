```
# removes blockquotes from images
find -name '*.md' -exec sed -i 's/>\s*!\[\[\(.*\)\]\]/!\[\[\1\]\]/g' {} +


# adds dimensions to all images that dont have them 
find -name '*.md' -exec sed -i 's/!\[\[\([^]|]*\.png\)\(\|[^]]\{1,\}\)\?\]\]/\0/g; s/!\[\[\([^]]*\.png\)\]\]/![[\1|450|450]]/g' {} +
```