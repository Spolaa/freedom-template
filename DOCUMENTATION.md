# Documentation

In this file is report the complete documentation about Freedom Template components.
Really simple to understand, use, modify.

Version: 0.1.0. </br>
Author: 95stefano.gagliardi@gmail.com</br>
License: [MIT](https://github.com/Spolaa/freedom-template/blob/master/LICENSE)</br>

For any questions please contact me!

### How to contribute

If you have idea to improve documentation about: components, feauture, bug, optimize etc. Please write it and commit or send me!
Have a mistake or issue between template and documentation? [Open a new issue](https://github.com/Spolaa/freedom-template/issues) here on GitHub.

## Components

### Index

1. Loader
2. Cookie banner

## 1. Loader

Loader need while page loading. Simple and pretty design animation instead page content load.

```html
    <div id="loader-wrapper-x">
        <div id="loader"></div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
```

The code above is a default structure of loader. In the *loader-wrapper-x* there are two components. The first *#loader* is loader icon. The second in background animation out. 

Three line of loader icon are just one div. Are three thanks to pseudo-element :after and :before. Set those to change size and color and time to animation. The animation is defined as *spin* (infinite), this animation is build with a @keyframe (rotate)

For background there are four option for transition. Simple to use thanks to class:
- split screen horizontally:
    - ```<div class="loader-section section-x-left"></div>```
    - ```<div class="loader-section section-x-right"></div>```
- split screen vertically:
    - ```<div class="loader-section section-y-top"></div>```
    - ```<div class="loader-section section-y-bottom"></div>```
- full screen left: ```<div class="loader-section section-left"></div>```
- full screen right: ```<div class="loader-section section-right"></div>```
- full screen top: ```<div class="loader-section section-top"></div>```
- full screen bottom: ```<div class="loader-section section-bottom"></div>```

The transaction of background is defined by js (/assets/js/main.js). In document ready there is a *setTimeout* after 3s (3000) that add class *loaded* to body.

## 2. Cookie banner

A banner for cookie privacy policy normative with simple cookie system in js.
```html
    <div id="cookie" class="cookie-banner top accept">
        <p>Your cookie text <a href="#">Link to policy</a> lorem ipsum dolor</p>
        <a href="javascript:;" id="cookie-btn" class="cookie-btn">Accept</a>
    </div>
```
