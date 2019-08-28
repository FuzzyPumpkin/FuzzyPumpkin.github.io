(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,i,t){e.exports=t(33)},33:function(e,i,t){"use strict";t.r(i);var a=t(0),s=t.n(a),n=t(21),o=t.n(n),r=t(5),c=t(6),m=t(9),p=t(7),g=t(14),d=t(10),l=t(8),h=function(e){function i(){return Object(r.a)(this,i),Object(m.a)(this,Object(p.a)(i).apply(this,arguments))}return Object(d.a)(i,e),Object(c.a)(i,[{key:"render",value:function(){return s.a.createElement("nav",{className:"nav"},s.a.createElement("ul",{className:"nav-ul"},s.a.createElement("p",{className:"nav-title"},"Tag List"),s.a.createElement("li",{className:"nav-li"},s.a.createElement(l.c,{exact:!0,to:"/",className:"nav-item",activeClassName:"nav-active"},"All")),this.props.tags.map(function(e){return s.a.createElement("li",{className:"nav-li",key:e},s.a.createElement(l.c,{exact:!0,to:"/".concat(e),className:"nav-item",activeClassName:"nav-active"},e))})))}}]),i}(a.Component),u=function(e){function i(){return Object(r.a)(this,i),Object(m.a)(this,Object(p.a)(i).apply(this,arguments))}return Object(d.a)(i,e),Object(c.a)(i,[{key:"render",value:function(){return s.a.createElement("article",{className:"card"},s.a.createElement("div",{className:"card-imageContainer"},0===this.props.imgURL.length?s.a.createElement("img",{src:"./images/noimage.jpg",alt:this.props.name,className:"card-image"}):s.a.createElement("img",{src:this.props.imgURL,alt:this.props.name,className:"card-image"})),s.a.createElement("div",{className:"card-info"},s.a.createElement("a",{href:this.props.siteURL,className:"card-link"},this.props.name),s.a.createElement("p",{className:"card-blurb"},this.props.description)),s.a.createElement("div",{className:"card-tagContainer"},this.props.tags.sort().map(function(e){return s.a.createElement(l.b,{exact:!0,to:"/".concat(e),className:"card-tag",key:e},e)})))}}]),i}(a.Component),R=function(e){function i(){return Object(r.a)(this,i),Object(m.a)(this,Object(p.a)(i).apply(this,arguments))}return Object(d.a)(i,e),Object(c.a)(i,[{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"cardgrid"},this.props.resources.map(function(i){return"all"===e.props.tag?s.a.createElement(u,{id:i.id,name:i.name,siteURL:i.siteURL,imgURL:i.imgURL,description:i.description,tags:i.tags,key:i.id}):i.tags.includes(e.props.tag)?s.a.createElement(u,{id:i.id,name:i.name,siteURL:i.siteURL,imgURL:i.imgURL,description:i.description,tags:i.tags,key:i.id}):null}))}}]),i}(a.Component),b=[{id:0,name:"Photopea",siteURL:"https://www.photopea.com/",imgURL:"./images/Photopea-min.jpg",description:"A free image editing tool with many of the same features as Photoshop.",tags:["Tools","Graphics"]},{id:1,name:"Moving Head (me)",siteURL:"https://codepen.io/maaarj/full/vmYPqm",imgURL:"./images/movinghead-min.jpg",description:"Animation that moves according to mouse position.",tags:["Codepen","Inspiration"]},{id:2,name:"Bootstrap",siteURL:"https://getbootstrap.com/",imgURL:"./images/bootstrap-min.jpg",description:"Ubiquitous CSS library.",tags:["CSS","Library"]},{id:3,name:"Codewars",siteURL:"https://www.codewars.com/",imgURL:"./images/Codewars-min.jpg",description:"Ranked practice problems in a myriad of languages.",tags:["JavaScript","Ruby","Practice"]},{id:4,name:"FreeCodeCamp",siteURL:"https://learn.freecodecamp.org/",imgURL:"./images/freecodecamp-min.jpg",description:"Comprehesive online bootcamp with six different certification programs.",tags:["CSS","JavaScript","HTML","Course"]},{id:5,name:"CodeAnalogies",siteURL:"https://www.codeanalogies.com/",imgURL:"./images/codeanalogies-min.jpg",description:"Myriad tutorials over many specific topics.",tags:["CSS","JavaScript","Tutorial","React"]},{id:6,name:"Rings Navigation Concept",siteURL:"https://codepen.io/bennettfeely/full/qRJOZJ",imgURL:"./images/rings-min.jpg",description:"Nav similar to hamburger that expands into concentric rings.",tags:["Codepen","Inspiration"]},{id:7,name:"Photos For Class",siteURL:"https://photosforclass.com/",imgURL:"./images/class-min.jpg",description:"Creative Commons image resource",tags:["Graphics"]},{id:8,name:"EMOJI CSS",siteURL:"https://afeld.github.io/emoji-css/",imgURL:"./images/emoji-min.jpg",description:"Icons of popular emojis.",tags:["Library","CSS","Graphics"]},{id:9,name:"IcoMoon",siteURL:"https://icomoon.io/app/#/select/library",imgURL:"./images/icomoon-min.jpg",description:"SVG icon sets, fully customizable to just those you want to use.",tags:["SVG","Graphics"]},{id:10,name:"CSS Tricks - Glyphs",siteURL:"https://css-tricks.com/snippets/html/glyphs/",imgURL:"./images/glyphs-min.jpg",description:"HTML entities for symbols that will not display otherwise, such as Latin characters.",tags:["HTML"]},{id:11,name:"Can I Use...",siteURL:"https://caniuse.com/",imgURL:"./images/caniuse-min.jpg",description:"Searchable guide showing support by browser for CSS properties.",tags:["CSS"]},{id:12,name:"Animate.css",siteURL:"https://daneden.github.io/animate.css/",imgURL:"./images/animate-min.jpg",description:"Great CSS Animation library, with a preview page.",tags:["CSS","Library","Animation"]},{id:13,name:"Clippy",siteURL:"https://bennettfeely.com/clippy/",imgURL:"./images/clippy-min.jpg",description:"CSS clip-path maker, both a repository of set shapes and the ability to create custom ones.",tags:["CSS","Tools"]},{id:14,name:"Cubic-Bezier",siteURL:"https://cubic-bezier.com/#.11,.11,1,.38",imgURL:"./images/cubic-min.jpg",description:"Great tool for testing how cubic-beziers will change animations.",tags:["CSS","Animation","Tools"]},{id:15,name:"Easing Functions Cheat Sheet",siteURL:"https://easings.net/en",imgURL:"./images/easings-min.jpg",description:"Visualizations of ease types for transitions and such.",tags:["CSS","Tools"]},{id:16,name:"Keycodes",siteURL:"http://keycodes.atjayjo.com/#unicode",imgURL:"./images/keycodes-min.jpg",description:"Keycodes, Unicodes, and URL Encoded references for keyboard keys.",tags:["HTML","JavaScript"]},{id:17,name:"Google Fonts",siteURL:"https://fonts.google.com/",imgURL:"./images/gfonts-min.jpg",description:"Incredibly large free font repository.",tags:["Library","CSS"]},{id:18,name:"Paletton",siteURL:"http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF",imgURL:"./images/palleton-min.jpg",description:"Incredibly detailed color picker complete with visualizations for color-blindness.",tags:["Accessibility","Tools"]},{id:19,name:"Unsplash",siteURL:"https://unsplash.com/",imgURL:"./images/unsplash-min.jpg",description:"Creative Commons image resource.",tags:["Graphics"]},{id:20,name:"Pixabay",siteURL:"https://pixabay.com/",imgURL:"./images/pixabay-min.jpg",description:"Creative Commons image resource.",tags:["Graphics"]},{id:21,name:"Coverr",siteURL:"https://coverr.co/",imgURL:"./images/coverr-min.jpg",description:"Creative Commons video resource, free and paid options.",tags:["Graphics"]},{id:22,name:"Font Awesome",siteURL:"https://fontawesome.com/?from=io",imgURL:"./images/awesome-min.jpg",description:"Popular vector icons source (consider IcoMoon instead for SVG).",tags:["Graphics"]},{id:23,name:"Dribbble",siteURL:"https://dribbble.com/",imgURL:"./images/dribbble-min.jpg",description:"Examples of design work.",tags:["Inspiration"]},{id:24,name:"Optimizilla",siteURL:"https://imagecompressor.com/",imgURL:"./images/optimizilla-min.jpg",description:"Online image compressor for JPG and PNGs, 20 at a time.",tags:["Tools","Graphics"]},{id:25,name:"Building Forms Using React",siteURL:"https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y",imgURL:"./images/building-min.jpg",description:"Blog post with tips and tricks for effective form building.",tags:["React","Tutorial"]},{id:26,name:"Regex Crossword",siteURL:"https://regexcrossword.com/",imgURL:"./images/regex-min.jpg",description:"Puzzle games to aid in learning how to construct effective regex expressions.",tags:["JavaScript","Practice"]},{id:27,name:"HTML5 Element Flowchart",siteURL:"http://html5doctor.com/downloads/h5d-sectioning-flowchart.png",imgURL:"./images/doctor-min.jpg",description:"Great flowchart that aides in deciding what semantic tags to use.",tags:["HTML","Accessibility"]},{id:28,name:"JavaScript30",siteURL:"https://javascript30.com/",imgURL:"./images/wesbos-min.jpg",description:"30 Days of JavaScript code-a-long covering many topics.",tags:["JavaScript","Tutorial"]},{id:29,name:"CSS3 Patterns Gallery",siteURL:"https://leaverou.github.io/css3patterns/#",imgURL:"./images/patterns-min.jpg",description:"Infinitely useful patterns created with CSS, typically creative manipulation of gradients.",tags:["CSS","Graphics"]},{id:30,name:"BeHance",siteURL:"https://www.behance.net/",imgURL:"./images/behance-min.jpg",description:"Examples of design work.",tags:["Inspiration"]},{id:31,name:"Web Developer Roadmap",siteURL:"https://github.com/kamranahmedse/developer-roadmap",imgURL:"./images/roadmap-min.jpg",description:"Flowchart showing one guide to covering the tech needed for three developer paths.",tags:["Tutorial"]},{id:32,name:"Junior Developers Guide to Optimizing Images",siteURL:"http://medium.com/@gemarin/the-junior-developers-guide-to-optimizing-images-for-the-web-70701c524b63",imgURL:"./images/webimage-min.jpg",description:"Two-part guide to optimizing and compressing images.",tags:["Graphics","Tutorial"]},{id:33,name:"Water Ripple Animation",siteURL:"https://codepen.io/John_mpf/pen/MzXNwr",imgURL:"./images/ripple-min.jpg",description:"",tags:["Animation","Inspiration"]},{id:34,name:"Beginner's Guide to Designing for Accessibility",siteURL:"https://www.punchkick.com/user-research/user-experience/2019/05/28/designing-for-accessibility",imgURL:"./images/begaccess-min.jpg",description:"An high-level overview of accessibility concerns and how to address them.",tags:["Accessibility"]},{id:35,name:"PDF.js",siteURL:"https://mozilla.github.io/pdf.js/",imgURL:"./images/pdf-min.jpg",description:"A JavaScript Library that parses and renders PDFs.",tags:["Library","JavaScript"]},{id:36,name:"Refactoring UI",siteURL:"https://refactoringui.com",imgURL:"./images/refactoring-min.jpg",description:"UI design tips.",tags:["Design","CSS"]},{id:37,name:"PHP Practitioner",siteURL:"https://laracasts.com/series/php-for-beginners",imgURL:"./images/php-min.jpg",description:"Comprehensive course to PHP and Laravel.",tags:["PHP","Course"]},{id:38,name:"CSSBattle",siteURL:"https://cssbattle.dev",imgURL:"./images/cssbattle-min.jpg",description:"Competitive site for practice creating images with CSS.",tags:["CSS","Practice"]},{id:39,name:"The Web Developer Bootcamp",siteURL:"https://www.udemy.com/the-web-developer-bootcamp/",imgURL:"./images/csweb-min.jpg",description:"Expansive online course from Colt Steele covering front-end and some back-end topics.",tags:["Course","HTML","JavaScript","Node"]},{id:40,name:"JavaScript - the Weird Parts",siteURL:"https://www.udemy.com/understand-javascript/",imgURL:"./images/weird-min.jpg",description:"Course that covers tricky topics in JavaScript, like closures and this.",tags:["JavaScript","Course"]},{id:41,name:"Advanced CSS and SASS",siteURL:"https://www.udemy.com/advanced-css-and-sass/",imgURL:"./images/csssass-min.jpg",description:"Advanced CSS course focused on SASS, flexbox, and grid.",tags:["CSS","Course","SASS"]},{id:42,name:"React Front to Back",siteURL:"https://www.udemy.com/modern-react-front-to-back/",imgURL:"./images/frontback-min.jpg",description:"React course from Brad Traversy, also covering interactions with a Node back-end.",tags:["React","Course","Node"]},{id:43,name:"Modern React Bootcamp",siteURL:"https://www.udemy.com/modern-react-bootcamp/",imgURL:"./images/modreact-min.jpg",description:"React course from Colt Steele with many practice projects.",tags:["React","Course"]},{id:44,name:"Computational Thinking for Problem Solving",siteURL:"https://www.coursera.org/learn/computational-thinking-problem-solving?",imgURL:"./images/thinking-min.jpg",description:"Help for how to think like a programmer.",tags:["Course"]},{id:45,name:"Responsive Website Basics",siteURL:"https://www.coursera.org/learn/website-coding?",imgURL:"./images/ulondon-min.jpg",description:"Very introductory short course regarding basic site building.",tags:["HTML","CSS","Course"]},{id:46,name:"Contrast Ratio",siteURL:"https://contrast-ratio.com/",imgURL:"./images/contrast-min.jpg",description:"Checks the contrast ratio for text and background colors against WCAG standards.",tags:["Accessibility","Tools"]},{id:47,name:"Animatable",siteURL:"http://leaverou.github.io/animatable/#",imgURL:"./images/animatable-min.jpg",description:"Simulates many simple animations.",tags:["CSS","Animation","Tools","Inspiration"]}],L=t(11),U=function(e){function i(e){var t;return Object(r.a)(this,i),(t=Object(m.a)(this,Object(p.a)(i).call(this,e))).state={tagList:[],sortedResources:[]},t.compare=t.compare.bind(Object(g.a)(t)),t}return Object(d.a)(i,e),Object(c.a)(i,[{key:"compare",value:function(e,i){var t=e.name.toLowerCase(),a=i.name.toLowerCase(),s=0;return t>a?s=1:t<a&&(s=-1),s}},{key:"componentDidMount",value:function(){var e=[];b.map(function(i){return i.tags.forEach(function(i){e.includes(i)||e.push(i)})}),this.setState({tagList:e.sort()}),this.setState({sortedResources:b.sort(this.compare)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"u-flex-row"},s.a.createElement(h,{tags:this.state.tagList}),s.a.createElement("main",null,s.a.createElement("h1",null,"ReSOURCEd"),s.a.createElement("p",{className:"main-blurb"},"A collection of websites, courses, blogs and articles relating to web development, focusing on front end and design. Created and shared by Kari Minger, aka FuzzyPumpkin, in hopes of bettering the community."),s.a.createElement(L.c,null,s.a.createElement(L.a,{exact:!0,path:"/",render:function(){return s.a.createElement(R,{resources:e.state.sortedResources,tag:"all"})}}),s.a.createElement(L.a,{exact:!0,path:"/:tag",render:function(i){var t=i.match.params.tag;return s.a.createElement(R,Object.assign({},i,{tag:t,resources:e.state.sortedResources}))}}))))}}]),i}(a.Component);o.a.render(s.a.createElement(l.a,{basename:"/resourced"},s.a.createElement(U,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.50e46d2f.chunk.js.map