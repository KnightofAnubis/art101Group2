rooms = {
    main: {
        name: "<h1><b>Baskin Shooting Simulation</b></h1>",
        description: "<br>This is a simulation of a school shooting based in the University of Santa Cruz. This simulation will take you though choices on how to be prepared in advance for the best chances of survival.",
        exitKeys: ["start", "learn"],
        exitTexts: ["<b>Start</b>",  "<b>Learn More</b>"]
    },
    learn: { 
        name: "<h2><b>Baskin Shooting Simulation: Learn More</b></h2>",
        description: "<br>This project's main goal is to bring awareness to how to deal with school shootings. \
        </br>Running should be option one if possible, but be prepared to hide or fight for your life there is no safe escape route. The \
        location was chosen as University of California, Santa Cruz Baskin Engineering since that is the main building \
        associated with the class this project was designed for. This is a final project for Art 101.",
        exitKeys: ["main"],
        exitTexts: ["Return to the Main Screen."]
    },
    start: {
	    name: "<h2><b>At Baskin Engineering</b></h2>",
        image: "Bench",
	    description: "<br>You arrive at Baskin Enginnering where you are attending a class in room 152. ",
        exitKeys: ["enter"],
	    exitTexts: ["Enter the building."]
    },
    enter: {
	    name: "<h2><b>Inside Baskin Engineering</b></h2>",
	    description: "<br>Opening the doors of the building you walk past the cafe, smelling the freshly brewed coffee and enter into the classroom.",
        exitKeys: ["begin"],
	    exitTexts: ["Walk into class."]
    },
    begin: {
	    name: "<h2><b>Baskin Engineering Room 152</b></h2>",
	    description: "<br>You are sitting at a desk about halfway into a lecture when suddely loud gunshots are heard nearby. An announcment echoes around the room. \
        'There is an active shooter in the building.' You look around at your fellow students and think about what to do. \
        <br/> If you hear gunshots or believe it to be gunshots, assume that there is a shooter on campus unless informed otherwise by adminisrators. ",
	    exitKeys: ["hide", "run", "panic"],
	    exitTexts: ["Quick hide!", "RUN", "Panic!"]
    },
    hide: {
	    name: "<h2><b>Baskin Engineering Room 152: Hiding</b></h2>",
	    description: "<br>You get down in between the row of chairs, covering yourself from the door. Everyone around you does the same. What do you do now?",
	    exitKeys: ["lights", "phone", "run", "block"],
	    exitTexts: ["Turn off the lights!", "Pick up phone", "RUN!", "Block the door." ]
    },
    run: {
	    name: "<h2><b>Running</b></h2>",
	    description: "<br>You panic, not wanting to be caught and make a run for it! Running to a safe zone should be priorty, but without knowing the location of the shooter, this could put you in sight of danger. \
        In this event, if escape is not possible hide. You want to shelter in place because you have no confirmation that the shooter won't see you. Without \
        knowing the location of the shooter the option to run is more dangerous than staying in place.",
	    exitKeys: ["begin"],
	    exitTexts: ["Return to Room 152"]
    },
    panic: {
	    name: "<h2><b>Baskin Engineering Room 152: Panicking</b></h2>",
	    description: "<br>You feel your chest tighten in fear. Looking around you see several people hide while a few make a run for the door.",
	    exitKeys: ["run", "hide"],
	    exitTexts: ["Go with the runners.", "Hide."]
    },
    lights: {
	    name: "<h2><b>Baskin Engineering Room 152: Lights off</b></h2>",
	    description: "<br>You quickly locate the lights panel and sneak over to turn them off, staying low to the ground. \
        <br/> If in a room lock down, close blinds, stay away from windows or doors, spread out from others and try to keep cover. \
        <br/> While you wait, what do you do?",
	    exitKeys: ["silence", "call"],
	    exitTexts: ["Silence your phone", "Call a friend."]
    },  
    phone: {
	    name: "<h2><b>Baskin Engineering Room 152: Pick up phone</b></h2>",
	    description: "<br>You take out your phone, what do you do? If it is safe to do so, call 911. Do not assume that the incident has already been reported", 
	    exitKeys: ["silence", "call"],
	    exitTexts: ["Silence your phone", "Call a friend."]
    },  
    silence: {
	    name: "<h2><b>Baskin Engineering Room 152: Silence your phone</b></h2>",
	    description: "<br>You quickly silence your phone and gesture to others to do the same. It would be bad to alert to the shooter that people were in the room.",
	    exitKeys: ["footsteps", "remind"],
	    exitTexts: ["Listen for footsteps.", "Remind others near you to silence their phones."]

    },
    call: {
        name: "<h2><b>Baskin Engineering Room 152: Call a friend</b></h2>",
	    description: "<br>It is understandable to want to call someone and let them know what is happening, but it is safer to remain silent and not make noise while hiding.",
	    exitKeys: ["silence"],
	    exitTexts: ["Please, silence your phone."]
    },
    block: {
        name: "<h2><b>Baskin Engineering Room 152: Block the door</b></h2>",
	    description: "<br>You block the door with desks and chairs to deter the shooting. When hiding you should lock and baricade doors with furniture if possible.",
	    exitKeys: ["hide"],
	    exitTexts: ["Continue hiding."]
    },
    footsteps: {
        name: "<h2><b>Baskin Engineering Room 152: Listening...</b></h2>",
        description: "<br>You stay quiet and listen… You hear gunshots somewhere above you and the sound of running in the hallway outside the door. \
        You think for a moment if you should try to make a run for it while believing the shooter is on the level above you. Evacuate if possible if deemed safe to do so away from the sound of the shooting to a safe zone.",
        exitKeys: ["run2", "stay"], 
        exitTexts: ["You make your escape.", "You stay hidden."]
    },
    remind: {
        name: "<h2><b>Baskin Engineering Room 152: Reminder...</b></h2>",
        description: "<br>You whisper to the person next to you, 'hey, silence your phone.' They nod and pass on the message.",
        exitKeys: ["listen", "weapon" ],
        exitTexts: ["Listen for footsteps.", "Look around for a weapon."]
    },
    listen: {
        name: "<h2><b>Baskin Engineering Room 152: Listening…</b></h2>",
        description: "<br>You listen closely, flinching when you hear the sound of gunshots in the hallway outside the room. You can feel your heartbeat \
         speed up as footsteps get closer. There is a moment when the footsteps stop… light enters the room.",
        exitKeys: ["stay2", "use", "use"],
        exitTexts: ["Stay hidden.", "Use weapon.", "Try to grab the shooter"], 
    },
    
    weapon: {
        name: "<h2><b>Finding a Weapon</b></h2>",
        description: "<br>You look around and see a metal water bottle. You grab it. As a last resort to try to save your life, fight.",
        exitKeys:["listen"],
        exitTexts: ["You listen for footsteps."]
    },
    stay2: {
        name: "<h2><b>Staying hidden. Not the right choice.</b></h2>",
        description: "<br>There are three main choices when dealing with a school shooter: hide, run, or fight. In this instance you would want to try and \
        catch the shooter off guard and fight instead of staying hidden as the shooter has already discovered your hiding place.",
        exitKeys: ["listen"],
        exitTexts: ["Return to Listening..."]
    },
    run2: {
        name: "<h2><b>Running…</b></h2>",
        description: "<br>Now that you know the shooter is above you, you make your way to the door and run for the exit. You make it and once outside \
         you creep off into the forest out of sight of the second floor windows.",
        exitKeys: ["finish"],
        exitTexts: ["You hear a siren..."]
    },
    stay: {
        name: "<h2><b>Staying put.</b></h2>",
        description: "<br>Not wanting to risk it you stay put and wait it out. You don't know how much time has passed while you try to stay quiet and calm. \
        It isn't till you hear 'The shooter has been neutralized, everyone is safe to leave the building.' that you breathe a sigh of relief.", 
        exitKeys: ["finish"],
        exitTexts: ["You are safe."]
    },
    
    
    use: {
        name: "<h2><b>Using a weapon</b></h2>", //default is unarmed
        description: "<br>You leap out and attack the shoot catching them off guard. Around you other students jump up and help disarm the shooter. Unless you have no other choice, do not approach the shooter and if appraoched by shooter comply with the shooter's instructions.",
        exitKeys: ["finish2"],
        exitTexts: ["It's over..."]
    },
    finish: {
        name: "<h2><b>Police.</b></h2>",
        description: "<br>You make your way to the police blockade. When law enforcment reaches you, do not run or make any sudden movements and wait for their instruction. They ask you if you're okay and what you know about what happened. \
        They sit you down and let the shock wear off. You are given the numbers of trauma counselors and websites to help deal with what just happened.",
    //list of helpful resources??? 
    },
    
    finish2: {
        name: "<h2><b>Police.</b></h2>",
        description: "<br>While you and other students keep the shoot incapacitated another calls the police. They storm the building and quickly \
        find your class room. Law enforcment will need to identify that you are not the shooter, be quiet and compliant. 'We can take it from here.' They say, gesturing for you all to leave.",
        exitKeys: ["finish"],
        exitTexts: ["You make your way out..."] 
    },
    
    
}

