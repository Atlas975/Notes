---
aliases: async
---

> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems #Programming #Concurrency
> **Located:** SoftwareEngineering
> **Created:** 26/12/2022 - 09:28
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks)
>    .array().map(p => p.path);
>let paths = new Set(links.
>    filter(p => !p.endsWith(".png"))
>);
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(
>    Array.from(paths))
>    .map(p => [
>        dv.fileLink(p),
>        dv.page(p).file.tags.join("")
>    ])
>    .slice(0, 20)
>);
> ```

___
# Concurrency
- Concurrency describes the process of multiple **loci of communication** (actors/processes/threads) acting over shared resources. While threads can be used to achieve this, concurrent processes can also work through the use of [[Processors#Multiprocessors|Multiprocessors]]
- This is especially prevalent in [[Operating_system_design|OS design]] where shared memory and hardware devices are used for several unique processes 
## Central concepts of concurrency
1. Processor: hardware device executing machine instructions 
2. Program: instruction sequence defining potential execution path 
3. Process: system entity executing associated programs
- The **context switch** causes execution jumps to different parts of memory 
- A threads context comprises of:
1. Program counter (PC): instruction in a program/function that a thread is set to execute 
2. Stack pointer (SP): address at top of threads call stack 
## Context switching sequence

![[Pasted image 20221022124944.png|500|500]]

## Amdahl's law
- Program speedup via concurrency is limited by atomic aspects of a program, the max speedup depending can be represented by Amdahls law, where p is the percentage of a program that can be parallelized eg 95% tops off at 20x speedup  : 

$$\frac{1}{(1-p)}$$

![[Pasted image 20221022114110.png|450|450]]

## Threads
- A thread is an independent locus of communication (a separate flow of execution within a program) following a sequence of instructions with its own program counter 
## Scheduler
- Method of selecting which thread runs from a pool of active threads 

![[Pasted image 20221022104511.png|250|250]]

- This is important as it prevents deadlocks and make sure sure a process is performed only as many times as it's needed. This is challenging as concurrency is inherently non-deterministic 
## Concurrency components
1. Actors 
2. Shared resources 
3. Access rules 

![[Pasted image 20221020154135.png|500|500]]

## Anatomy of a concurrent process
```java
//Instantiate MessagePrinter object for the message
MessagePrinter mp = new MessagePrinter(“Hello world”);
//create a new thread for the MessagePrinter
Thread t = new Thread(mp);
//Start thread
t.start();
// … do other useful things while message prints
```
## Concurrency vs parallelism

![[Pasted image 20221022125124.png|500|500]] processes are always concurrent but not always parallel 

# Shared memory synchronization
- Coordination is needed when accessing critical sections 
- Critical sections are regions of code that access variables that are shared between threads 
- An example of a problem that can arise without proper coordination is the lost update problem:
- The synchronized signature also prevents a thread from accessing other methods in the class with the synchronized signature 

![[Pasted image 20221022105807.png|450|450]]this is an example of a race condition 

## Race condition
- Condition where incorrect program output may have been generated depending on instruction order from multiple threads 
## Atomic code
- Code that is executed indivisibly from that of other threads trying to execute the same code
- One way to avoid race conditions is to make critical sections atomic 
- This can also be achieved with **mutual exclusion** which ensures only one thread can access a critical section at a time, in  [[Java_language]] this is done by adding the synchronized signature to a method 
- **Locks** are also a mechanism for ensuring mutual exclusion 
- Example without race condition: 

```java
public class Bank_account {
    private int bal = 0;
    public void Bank_account(int start_balance)
    {
        bal = start_balance;
    }
    public synchronized void update(int amount)
    {
        bal = balance + amount;
    }
}
```
- Internal lock process when synchronized: 

![[Pasted image 20221022111955.png|500|500]]

- note that the jvm shares one heap between all threads, but each thread has its own java stack

## Safe concurrency
- No shared data / communication between threads 

![[Pasted image 20221022114139.png|300|300]]

- Use of only read-only (constant) data 

![[Pasted image 20221022114339.png|300|300]]

## Risky concurrency
- Threads use shared resources without mutual exclusion 

![[Pasted image 20221022114244.png|300|300]]

- Use of a thread that modifies shared resources while others read from it 

![[Pasted image 20221022114309.png|300|300]]

# Semaphores
- Locks only allow one thread at a time to access a resource, semaphores let in multiple while still restricting this number. For instance having 3 shared booth resources between 5 people 
- Having a single semaphore is equivalent to using a lock
- Example semaphore java usage 

```java
public class Vaccination {
    public static void main(String[] args) {
    
        Semaphore v = new Semaphore(3);
        Thread[] threads = new Thread[20];
        
        for(Thread th: threads) {
            th = new Thread(new Person(v));
            th.start();
        }
    }
}

