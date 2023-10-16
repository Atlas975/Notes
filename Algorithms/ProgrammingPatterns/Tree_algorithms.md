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
    if root is None:
        return 0

    # ITERATIVE 
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
            lh, rh = diam[root.left], diam[root.right]
            diam[root] = 1 + max(lh, rh)
            mxdpth = max(mxdpth, lh + rh)
            root = None
        else:
            s.append((root, True))
            root = root.right
            
    # RECURSIVE    
    def dfs(node):
        nonlocal mxdpth
        if node is None:
            return 0
        lh, rh = dfs(node.left), dfs(node.right)
        mxdpth = max(mxdpth, lh + rh)
        return 1 + max(lh, rh)
    dfs(root)
    
    return mxdpth
```
## Number of good leaf nodes pairs 
```python
def countPairs(self, root: TreeNode, distance: int) -> int:
    self.res = 0

    def dfs(x):
        if not x.left and not x.right:  # is leaf node
            return {1: 1}
        l = dfs(x.left) if x.left else {}
        r = dfs(x.right) if x.right else {}

        if l and r:  # distinct leaf nodes to join
            for (d1, cnt1), (d2, cnt2) in product(l.items(), r.items()):
                if d1 + d2 <= distance:
                    self.res += cnt1 * cnt2

        distmp = defaultdict(int)  # all leaf ditances added by 1
        for d, cnt in chain(l.items(), r.items()):
            if d + 1 <= distance:
                distmp[d + 1] += cnt
        return distmp

    dfs(root)
    return self.res
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
        return node
    return check(root)
```
## Binary tree right side view 
```python
def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    res = []

    # RECURSIVE
    def r_search(node, level):
        if node is None:
            return
        if level == len(res):
            res.append(node.val)
        r_search(node.right, level + 1) # right first
        r_search(node.left, level + 1)
    r_search(root, 0)
    return res

    # ITERATIVE
    if root is None:
        return []
    q = deque([root])
    while q:
        for node in (q.popleft() for _ in range(len(q) - 1)): 
            q.append(node.left) if node.left else None
            q.append(node.right) if node.right else None
        rightSide = q.popleft()
        q.append(rightSide.left) if rightSide.left else None
        q.append(rightSide.right) if rightSide.right else None
        res.append(rightSide.val)
    return res
```
## Count good nodes in binary tree 
```python
def goodNodes(self, root: TreeNode) -> int:
    def dfs(node, maxVal):
        if node is None:
            return 0
        if node.val >= maxVal:
            return 1 + dfs(node.left, node.val) + dfs(node.right, node.val)
        return dfs(node.left, maxVal) + dfs(node.right, maxVal)
        
    return dfs(root, float('-inf'))
```
## Validate binary search tree
```python
def isValidBST(self, root: Optional[TreeNode]) -> bool:
    s = deque([(root, float('-inf'), float('inf'))])
    while s:
        node, l, r = s.pop()
        if node.val <= l or node.val >= r:
            return False
        if node.left:
            s.append((node.left, l, node.val))
        if node.right:
            s.append((node.right, node.val, r))
    return True
```

## Kth smallest element in BST 
```python
def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
    # ITERATIVE
    s = deque([root])
    cur = root
    while s or cur:
        while cur:
            s.append(cur)
            cur = cur.left
        cur = s.pop()
        k -= 1
        if k == 0:
            return cur.val
        cur = cur.right
    return -1
    
    # RECURSIVE
    self.k = k
    self.res = -1 

    def inorder(node) -> None:
        if node is None:
            return
        inorder(node.left)
        self.k -= 1
        if self.k == 0:
            self.res = node.val
            return
        inorder(node.right)
    inorder(root)
    return self.res
```

## Construct binary tree from preorder and inorder traversal 
```python
def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    preorder = deque(preorder)
    inmap = {val: i for i, val in enumerate(inorder)}

    def build(l, r):
        if l > r:  # no nodes to left or right
            return None
        root = TreeNode(preorder.popleft())
        inloc = inmap[root.val] # index of root in inorder
        root.left, root.right = build(l, inloc - 1), build(inloc + 1, r)
        return root
    return build(0, len(inorder) - 1)
```
## Binary tree maximum path sum 
```python
def maxPathSum(self, root: Optional[TreeNode]) -> int:
    # RECURSIVE
    def dfs(node):
        if node is None:
            return 0
        lgain = lgain if (lgain := dfs(node.left)) > 0 else 0
        rgain = rgain if (rgain := dfs(node.right)) > 0 else 0
        self.mxsum = max(self.mxsum, lgain + node.val + rgain)
        return max(lgain, rgain) + node.val

    self.mxsum = root.val
    dfs(root)
    return self.mxsum
    
    # ITERATIVE
    mxpath = float("-inf")
    gainmp = {}
    s = deque([(root, False)])

    while root or s:
        while root:
            s.append((root, False))
            root = root.left
        root, seen = s.pop()
        if not seen:
            s.append((root, True))
            root = root.right
            continue
        lgain = max(0, gainmp[root.left]) if root.left else 0
        rgain = max(0, gainmp[root.right]) if root.right else 0
        mxpath = max(mxpath, lgain + root.val + rgain)
        gainmp[root] = max(lgain, rgain) + root.val
        root = None
    return mxpath

    # RECUSIVE NO GLOBAL
    def dfs(node):
        if node is None:
            return 0, float("-inf")
        lgain, lsum = dfs(node.left)
        rgain, rsum = dfs(node.right)

        mxsum = max(lsum, rsum, lgain + node.val + rgain)
        mxgain = max(lgain, rgain) + node.val
        return max(0, mxgain), mxsum
    return dfs(root)[1]
```

## Serialise and deserialise binary tree 
```python
def serialize(self, root):
    res = []
    def postord(node):
        if node is None:
            res.append("#")
            return
        res.append(str(node.val))
        postord(node.left)
        postord(node.right)

    postord(root)
    return ",".join(res)

def deserialize(self, data):
    def postord(serial):
        val = next(serial)
        if val == "#":
            return None
        node = TreeNode(int(val))
        node.left = postord(serial)
        node.right = postord(serial)
        return node

    return postord(iter(data.split(",")))
```

## Collect coins in a tree
```python
def collectTheCoins(self, coins: List[int], edges: List[List[int]]) -> int:
    n = len(coins)
    tree = [set() for _ in range(n)]
    for u, v in edges:
        tree[u].add(v)
        tree[v].add(u)

    q = deque()
    for u in range(n):
        while len(tree[u]) == 1 and coins[u] == 0: # remove leaf with no coin
            v = tree[u].pop()
            tree[v].remove(u)
            u = v
        if len(tree[u]) == 1:
            q.append(u)

    for _ in range(2):  # at most dist 2 to collect coins
        for u in (q.popleft() for _ in range(len(q))):
            if tree[u]: # connection may be removed in previous iteration
                v = tree[u].pop()
                tree[v].remove(u)
                if len(tree[v]) == 1:
                    q.append(v)
    return sum(len(ecnt) for ecnt in tree) # traveral cost to and from
```