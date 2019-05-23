const nameInput = document.querySelector("#nameInput"),
      emailInput = document.querySelector("#emailInput"),
      phoneInput = document.querySelector("#phoneInput"),
      submitBtn = document.querySelector("button");

let namePresence = false,
    emailPresence = false,
    phonePresence = false;

//NAME AUTH
    //at least 3 characters
    //no numbers

//CONTACT AUTH
    //must have either phone or email (flag with ok status on either)

//PHONE AUTH
    //numbers and dashes only
    //with dashes removed, length must be at least 10

//EMAIL AUTH
    //must have @
    //at least 3 characters before @ 
    //must have a period somewhere after @
    //bit after period must be at least 2 characters
    //bit before period but after @ must be at least 2 characters

//ON SUCCESSFUL PASSING
    //flash message stating this is a mock site and form authenticates content only, submission not enabled