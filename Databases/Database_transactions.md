> [!important]- Metadata
> **Tags:** #Databases 
> **Located:** Databases
> **Created:** 03/05/2023 - 11:03
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Database transactions
- A transaction is the smallest logical unit of [[Database_systems|database]] processing that includes one or more access operations. Important to consider in [[Concurrency|concurrency]]
- Can also have their scope specified manually through `BEGIN transaction` and `END transaction  `
- Transaction states: 

![[Pasted image 20230503111554.png|500|500]]

## Transaction ACID properties
- Describes the ideal properties of an ideal database transaction, these act as a concurrency control mechanism. A transaction should be:
- **Atomic**: the smallest unit of processing, should be all or nothing  
- **Consistent**: database [[Database_constraints#Integrity constraints|integrity]] should be maintained upon a transaction completion 
- **Isolated**: should not interfere with other transaction running concurrently ie no [[Concurrency#Race condition|race conditions]]
- **Durable**: changes should be persistent, not being lost due to any external failure
## SQL transactions
- [[SQL_language|SQL]] transaction syntax 
	-  ` BEGIN transaction` – marks the beginning of a transaction
	- `READ or WRITE `– file reading/writing operations
	 - `END transaction` – marks the end of transaction execution, all read/write operations within the transaction have ended. 
		-  At this point it may be necessary to check that changes can be permanently applied to the database or whether the changes need to be aborted.
	- `COMMIT transaction` – Signals successful completion, allows changes to be safely written 
	- `ROLLBACK or ABORT` – Signals unsuccessful completion, causes written changes to be undone

## Database concurrency risks
- **Lost update problem**: when a [[Concurrency#Race condition|race condition]] occurs

![[Pasted image 20230503112809.png|500|500]]
-  **Temporary update problem**: when a 'dirty read' occurs due to another transaction reading data that has been rolled back. Similar to the [[Concurrency#Reader writer problem|reader writer problem]]

![[Pasted image 20230503113025.png|500|500]]

- **Incorrect summary problem**: when a transaction is reading while another is writing. This occurs if write lock isn't put in place to block any concurrent reads

![[Pasted image 20230503113659.png|500|500]]

## Transaction failure causes
- **System crash**: hardware / software / [[Network_architecture|network]] error during execution 
- **System error**: error in transaction operation ie int overflow, arithmetic error, interrupted by user
- **Concurrency control**: may force transaction abort if it risks a [[Concurrency#Deadlocks|deadlock]]
- **Disk failure**: read/write malfunction ay cause physical data loss during transaction
- **Physical failure**: power / human failure

## System logs
- Used to recover from failures, holds transaction operation history. This is held on disk
- Ideally kept separate from [[Operating_system_design|OS]] and [[Database_systems|database]] files, vital for recovery

![[Pasted image 20230503114755.png|550|550]]
- All permanent changes kept within the system log
- The log is also vital in recovering from aborted transactions, this is done by taking a bottom up approach, reverting write operations that aren't part of a full commit
- Successful transactions are marked in the log as `[commit, T]`
- System failures can be found by looking for `[start_transactions]` without a matching `[commit]`

### Transaction schedule 
- Describes the order that transaction operations occur
- Interleaved schedules like the one below are known as **non serial**, these should always have the same result regardless of how many times another concurrent transaction is interrupted

![[Pasted image 20230503120154.png|500|500]]