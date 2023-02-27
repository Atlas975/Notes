

# Java_language
created: 2022-10-24 13:45
#Programming 
---
# Java types
![[Pasted image 20221123145936.png|800|700]]
## Check memory usage 

```java
Runtime runtime = Runtime.getRuntime();
long usedMemoryBefore = runtime.totalMemory() - runtime.freeMemory();
System.out.println("Used Memory before" + usedMemoryBefore);
    // working code here
long usedMemoryAfter = runtime.totalMemory() - runtime.freeMemory();
System.out.println("Memory increased:" + (usedMemoryAfter-usedMemoryBefore));
```


 
