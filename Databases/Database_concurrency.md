> [!important]- Metadata
> **Tags:** #Databases #OperatingSystems 
> **Located:** Databases
> **Created:** 03/05/2023 - 12:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Database concurrency
- Multiple systems exist for allowing safe [[Concurrency|concurrency]] on [[Database_transactions|database transactions]]
- Revolves around the use of locks, these can either be:
	- **Shared / read locks**: several of these may be held 
	- **Exclusive / write locks**: only one may be held
	- Revolve around the following three operations:
		` Read_lock(X)   //obtains read lock`
		 `Write_lock(X)   // obtains write lock`
		 `Unlock(X)    // removes any held locks `
		 `No_of_reads(X)   // gets number of reads that are held on this data`
- Locks can also be upgraded / downgraded 
- Locks can be placed on anything from a record to a database. Fine granularity refers to small item lock size, coarse granularity refers to large size
- Fine granularity allows for more flexibility but requires more storage space for lock table 
## Binary locks
- 1 for locked 0 for unlocked, these can very restrictive and do not account for safe concurrency 

```
B: 
if Lock(X) == 0
    then Lock(X)  1
Else
    begin
        wait (until Lock(X) = 0) and lock manager wakes transaction);
        goto B
end;
```

## Read lock
```
While (Lock(X) == Writelocked) 
    sleep();
If (Lock(X) == Unlocked) 
    Lock(X) = Readlocked;
    NoOfReads(X) = 1;
Else if (Lock(X) == Readlocked)
    NoOfReads(X)++
```

## Write lock
```
While (Lock(X) != Unlocked) 
    sleep();
If (Lock(X) == Unlocked)
    Lock(X) = WriteLocked;
```

## Unlock
```
Switch (Lock(X)) 
    case Writelocked:
        Lock(X) = Unlocked; //wake up one of the sleeping transactions, if any
        break;
    case ReadLocked:
        NoOfReads(X)-- ;
        if (NoOrReads(X) == 0)
            Lock(X) = Unlocked; //wake up call to sleepers
        breaks;
```

## Two phase locking
- Guarantees [[Database_transactions#Transaction schedule|serialisability]] if all transactions follow it 
- This is done by completing the lock growing phase before any lock shrinking occurs 

```
Sell()
    read_lock(cb);
    write_lock(cb);
    read_item(currentBalance);
    current_Balance = currentBalance +100,000;
    write_item(currentBalance); 
    unlock(cb);
    unlock(cb);
```


## Database deadlock 
- Deadlocks are a potential risk in databases with multiple concurrent transactions 
- Multiple prevention protocols exist to remedy this

![[Pasted image 20230503123401.png|500|500]]
- Database may include timeouts on transactions, a transaction with a broken lock cannot be committed due to not having a consistent view of its data