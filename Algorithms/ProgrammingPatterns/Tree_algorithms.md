> [!important]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Tree traversal
## Inorder traversal
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

## Preorder traversal
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

## Postorder traversal
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

## Level order traversal **(BFS)**

```python
def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []

    # ITERATIVE 
    if root is None:
        return res
    q = deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
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

# Tree algorithms

## Invert tree
```python
def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    # ITERATIVE 
    s = deque([root])
    while s:
        node = s.pop()
        if node is None:
            continue
        s.append(node.right)
        s.append(node.left)
        node.left, node.right = node.right, node.left

    # RECURSIVE             
    def inverse(root):
        if root is None:
            return
        inverse(root.left)
        inverse(root.right)
        root.left, root.right = root.right, root.left
    inverse(root)

    return root
```

## Maximum depth of binary tree
```python
def maxDepth(self, root: Optional[TreeNode]) -> int:
    # ITERATIVE 
    if root is None:
        return 0
    mxdpth = 0
    s = deque([(root, 1)])
    while s:
        node, depth = s.pop()
        mxdpth = max(mxdpth, depth)
        if node.left:
            s.append((node.left, depth + 1))
        if node.right:
            s.append((node.right, depth + 1))
    return mxdpth

    # RECURSIVE 
    if root is None: return 0
    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

## Diameter of a binary tree
```python
def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
    mxdpth = 0

    # ITERATIVE 
    diam = defaultdict(int, {None: 0})
    s = deque()
    while root or s:
        while root:
            s.append((root, False))
            root = root.left
        root, seen = s.pop()
        if seen:
            l_h, r_h = diam[root.left], diam[root.right]
            diam[root] = 1 + max(l_h, r_h)
            mxdpth = max(mxdpth, l_h + r_h)
            root = None
        else:
            s.append((root, True))
            root = root.right
            
    # RECURSIVE    
    def dfs(node):
        nonlocal mxdpth
        if node is None:
            return 0
        l_h = dfs(node.left)
        r_h = dfs(node.right)
        mxdpth = max(mxdpth, l_h + r_h)
        return 1 + max(l_h, r_h)
    dfs(root)
    
    return mxdpth
```
## Is same tree
```python
def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    # ITERATIVE
    s = deque([(p, q)])
    while s:
        p, q = s.pop()
        if bool(p) ^ bool(q):
            return False
        if p:
            if p.val != q.val:
                return False
            s.append((p.left, q.left))
            s.append((p.right, q.right))
    return True

    # RECURSIVE
    def check(p, q):
        if bool(p) ^ bool(q):
            return False
        if not p:
            return True
        if p.val != q.val:
            return False
        return check(p.left, q.left) and check(p.right, q.right)
    return check(p, q)
```

## Is subtree
```python
def isSubtree(self, root, subRoot) -> bool:
    # ITERATIVE
    def same_tree(p, q):
        s2 = deque([(p.left, q.left), (p.right, q.right)])
        while s2:
            p, q = s2.pop()
            if bool(p) ^ bool(q):
                return False
            if p:
                if p.val != q.val:
                    return False
                s2.append((p.left, q.left))
                s2.append((p.right, q.right))
        return True

    s = deque([(root)])
    while s:
        node = s.pop()
        if node.val == subRoot.val and same_tree(node, subRoot):
            return True
        if l := node.left:
            s.append(l)
        if r := node.right:
            s.append(r)
    return False

    # RECURSIVE 
    def check(p, q):
        if bool(p) ^ bool(q):
            return False
        if p:
            if p.val != q.val:
                return False
            return check(p.left, q.left) and check(p.right, q.right)
        return True

    def same_tree(root, subRoot):
        if check(root, subRoot):
            return True
        if root.left and same_tree(root.left, subRoot):
            return True
        return (root.right and same_tree(root.right, subRoot)
    return same_tree(root, subRoot)
```

## Lowest common ancestor of binary search tree
```python
def lowestCommonAncestor(self, root, p, q) -> "TreeNode":
    # ITERATIVE
    while root:
        if root.val < p.val and root.val < q.val:
            root = root.right
        elif root.val > p.val and root.val > q.val:
            root = root.left
        else:
            return root
    return None

    # RECURSIVE
    def check(node):
        if node.val < p.val and node.val < q.val:
            return check(node.right)
        elif node.val > p.val and node.val > q.val:
            return check(node.left)
        else:
            return node
    return check(root)
```

## Validate binary search tree
```python
def isValidBST(self, root: Optional[TreeNode]) -> bool:
    # ITERATIVE
    s = deque([(root, float('-inf'), float('inf'))])
    while s:
        node, lower, upper = s.pop()
        if node.val <= lower or node.val >= upper:
            return False
        if node.left:
            s.append((node.left, lower, node.val))
        if node.right:
            s.append((node.right, node.val, upper))
    return True

    # RECURSIVE
    def dfs(node, l, r):
        if node is None:
            return True
        if node.val <= l or node.val >= r:
            return False
        return dfs(node.left, l, node.val) and  dfs(node.right, node.val, r)
    return dfs(root, float('-inf'), float('inf'))
```
