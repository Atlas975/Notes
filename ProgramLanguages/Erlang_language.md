> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages
> **Created:** 26/12/2022 - 03:56
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Erlang language
- Erlang is an example of a [[Functional_programming|functional programming language ]]
## Erlang delimiters
- **; (semicolons)** can be taught of as logical OR
- **,(commas)** can be taught of as logical AND
- **.(period)** can be taught of as END

````ad-example
```erlang
foo(X) when X > 0; X < 7 ->
    Y = X * 2,
    case Y of
        12 -> bar;
        _  -> ok
    end;
foo(0) -> zero.

% READS AS:

foo(X) when X > 0 *OR* X < 7 ->
    Y = X * 2 *AND*
    case Y of
        12 -> bar *OR*
        _  -> ok
    end *OR*
foo(0) -> zero *END*
````
## Erlang atoms
- Constant literals that evaluate to themselves
- Always start with **lower case letter**
## Erlang tuples
- Identified by curly braces {}
- Multiple possible types and any length
- setelement() returns a new tuple as these are immutable
## Erlang strings
- Handled as list of characters

![[Pasted image 20221213140846.png|450]]

```erlang
"AAA" =:= [$A,$A,$A]. % True
```
## Erlang modules (file execution)
- Modules correspond directly to files
- Starts with module definition, followed by functions and their **arity**(number of arguments)

![[Pasted image 20221118133528.png|550|550]]

- Running a file can be done with the compile command (C) which creates a .beam file as its compilation target

````ad-example
```erlang
-module(hello_world).
-export([start/0]).

start() ->
    io:format("Hello, world!~n").

---

❯ erl
Erlang/OTP 25 [erts-13.1.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [jit:ns]

Eshell V13.1.2  (abort with ^G)
1> c(hello_world).
{ok,hello_world}
2> hello:start().
** exception error: undefined function hello:start/0
3> hello_world:start().
Hello, world!
ok
````
## Function currying
- Function order follows a procedural style

![[Pasted image 20221118133728.png|550|550]]
## Erlang operators 

![[Pasted image 20221214091859.png|500|500]]

# Erlang lists 
## List indexing
- Erlang lists are **1 idexed**
```erlang
L = [1,2,3,4,5,6,7,8,9,10],
lists.nth(2, L) % 2
```
## List comprehension 
- Note that filters are applied before modifications to the resulting list
```ad-example
```erlang
% modify
add_one(L) ->
    [X + 1 || X <- L].

% filter
all_evens(L) ->
    [X || X <- L, X rem 2 =:= 0].

main() ->
    L = [1,2,3,4,5,6,7,8,9,10],
    io:format("List comp test: ~p~n", [add_one(L)]),
    io:format("List comp test: ~p~n", [all_evens(L)]).

% List comp test: [2,3,4,5,6,7,8,9,10,11]
% List comp test: [2,4,6,8,10]
```

## List slicing 
- Includes start and end index positions in slice 

```ad-example
```erlang
lists:sublist([1,2,3,4,5], 1, 3).   %returns [1,2,3]
```
## List append 
```erlang
1> lists:append([1,2,3,4,5], [6,7]).
[1,2,3,4,5,6,7]

2> [1,2,3,4,5] ++ [6,7]. 
[1,2,3,4,5,6,7]

3> [1|[2,3,4,5,6,7]].
[1,2,3,4,5,6,7]
```



# Erlang concurrency 
- Erlang [[Concurrency]] done  done through message passing
- Message asynchronous, see [[BSPL]]
- Each process has a queue for incoming messages 
    - **flush()** is a shell function to get those messages (it removes the messages from the shell).

```erlang
-module(multithread).
-export([main/0]).
report_recieve() ->
    receive % waits for one message
        X -> io:format("Received ~p~n", [X])
    end.

main() ->
    Pid = spawn(fun() -> report_recieve() end),
	Pid ! 1,
	Pid ! 2,
	Pid ! 3.
% output: Received 1
```