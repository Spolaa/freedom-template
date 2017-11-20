# Documentation

In this file is report the complete documentation about Freedom Template components. The template is based on Bootstrap v.4 so a lot of helper function take from this one.

Really simple to understand, use and modify.

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

The code above is a default structure of loader. In the *loader-wrapper-x* there are two components. The first *#loader* is loader icon. The second is parts of background animation. Background transiction start when *$(document).ready* , if you prefer in *assets/js/main.js* in the section loader there is helper function where you can set a timeout on transiction.

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
<div id="cookie" class="cookie-banner fixed-bottom accept">
    <div class="container">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <p>Your cookie text <a href="javascript:;" class="link">Link to policy</a> lorem ipsum dolor</p>
            <a id="cookie-btn" class="cookie-btn">Accept</a>
        </div>
    </div>
</div>

```
The main containe is *.cookie-banner* and strucutre is that bootstrap default (container and col). Inside you can insert your content. The are two options for banner position: *.fixed-top* or *.fixed-bottom* </br>

In file main.js there three methods for cookies: *setCookie, getCookie, eraseCookie*. The variables for these function are in the cookie section of main.js. The functions and params are explained with in the js file.

The main feautures are:</br>
- On window load *getCookie* check if cookie exist add class *.display-none* to cookie banner
- In div *#cookie* you can choose between three class options if cookie doesn't exist:
    - *.always* Cookie come create anyhow
    - *.on-scroll* Cookie name come create just user navigate or scroll page
    - *.accept* Cookie come create just user click button. Required a button with id *#cookie-btn*
    
If you need to delet cookie and create new there is a js mehtod: *eraseCookie*. Just invoke before method *setCookie*.
    
## 3. Navbar

Navigation bar is based on Bootstrap 4 classes so i advice to read official [documentation](https://getbootstrap.com/docs/4.0/components/navbar/).</br>
Main structure is the follow:
```html
<header id="header">
    <nav class="navbar navbar-expand-md fixed-top opacity-scroll">
        <div class="container">

        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-lable="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <a href="#" class="navbar-brand"><img src="/assets/img/220x50.png" alt="brand-name"> </a>

        <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">
            <ul class="navbar-nav navbar-right">
                <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="#focus" class="nav-link">Focus</a></li>
                <li class="nav-item"><a href="#timeline" class="nav-link">Timeline</a></li>
                <li class="nav-item"><a href="#team" class="nav-link">Team</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>

        </div><!-- /.container -->
    </nav>
</header>

```
First of all navbar is composed by two element: Brand and navigation. The first is a link, in this case is a responsive image (img-fluid is a responsive bootstrap 4 class) but you can put there a Heading for instance. The second is a main navigator of your site. Link can scope or in other page or to one section in the current page.

The main feautures are:</br>
1. Change color or opacity on scroll</br>
    To add this is very simple just add class *.opacity-scroll* to main *<nav>* and chooce color in the style.css. N.B. There are two near class to change color.
2. Change size on scroll</br>
    Like the first just add class *.resize-scroll* to main *<nav>* nad chooce height in style.css
3. Add box-shadow on scroll
4. Can be Fixed or not
5. Active class in real time and autoscrolling
6. A mix of previous
