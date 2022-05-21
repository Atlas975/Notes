# Run on Terminal
[[Linux]]
```
javac anyFile.java
java anyFile.java
```
- to compile all
```
javac *.java
```
# Shuffle Array
```
Collections.shuffle(Arrays.asList(array))
```
# Javadoc
- Common method of java documentation
- Example 
 >![[Pasted image 20220131153824.png]]
 Documentation creation command:
 
 ```
  javadoc –d doc *.java 
```

 
 # Pausing program
```
import java.lang.Thread;
Thread.sleep(1);   // Note that this is in milliseconds
```

# Multithreading
- Allows for parallel processing
```
public class Collide_sim {  
 	public static void main(String args[]){    
 		for(int i=0; i<10; i++){  
            Movement test=new Movement(i);  
 			test.start();  
 		}  
  
 }
```

```
public class Movement extends Thread {  
	private int threadNum;  
	public Movement(int num){  
    	this.threadNum=num;  
	}
    @Override  
 	public void run(){  
        for(int i=1; i<10; i++){  
            System.out.println(i+" thread num "+threadNum);  
 			try {  
         		Thread.sleep(1000);  
 			} catch (InterruptedException e) {  
                e.printStackTrace();  
 			}  
        }  
    }  
}
```