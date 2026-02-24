1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 

(i) getElementByID : Selects one element by its unique ID. It returns a single element object.

(ii) getElementsByClassName : Selects all elements with a given class name. It returns an HTMLCollection.

(iii) querySelector : Selects the first element that matches a CSS selector . It returns the first matching element.

(iv) querySelectorAll : Selects all elements matching a CSS selector. It returns a NodeList.


2. How do you create and insert a new element into the DOM?

Answer:

First we have to create the element. Like,
const newDiv = document.createElement("div);

Then we have to add content or attribute.
newDiv.innerHTML = "<h1>Hello World</h1>";

And finally we have to insert it into the DOM using append()
document.body.append(newDiv);


3. What is Event Bubbling? And how does it work?

Answer:

Event Bubbling is a behavior in the DOM where an event starts at the target element and then propagates upward through its ancestors.

The DOM is structured like a tree. document->HTML->body->div->button . If a user clicks the button, the event doesn't stay there. After being handled at the button, it bubbles upward through its ancestors. Then the above structure will become: button->div->body->HTML->document .


4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event delegation is a technique in JavaScript where we can attach a single event listener to a parent element to handle events for its child elements. 

It is useful because-
-Uses less memory.
-Reduces setup time.
-More efficient.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

(i) preventDefault() : Prevents the default action that the browser would normally perform for an event. It doesn't stop the event from bubbling.

(ii) stopPropagation() : Stops the event from bubbling furher along the DOM tree. Other ancestors will not receive the event.


