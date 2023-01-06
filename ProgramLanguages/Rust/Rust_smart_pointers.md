
# Rust_smart_pointers
#Programming    created: 2022-12-25 09:17

---
## Box 

## Rc
- **Automatic deallocation**
- 






[](<Box: You should use Box when you want to store a value on the heap and have a single owner of the value. Box allows you to store values that are too large to fit on the stack, or values that have an unknown size at compile time. Box is also useful when you want to store a value in a data structure and have the value implement a trait.

Rc: You should use Rc (reference counted) when you want to store a value in a data structure and have multiple owners of the value. Rc allows multiple owners to share the same value, and it will automatically deallocate the value when all owners are no longer using it. Rc is useful when you need to share a value between multiple parts of your code, but you don't want to take ownership of the value.

Arc: You should use Arc (atomic reference counted) when you want to store a value in a data structure and have multiple owners of the value, and you also need to share the value between multiple threads. Arc is similar to Rc, but it uses atomic operations to ensure thread safety.

Cell: You should use Cell when you want to store a value in a smart pointer and allow the value to be borrowed while it is being mutated. Cell uses a technique called "interior mutability" to allow you to mutate the value indirectly, by borrowing a pointer to the value rather than the value itself. Cell is useful when you know that you will only ever need one mutable reference to a value, and you want to allow the value to be borrowed while it is being mutated.

RefCell: You should use RefCell when you want to store a value in a smart pointer and allow multiple owners or multiple mutable references to the value, using runtime borrow checking to ensure that the value is not borrowed simultaneously. RefCell is useful when you need to allow multiple owners or multiple mutable references to a value, but you cannot guarantee at compile time that the value will not be borrowed simultaneously.>)