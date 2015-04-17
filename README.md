# Reactive Dependency Injection

A small package to use reactive dependency injection in Meteor.


## Meteor problems:

 - When you need to communicate between files in Meteor, you have to create global variables.
 - You can't choose the load order in Meteor. When your project is big you will probably run into problems like trying to use a global variable that hasn't been created yet.

## Reactive solution:

If something is really good in Meteor, that is reactivity.

With a reactive dependency system:

 - You don't have to worry about **load order** anymore, it's reactive.
 - You can make **everything local** again.
 - It supports **circular dependencies** (one object/class needs another and viceversa).
 - You will be using **dependency injection**. It's a good practice for decoupling and testing purposes.
 - With a quick look, you can see all the **external dependencies** your object/class depends on.

## Install:

Just run this in your project folder:

```
meteor add meteorflux:reactive-dependency
```

## Use:

It's quite similar to [`Tracker.autorun`](http://docs.meteor.com/#/full/tracker_autorun). Inside your object or class you declare your dependencies like this:

```javascript
// Dependency Injection
var _otherObject, _anotherObject;
Dependency.autorun(function(){
  _otherObject   = Dependency.get('OtherObject');
  _anotherObject = Dependency.get('AnotherObject');
});
```

And after the creation of each object/class, you add it to the system like this:

```javascript
// Create instance and add it
var otherObject = new OtherObject();
Dependency.add('OtherObject', otherObject);
```

Reactivity takes cares of the rest.

## Important!

Remember that you don't have to access any object before `Meteor.startup()` because you don't know if Meteor has already loaded that file or not.

This is not bad, it's how Meteor normally works and the reason `Meteor.startup()` exists.

## MeteorFlux

I have created this package to use in conjunction with my [MeteorFlux Dispatcher](https://github.com/meteorflux/dispatcher).

In the [Flux](https://facebook.github.io/flux/) architecture, your logic is kept inside Stores. Those Stores need to communicate between each other so a good **dependency** system is needed.

MeteorFlux is still a work in progress. You can follow it in this forum post:  
https://forums.meteor.com/t/meteorflux-flow/920/

You **don't need to use Flux or the Dispatcher** to use this package. Actually, I hope it can be useful in many other cases, so I've released this first.

## Examples:

I have created an example in this Github repo:  
https://github.com/meteorflux/reactive-dependency-example

## Contribute:

Feel free to express your feelings in [this forum post](https://forums.meteor.com/t/reactive-dependency-injection/2971)
or here in the [Github Issues](https://github.com/meteorflux/reactive-dependency/issues).