class Person implements Runnable {
    Semaphore v;
    
    Person(Semaphore v) {
        this.v=v;
    }
 
    public void run(){
        v.acquire();
        System.out.println("Getting vaccinated!");
        v.release();
    }
}
```

## Semaphore API
```java
wait() 
// suspends calling thread, can only be used in synced blocks and releases L 
notify()
// takes a thread from wait and makes it runnable, must still obtain L
```
- Example of thread that waits for a thread to release before running, if the check loop is not present the thread will terminate without a semaphore 

```java
public class Semaphore {
    private int count = 0;
    
    public Semaphore(int init_val)
    {
        count = init_val;
    }
    
    public synchronized void acquire()
    {
        while() {
            if (count > 0) {count = count--; break;}
            else wait();
        }
    }
    
    public synchronized void release()
    {
        count = count + 1;
        notify();
    }
}
```

# Signaling
- Signaling ensures that a consumer thread does not consume prior to a producer threads run`
- **Bound buffers** help with the producer consumer problem, preventing values from being read twice and ensuring mutual exclusion of writer threads. 
## Producer consumer problem
- Single producer, single consumer, values should be read once and only after a producer write
```java
public class ProducerConsumerUnitBuffer {
    public static void main(String[] args) {
        Semaphore produce = new Semaphore(1);
        Semaphore consume = new Semaphore(0);
        StringBuffer buf = new StringBuffer();
        new Thread(new Producer(produce, consume, buf)).start();
        new Thread(new Consumer(produce, consume, buf)).start();}
    }
}

// PRODUCER RUN
public void run() {
    while(true) {
        produce.acquire();
        buf.delete(0,buf.length());
        buf.append(System.currentTimeMillis());
        consume.release();
    }
}

// CONSUMER RUN 
public void run() {
    while(true) {
        consume.acquire();
        buf.put("Job ID:" + System.currentTimeMillis());
        produce.release();
    }
}
```

- Buffers may also be of variable size, several producers and consumers bounded by buffers

![[Pasted image 20221025161709.png|450|450]]

```java
public class ProducerConsumer {
    public static void main(String[] args) {
        Buffer buf = new Buffer(5);         //Size of buffer is 5
        Semaphore produce = new Semaphore(5);
        Semaphore consume = new Semaphore(0);
        for(int i=0;i<2;i++) {
            new Thread(new Producer(produce, consume, buf)).start();
            new Thread(new Consumer(produce, consume, buf)).start();
        }
    }
}
```


