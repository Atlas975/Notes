> [!important|inIL]- Metadata
> **Tags:** #ProgrammingPatterns 
> **Located:** Algorithms/ProgrammingPatterns
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Linked list traversal
## Reverse linked list
```python
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    pre = None
    while head:
        tmp = head.next
        head.next = pre
        pre = head
        head = tmp
    return pre
```
## Floyd's cycle detection
```python
def hasCycle(self, head: Optional[ListNode]) -> bool:
    slw, fst = head, head.next
    while (slw != fst) and (fst and fst.next):
        slw, fst = slw.next, fst.next.next
    return slw == fst
```

## Find middle of linked list
```python
def listMiddle(self, head: Optional[ListNode]) -> None:
    slw, fst = head, head.next
    while fst and fst.next:  # if odd, slw stops at larger half
        slw = slw.next
        fst = fst.next.next
```

# Linked list algorithms 
## Merge two sorted lists
```python
def mergeTwoLists(self, list1, list2) -> Optional[ListNode]:

    if not list1 or not list2:
        return list1 or list2
    dmy = curr = ListNode()

    while list1 or list2:
        l1val = list1.val if list1 else float("inf")
        l2val = list2.val if list2 else float("inf")

        if l1val < l2val:
            curr.next = list1
            curr = curr.next
            list1 = list1.next
        else:
            curr.next = list2
            curr = curr.next
            list2 = list2.next

    return dmy.next
```
## Reorder list
```python
def reorderList(self, head: Optional[ListNode]) -> None:
    slw, fst = head, head.next
    while fst and fst.next:  # find middle
        slw = slw.next
        fst = fst.next.next
    
    curr = slw.next
    fsthead = slw.next = None
    while curr:  # reverse second half
        nex = curr.next
        curr.next = fsthead
        fsthead = curr
        curr = nex
    
    while fsthead:  # merge
        nex1, nex2 = head.next, fsthead.next
        head.next, fsthead.next = fsthead, nex1
        head, fsthead = nex1, nex2
```
## Remove Nth node from end of list
```python
def removeNthFromEnd(self, head, n) -> Optional[ListNode]:
    dum = ListNode(next=head)
    l, r = dum, head
    
    for _ in range(n):
        r = r.next
    while r:
        l, r = l.next, r.next
    
    l.next = l.next.next
    return dum.next
```

## Copy list with random pointer 
```python
def copyRandomList(self, head: "Optional[Node]") -> "Optional[Node]":
    if not head:
        return None
    tmp, clonemp = head, {}
    getClone = lambda k: clonemp.setdefault(k, Node(k.val)) if k else None

    while tmp:
        clonemp[tmp] = getClone(tmp)
        clonemp[tmp].next = getClone(tmp.next)
        clonemp[tmp].random = getClone(tmp.random)
        tmp = tmp.next

    return clonemp[head]
```

## Add two numbers 
```python
def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode])
    carry = 0
    head = dmy = ListNode()

    while l1 and l2:
        carry += l1.val + l2.val
        dmy.next = ListNode(carry % 10)
        l1, l2, dmy = l1.next, l2.next, dmy.next
        carry //= 10

    while l1:
        carry += l1.val
        dmy.next = ListNode(carry % 10)
        l1, dmy = l1.next, dmy.next
        carry //= 10
    while l2:
        carry += l2.val
        dmy.next = ListNode(carry % 10)
        l2, dmy = l2.next, dmy.next
        carry //= 10
    if carry:
        dmy.next = ListNode(carry)

    return head.next
```

## Find duplicate number 
```python
def findDuplicate(self, nums: List[int]) -> int:
    slw, fst = nums[0], nums[nums[0]]
    while (slw != fst):
        slw, fst = nums[slw], nums[nums[fst]]

    slw2 = 0
    while (slw != slw2):
        slw, slw2 = nums[slw], nums[slw2]
    return slw
```
## LRU cache 
- An [[LRU]] cache makes use of a doubly linked list 
- This allows for quick access for the front element while appending from the back
## Merge K-sorted lists

```python
def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    # Min-heap solution
    pq = [(ll.val, i, ll) for i, ll in enumerate(filter(None, lists))]
    heapq.heapify(pq)

    dmy = cur = ListNode()
    while pq:
        _, i, ll = heapq.heappop(pq)
        cur.next, cur = ll, ll
        if post := ll.next:
            heapq.heappush(pq, (post.val, i, post))
    return dmy.next

    # Merge-sort solution
    def merge(l1, l2):
        dmy = cur = ListNode()
        while l1 and l2:
            if l1.val < l2.val:
                cur.next = l1
                l1 = l1.next
            else:
                cur.next = l2
                l2 = l2.next
            cur = cur.next
        if l1:
            cur.next = l1
        elif l2:
            cur.next = l2
        return dmy.next

    while (n := len(lists)) > 1:
        rem = n % 2
        for i in range(0, n - rem, 2):
            lists[i // 2] = merge(lists[i], lists[i + 1])
        if rem:
            lists[n // 2] = lists[-1]
        lists = lists[: n // 2 + rem]
    return lists[0] if lists else None

```

## Reverse nodes in K-groups
```python
def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
    tailpre = dmy = ListNode(next=head)
    def getKth(cur, k) -> ListNode:
        for _ in range(k):
            if not cur:
                return None
            cur = cur.next
        return cur

    while kth := getKth(tailpre, k):
        cur, prev = tailpre.next, kth.next # head of group, tail of next group
        for _ in range(k): # k nodes in group to reverse
            cur.next, cur, prev = prev, cur.next, cur
        tailpre.next, tailpre = kth, tailpre.next # connect prev group to old tail 
    return dmy.next
```