// global variables
var currentRoom = 1;
var lastRoom = 20;



/*
    Print something on the webpage in display area
    Parameters: string to display
 */
function display(string) {
    var element = $("#js-output");
    element.html(`${element.html() + string}`);
    
}

/*
 * Clear display area
 */
function clearDisplayArea() {
    $("#js-output").html("");
}

/*
 * Display the current room
 * Parameters: Takes a room object
 */
function displayCurrentRoom(roomObj) {
    display("<p class='title'>" + roomObj.name + "</p>");
    if(roomObj.image){
        display("<img src='./img/" + roomObj.image + ".jpg' class='room-image'>");
    }
    display("<p class='description'>" + roomObj.description + "</p>");
}


/*
 * Display current exitKeys
 * Parameters: Takes a room object
 */
function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room
    display("<p>Choose your next move:</p><ul class='exits'>");
    for(i=0; i<roomObj.exitKeys.length; i++) {
        /* We want the HTML to look like this:
              <li><a onClick='javascript:newRoom("exitKey")'>Exit text</a></li>
        */
        exitHTML = "<button class='exitkeys' onClick='javascript:newRoom(\"" + 
                roomObj.exitKeys[i] + "\")'>" + roomObj.exitTexts[i] + "</button>";
        display(exitHTML);
    }
    display("</ul>");
}

function newRoom(nextRoom) {
	currentRoom = nextRoom;
    currentRoomObj = rooms[currentRoom];
    clearDisplayArea();
    displayCurrentRoom(currentRoomObj);
    if(currentRoom != "finish"){
        displayCurrentExits(currentRoomObj);
    }
}
// we need to wait until the webpage is loaded before we display room 1
document.addEventListener("DOMContentLoaded", function(event) { 
    newRoom('main')
  });