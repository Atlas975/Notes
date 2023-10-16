> [!important]- Metadata
> **Tags:** #Algorithms 
> **Located:** Algorithms/Trees
> **Created:** 24/09/2023 - 19:58
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Tree traversal
- Various algorithms exist when traversing trees, see [[Tree_algorithms|tree algorithms]] for examples
## Inorder traversal (left , mid, right)
```python
def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    res = []

    # ITERATIVE
    s = deque()
    while root or s:
        while root:
            s.append(root)
            root = root.left
        root = s.pop()
        res.append(root.val)
        root = root.right
        
    # RECURSIVE
    def traverse(node):
        if not node:
            return
        traverse(node.left)
        res.append(node.val)
        traverse(node.right)
    traverse(root)
    
    return res
```

## Preorder traversal (mid, left, right)
```python
def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    res = []
    
    # ITERATIVE 
    if root is None:
        return res
    s = deque([root])
    while s:
        node = s.pop()
        res.append(node.val)
        if node.right:
            s.append(node.right)
        if node.left:
            s.append(node.left)
            
    # RECURSIVE
    def traverse(node):
        if not node:
            return
        res.append(node.val)
        traverse(node.left)
        traverse(node.right)
    traverse(root)

    return res
```

## Postorder traversal (right, left, mid)
```python
def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    res = []
    
    # ITERATIVE 
    s = deque()
    while root or s:
        while root:
            s.append((root, False))
            root = root.left
        root, seen = s.pop()
        if seen:
            res.append(root.val)
            root = None
        else:
            s.append((root, True))
            root = root.right
    
    # RECRUSIVE
    def traverse(node):
        if not node:
            return
        traverse(node.left)
        traverse(node.right)
        res.append(node.val)
    traverse(root)

    return res
```

## Level order traversal (BFS)
```python
def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []

    # ITERATIVE 
    if root is None:
        return res
    q = deque([root])
    while q:
        level = []
        for node in (q.popleft() for _ in range(len(q))):
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        res.append(level)

    # RECURSIVE 
    def traverse(node, level):
        if node is None:
            return
        if len(res) == level:
            res.append([])
        res[level].append(node.val)
        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    traverse(root, 0)
    
    return res
```