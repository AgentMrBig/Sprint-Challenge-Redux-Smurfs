1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Answer:
        array.map(), 
        array.slice(),
        array.concat()
        Object.create() creates a new object and allows overriding properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Answer:
    Actions are payloads of information that send data from your application to your store. They are the ONLY source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store. Actions only describe what happend, but dont describe how the application's state changes. The store is the object that holds the "state" of the application, allows access to state via getState(), allows state to be updated via dispatch(action), registers listeners via subscribe(listener), handles unregistering of listeners via the function returned by subscribe(listener). There is only one store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.
     
2.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Answer:
        Application state is the state of the entire application while Component state is refering to components which track state their for their lifetime. Data should be stored in the store if it is needed to persist in many parts across several components. An example of when to use component state is in a search form that takes in a search term, stores that in local state and compares local state to application store.

3.  What is middleware?
    Answer:
        Middleware generally refers to software services that "glue together" separate features in existing software. For Redux, middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer: [ Action ] <-> [ Middleware ] <-> [ Dispatcher ]

4.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Answer:
        Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certian condition is met. The inner function recieves the store methods dispatch and getState() as parameters.

5.  Which `react-redux` method links up our `components` with our `redux store`?
    Answer:
        connect()
