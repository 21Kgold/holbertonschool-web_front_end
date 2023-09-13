# JQuery advanced

## Description

The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. There are lots of other JavaScript libraries out there, but jQuery is probably the most popular, and also the most extendable. With jQuery you select (query) HTML elements and perform "actions" on them. Basic syntax is: $(selector).action()
A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements. jQuery uses CSS syntax to select elements.
A jQuery action() to be performed on the element(s)

This project explores the following jQuery features:
* Load jQuery from a CDN
* Different ways to create DOM elements with jQuery
* Add and modify elements
* Add click handlers on elements
* Send GET, POST, DELETE or any type of AJAX query with jQuery
* Create a pagination

---

### [0. Setup your dev environment](./0-index.html)

There are several ways to start using jQuery on your web site. You can download the jQuery library from jQuery.com or if you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network). Both versions can be downloaded from jQuery.com.

All jQuery methods, are inside a document ready event:
$(function(){
  // jQuery methods go here...
});
This is to prevent any jQuery code from running before the document is finished loading (is ready), that can cause actions to fail.

When the jQuery library is successfully loaded, it creates a global variable called jQuery or $ (shorthand). This variable is an object that contains a variety of useful functions and methods. So by using typeof jQuery === 'undefined' , we can conditionally execute code based on whether jQuery is loaded or not.

* Load the latest version of JQuery CDN from code.jquery.com, then run code that prints a message (console) confirming whether JQuery loaded successfully or not.



---

## Author

**Claudia Perez** - [21Kgold](https://github.com/21Kgold)