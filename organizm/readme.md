# Organizm

--version 1 of ?--
This is a massive undertaking, a life-organization app that handles tasks, calendar, menu-planning, travel-planning, and completely customizable goal and symptom tracking. It will include some reporting functions. 

As of version 1, Organizm is a tasks list app with a bit extra added. Users can add and delete tasks. They can mark them completed and delete all completed tasks with one button click. These features are fairly standard. It also includes a custom date picker so that a goal date can be added to a task. In later versions of the app, these dates will be used to sort tasks and to populate a calendar component. Data currently is saved to local storage. Again, this will change in a later version of the app. The current plan is for data to save to local storage and for users to be able to back up to a cloud database on demand. I want the app to remain usable offline, but have cloud backup and for users to have access to the same data on all their devices.

The name, Organizm, is an amalgam of "organize" and "organism". It will grow in breadth and complexity with future versions. Because of this, it needs a scalable architecture both in style and function. I used Sass to structure the CSS and BEM nomenclature as BEM/Sass/React are natural symbiots as they all are built on components. I chose to use functional React components instead of class for a couple reasons: one, it's the trend and it's something I personally need to be comfortable with. Second, hooks and context and how they allow state to be shared and manipulated by multiple components while keeping the code structure cleaner.

The plan for version 2 is to tackle lists. Not task lists, but list of any sort that can be named. Users will be able to have multiple lists going. Think of this component as a grocery list app, although the nature of Organizm is to leave the exact usage of any component up to the user so that they don't feel boxed in. Just like with tasks, where you can add a date to a task but you don't have to if that's not how you wish to use it, you'll be able to list items and assign quantities or measurements or leave those off. You'll be able to copy lists and of course add and delete them.

Project was wireframed and then layout created in Figma. Most graphics are svg icons from IcoMoon, but a few are my own creation. 

## Technologies Utilized
* React
* Sass


## Installation

Live deployment of the app is in progress. If you would like to download the code and run it on your development environment, you can either fork the repo or click on "Clone or Download" and download as a .zip file. Open the extracted folder in the code editor of your choice.

## Contributors
I, Kari Minger (aka FuzzyPumpkin) am the sole contributor to this project.

## License
Organizm is Copyright (c) 2019 Kari Minger.
This project is licensed under the MIT License
