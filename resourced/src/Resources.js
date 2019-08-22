const resources = [
    {   
        "id": 0,
        "name": "Photopea",
        "siteURL": "https://www.photopea.com/",
        "imgURL": "./images/Photopea.jpg",
        "description": "A free image editing tool with many of the same features as Photoshop.",
        "tags": ["Tools", "Graphics"]
    },
    {   
        "id": 1,
        "name": "Moving Head (me)",
        "siteURL": "https://codepen.io/maaarj/full/vmYPqm",
        "imgURL": "",
        "description": "Animation that moves according to mouse position.",
        "tags": ["Codepen", "Inspiration"]
    },
    {   
        "id": 2,
        "name": "Bootstrap",
        "siteURL": "https://getbootstrap.com/",
        "imgURL": "",
        "description": "Ubiquitous CSS library.",
        "tags": ["CSS", "Library"]
    },
    {   
        "id": 3,
        "name": "Codewars",
        "siteURL": "https://www.codewars.com/",
        "imgURL": "./images/Codewars.jpg",
        "description": "Ranked practice problems in a myriad of languages.",
        "tags": ["JavaScript", "Ruby", "Practice"]
    },
    {   
        "id": 4,
        "name": "FreeCodeCamp",
        "siteURL": "https://learn.freecodecamp.org/",
        "imgURL": "",
        "description": "Comprehesive online bootcamp with six different certification programs.",
        "tags": ["CSS", "JavaScript", "HTML", "Course"]
    },
    {   
        "id": 5,
        "name": "CodeAnalogies",
        "siteURL": "https://www.codeanalogies.com/",
        "imgURL": "",
        "description": "Myriad tutorials over many specific topics.",
        "tags": ["CSS", "JavaScript", "HTML", "API", "Tutorial", "React"]
    },
    {   
        "id": 6,
        "name": "Rings Navigation Concept",
        "siteURL": "https://codepen.io/bennettfeely/full/qRJOZJ",
        "imgURL": "",
        "description": "Nav similar to hamburger that expands into concentric rings.",
        "tags": ["Codepen", "Inspiration"]
    },
    {   
        "id": 7,
        "name": "Photos For Class",
        "siteURL": "https://photosforclass.com/",
        "imgURL": "",
        "description": "Creative Commons image resource",
        "tags": ["Graphics"]
    },
    {   
        "id": 8,
        "name": "EMOJI CSS",
        "siteURL": "https://afeld.github.io/emoji-css/",
        "imgURL": "",
        "description": "Icons of popular emojis.",
        "tags": ["Library", "CSS", "Graphics"]
    },
    {   
        "id": 9,
        "name": "IcoMoon",
        "siteURL": "https://icomoon.io/app/#/select/library",
        "imgURL": "./images/icomoon.jpg",
        "description": "SVG icon sets, fully customizable to just those you want to use.",
        "tags": ["SVG", "Graphics"]
    },
    {   
        "id": 10,
        "name": "CSS Tricks - Glyphs",
        "siteURL": "https://css-tricks.com/snippets/html/glyphs/",
        "imgURL": "",
        "description": "HTML entities for symbols that will not display otherwise, such as Latin characters.",
        "tags": ["HTML"]
    },
    {   
        "id": 11,
        "name": "Can I Use...",
        "siteURL": "https://caniuse.com/",
        "imgURL": "",
        "description": "Searchable guide showing support by browser for CSS properties.",
        "tags": ["CSS"]
    },
    {   
        "id": 12,
        "name": "Animate.css",
        "siteURL": "https://daneden.github.io/animate.css/",
        "imgURL": "",
        "description": "Great CSS Animation library, with a preview page.",
        "tags": ["CSS", "Library", "Animation"]
    },
    {   
        "id": 13,
        "name": "Clippy",
        "siteURL": "https://bennettfeely.com/clippy/",
        "imgURL": "",
        "description": "CSS clip-path maker, both a repository of set shapes and the ability to create custom ones.",
        "tags": ["CSS", "Tools"]
    },
    {   
        "id": 14,
        "name": "Cubic-Bezier",
        "siteURL": "https://cubic-bezier.com/#.11,.11,1,.38",
        "imgURL": "",
        "description": "Great tool for testing how cubic-beziers will change animations.",
        "tags": ["CSS", "Animation", "Tools"]
    },
    {   
        "id": 15,
        "name": "https://easings.net/en",
        "siteURL": "",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 16,
        "name": "",
        "siteURL": "http://keycodes.atjayjo.com/#unicode",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 17,
        "name": "",
        "siteURL": "https://fonts.google.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 18,
        "name": "",
        "siteURL": "http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 19,
        "name": "",
        "siteURL": "https://unsplash.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 20,
        "name": "",
        "siteURL": "https://pixabay.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 21,
        "name": "",
        "siteURL": "https://coverr.co/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 22,
        "name": "",
        "siteURL": "https://fontawesome.com/?from=io",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 23,
        "name": "",
        "siteURL": "https://dribbble.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 24,
        "name": "",
        "siteURL": "https://imagecompressor.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 25,
        "name": "",
        "siteURL": "https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 26,
        "name": "",
        "siteURL": "https://regexcrossword.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 27,
        "name": "",
        "siteURL": "http://html5doctor.com/downloads/h5d-sectioning-flowchart.png",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 28,
        "name": "",
        "siteURL": "https://javascript30.com/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 29,
        "name": "Dribbble",
        "siteURL": "https://dribbble.com/",
        "imgURL": "",
        "description": "",
        "tags": ["Inspiration"]
    },
    {   
        "id": 30,
        "name": "BeHance",
        "siteURL": "https://www.behance.net/",
        "imgURL": "",
        "description": "",
        "tags": ["Inspiration"]
    },
    {   
        "id": 31,
        "name": "",
        "siteURL": "https://github.com/kamranahmedse/developer-roadmap",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 32,
        "name": "",
        "siteURL": "http://medium.com/@gemarin/the-junior-developers-guide-to-optimizing-images-for-the-web-70701c524b63",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 33,
        "name": "",
        "siteURL": "https://codepen.io/John_mpf/pen/MzXNwr",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 34,
        "name": "",
        "siteURL": "https://www.punchkick.com/user-research/user-experience/2019/05/28/designing-for-accessibility",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 35,
        "name": "",
        "siteURL": "https://mozilla.github.io/pdf.js/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 36,
        "name": "",
        "siteURL": "https://refactoringui.com",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 37,
        "name": "",
        "siteURL": "https://laracasts.com/series/php-for-beginners",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 38,
        "name": "CSSBattle",
        "siteURL": "https://cssbattle.dev",
        "imgURL": "",
        "description": "",
        "tags": ["CSS", "Practice"]
    },
    {   
        "id": 39,
        "name": "",
        "siteURL": "https://www.udemy.com/the-web-developer-bootcamp/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 40,
        "name": "",
        "siteURL": "https://www.udemy.com/understand-javascript/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 41,
        "name": "",
        "siteURL": "https://www.udemy.com/advanced-css-and-sass/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 42,
        "name": "",
        "siteURL": "https://www.udemy.com/modern-react-front-to-back/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 43,
        "name": "",
        "siteURL": "https://www.udemy.com/modern-react-bootcamp/",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 44,
        "name": "",
        "siteURL": "https://www.coursera.org/learn/computational-thinking-problem-solving?",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 45,
        "name": "",
        "siteURL": "https://www.coursera.org/learn/website-coding?",
        "imgURL": "",
        "description": "",
        "tags": []
    },
    {   
        "id": 46,
        "name": "Contrast Ratio",
        "siteURL": "https://contrast-ratio.com/",
        "imgURL": "",
        "description": "Checks the contrast ratio for text and background colors against WCAG standards.",
        "tags": ["Accessibility", "Tools"]
    },
    {   
        "id": 47,
        "name": "Animatable",
        "siteURL": "http://leaverou.github.io/animatable/#",
        "imgURL": "",
        "description": "Simulates many simple animations.",
        "tags": ["CSS", "Animation", "Tools", "Inspiration"]
    },
    {   
        "id": 48,
        "name": "CSS3 Patterns Gallery",
        "siteURL": "https://leaverou.github.io/css3patterns/#",
        "imgURL": "",
        "description": "Infinitely useful patterns created with CSS, typically creative manipulation of gradients.",
        "tags": ["CSS", "Graphics"]
    },
]

export default resources;