## Reader writer problem
- A buffer that holds a single value with several threads accessing it at once, only one writer thread may be active at a time but multiple write threads can be active concurrently 
- Unlike the [[#Producer consumer problem]] , read operations must have exclusive access to the buffer at all times

![[Pasted image 20221025161527.png|450|450]]
![[Pasted image 20221107143504.png|500|500]]

- General reader - writer pattern:

```java
public class ReaderWriter {
    public static int numReaders = 0;
    public static void main(String[] args) {
        Semaphore write = new Semaphore(1);
        Semaphore read = new Semaphore(1);
        StringBuffer buf = new StringBuffer("Initial");
        for(int i=0;i<2;i++) {
            new Thread(new Reader(write, read, buf)).start();
            new Thread(new Writer(write, read, buf)).start();}
    }
}

// WRITER 
public void run() {
    while(true) {
        write.acquire();
        buf.put("Current system time is" + System.currentTimeMillis());
        write.release();
    }
}

// READER 
public void run() {
    while(true) {
        read.acquire();
        ReaderWriter.numReaders++;
        if(1==ReaderWriter.numReaders) // self if FIRST reader
            write.acquire();    
        read.release();
        
        // let other readers run while working
        System.out.println(this + "read:" + buf); 

        read.acquire();       
        ReaderWriter.numReaders--;
        if(0==ReaderWriter.numReaders) // self is LAST reader
            write.release();
        read.release();
    }
}
```

# Dynamic thread barriers
## Countdown latch
- Specifies a set number of tasks to be completed before a thread waiting on a latch can proceed, note the thread decrementing the latch can still be active

```java
public class Driver {
    CountDownLatch latch = new CountDownLatch(4);
    
    Worker first = new Worker(1000, latch);
    Worker second = new Worker(2000, latch);
    Worker third = new Worker(3000, latch);

    first.start();
    second.start();
    third.start();

    latch.await();

    System.out.println("Main has finished");
}

public void run() {
    try {
        Thread.sleep(delay);
        latch.countDown();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    System.out.println("Finished");
}
```
## Cyclic barrier
- Gives threads a common barrier point before more threads can continue, this can optionally take in another thread to run as soon as the barrier point is reached 

```java
public class Driver {
    CyclicBarrier latch = new CyclicBarrier(3, new BarrierFinish();

    Worker first = new Worker(1000, latch,"WORKER-1");
    Worker second = new Worker(2000, latch,"WORKER-2");
    Worker third = new Worker(3000, latch,"WORKER-3");

    first.start();
    second.start();
    third.start();

    Worker fourth = new Worker(4000, latch,"WORKER-4");
    Worker fifth = new Worker(5000, latch,"WORKER-5");
    Worker sixth = new Worker(6000, latch,"WORKER-6");

    fourth.start();
    fifth.start();
    sixth.start();
}

public class BarrierFinish extends Thread{
    public void run(){
        System.out.println("Barrier point reached");
    }
}

// worker run
public void run() {
    try {
        Thread.sleep(delay);
        int other_threads = barrier.getParties() - barrier.getNumberWaiting() - 1;
        System.out.println("Waiting for " + other_threads + " more threads to reach barrier");
        barrier.await();
    } catch (InterruptedException e) {
        e.printStackTrace();
    } catch (BrokenBarrierException e) {
        e.printStackTrace();
    }
    System.out.println(Thread.currentThread().getName() + " finished");
}
```
# Spinlocks
- Rather than using synchronized code, spinlocks offer an alternative approach that can potentially be faster but is less CPU efficient 
- Spinlocks repeatedly check for availability of a lock before entering critical code, however with this method critical sections are not accessed atomically
## Test and set method
```java
boolean test_and_set(boolean *target)
{
    boolean orig_val = *target;
    *target = TRUE;
    return orig_val;
}


void get_lock (boolean *lk)
{
    while(test_and_set(lk) == true); // wait
}
void release_lock(boolean *lk)
{
    *lk = false; //Let someone claim lock
}
```

## Peterson's algorithm
- Only works on 2 thread but can be generalized to n threads 
```java
int tiebreak = 0; /* shared variable */
bool[] interested = {FALSE, FALSE}; /* shared variable */

void get_lock() {
    int self = thread_getid();
    int other = 1 - self;
    interested[self] = TRUE;
    tiebreak = other;
    while(interested[other] && tiebreak == other) ; /* spin */
}
void release_lock() {
    int self = thread_getid()
    interested[self] = FALSE;
}
```

![[Pasted image 20221027132657.png|450|450]]

## Blocking vs Spinlocks

![[Pasted image 20221027133022.png|450|450]]

- Join ensures a thread does not run until another thread terminates 
- Count down latches are initialized with a number of tasks

# Concurrency pitfalls

## Deadlocks
- A deadlock describes a situation in which a processes cannot progress due to waiting on a shared synchronised resource currently held by another thread.
- Ways of combating this include:

![[Pasted image 20221101164743.png|450|450]]

1. Program design so circular waits are impossible (impose total ordering)
2. Prove formally a program is deadlock free 
3. Detect deadlock at runtime 
- Example of threads requiring the same resources, results is resource starvation

![[Pasted image 20221101160843.png|450|450]]

## Livelocks
- Instead of terminating deadlocked threads, processes repeat cyclically until a thread is able to run without resulting in a deadlock.
- This raises complications if a process is already underway when is restarts, starvation may also occur if one thread consistently beats out another thread for a required resource 
- Fair scheduling may often be required to ensure a thread does not starve in a livelock, see the dining  philosophers problem

![[Pasted image 20221104170117.png|450|450]]

# Asynchronous vs multi-threaded programs
- In general, async is better suited for I/O-bound and network-bound tasks, while multithreading is better suited for CPU-bound tasks. 
- Using async can reduce the amount of blocking in the main thread and increase the overall responsiveness of the program.
## Multi-threading use
- Multi threading is a traditional concurrency model that works by creating multiple threads that run in parallel and share access to the same memory space. 
- When one thread blocks or encounters a long-running task, other threads can continue to run and make progress. 
- The threads communicate with each other through shared variables and synchronization mechanisms such as mutexes and semaphores.
## Asynchronous use
- Asynchronous programming is a more recent concurrency model that uses a different approach based on cooperative multitasking. 
- Instead of relying on the operating system to schedule multiple threads, async relies on each task yielding control to the next task when it's not making progress. 
- This cooperative multitasking model is more lightweight than multithreading and can reduce the overhead associated with creating, managing, and switching between multiple threads.




```dataviewjs
const degree = 3; // specify the degree of links

let inLin = new Set(dv.current().file.inlinks);
for (let i = 0; i < degree; i++) {
    inLin = new Set([...inLin].flatMap(x => [...dv.page(x).file.inlinks]));
}

inLin = [...new Set([...inLin].map(x => x.path))].map(x => dv.fileLink(x))
dv.table([`${degree}-degree links`], inLin.map(x => [x]));
```

> [!important]- Metadata
> **Tags:** #
> **Located:** SoftwareEngineering
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Concurrency
<% tp.file.cursor(2) %>