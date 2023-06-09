rooms = {
    main: {
        name: "<h1><b>Baskin Shooting Simulation</b></h1>",
        description: "<br>This is a simulation of a school shooting based in the University of Santa Cruz. This simulation will take you through choices on how to be prepared in advance for the best chances of survival.",
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
	    description: "<br>You arrive at Baskin Engineering where you are attending a class in room 152. ",
        exitKeys: ["enter"],
	    exitTexts: ["Enter the building."]
    },
    enter: {
	    name: "<h2><b>Inside Baskin Engineering</b></h2>",
        image: "cafe",
	    description: "<br>Opening the doors of the building you walk past the cafe, smelling the freshly brewed coffee and enter into the classroom.",
        exitKeys: ["begin"],
	    exitTexts: ["Walk into class."]
    },
    begin: {
	    name: "<h2><b>Baskin Engineering Room 152</b></h2>",
        image: "lecture",
	    description: "<br>You are sitting at a desk about halfway into a lecture when suddenly loud gunshots are heard nearby. An announcement echoes around the room. \
        'There is an active shooter in the building.' You look around at your fellow students and think about what to do. \
        <br/> If you hear gunshots or believe it to be gunshots, assume that there is a shooter on campus unless informed otherwise by administrators. ",
	    exitKeys: ["hide", "run", "panic"],
	    exitTexts: ["Quick hide!", "RUN", "Panic!"]
    },
    hide: {
	    name: "<h2><b>Baskin Engineering Room 152: Hiding</b></h2>",
        image: "hide",
	    description: "<br>You get down in between the row of chairs, covering yourself from the door. Everyone around you does the same. What do you do now?",
	    exitKeys: ["lights", "phone", "run", "block"],
	    exitTexts: ["Turn off the lights!", "Pick up phone", "RUN!", "Block the door." ]
    },
    run: {
	    name: "<h2><b>Running</b></h2>",
        image: "run",
	    description: "<br>You panic, not wanting to be caught and make a run for it! Running to a safe zone should be a priority, but without knowing the location of the shooter, this could put you in sight of danger. \
        In this event, if escape is not possible, hide. You want to shelter in place because you have no confirmation that the shooter won't see you. Without \
        knowing the location of the shooter the option to run is more dangerous than staying in place.",
	    exitKeys: ["begin"],
	    exitTexts: ["Return to Room 152"]
    },
    panic: {
	    name: "<h2><b>Baskin Engineering Room 152: Panicking</b></h2>",
        image: "panic",
	    description: "<br>You feel your chest tighten in fear. Looking around you see several people hide while a few make a run for the door.\
        During a stressful situation use breathing techniques, breath in through the nose and out through the mouth to restore calmness.",
	    exitKeys: ["run", "hide"],
	    exitTexts: ["Go with the runners.", "Hide."]
    },
    lights: {
	    name: "<h2><b>Baskin Engineering Room 152: Lights off</b></h2>",
        image: "lights",
	    description: "<br>You quickly locate the lights panel and sneak over to turn them off, staying low to the ground. \
        <br/> If in a room, lock the door, close the blinds, stay away from windows or doors, and spread out from others and try to keep cover. \
        <br/> While you wait, what do you do?",
	    exitKeys: ["silence", "call", "phone"],
	    exitTexts: ["Silence your phone", "Call a friend.", "Report the shooting."]
    },  
    phone: {
	    name: "<h2><b>Baskin Engineering Room 152: Pick up phone</b></h2>",
        image: "phone",
	    description: "<br>You take out your phone, what do you do? If it is safe to do so, call 911. Do not assume that the incident has already been reported", 
	    exitKeys: ["silence", "call"],
	    exitTexts: ["Silence your phone", "Call a friend."]
    },  
    silence: {
	    name: "<h2><b>Baskin Engineering Room 152: Silence your phone</b></h2>",
        image: "silence",
	    description: "<br>You quickly silence your phone and gesture to others to do the same. It would be bad to alert to the shooter that people were in the room.",
	    exitKeys: ["footsteps", "remind"],
	    exitTexts: ["Listen for footsteps.", "Remind others near you to silence their phones."]

    },
    call: {
        name: "<h2><b>Baskin Engineering Room 152: Call a friend</b></h2>",
        image: "call",
	    description: "<br>It is understandable to want to call someone and let them know what is happening, but it is safer to remain silent and not make noise while hiding.",
	    exitKeys: ["silence"],
	    exitTexts: ["Please, silence your phone."]
    },
    block: {
        name: "<h2><b>Baskin Engineering Room 152: Block the door</b></h2>",
        image: "block",
	    description: "<br>You block the door with desks and chairs to deter the shooting. When hiding you should lock and barricade doors with furniture if possible.",
	    exitKeys: ["wait"], //adding different endings since it goes backwards so new short story line here
	    exitTexts: ["Continue hiding."]
    },
    wait: {
        name: "<h2><b>Baskin Engineering Room 152: Waiting</b></h2>",
        image: "listening",
	    description: "<br>You wait in silence with the other students as you hear footsteps and running down the hallway outside. This is followed by loud shots. You have no idea what is happening, but you know it is safer\
        to stay put now that the door is locked and blocked. You wait for an all clear by the first responders.",
	    exitKeys: ["finish3"], //adding different endings since it goes backwards so new short story line here
	    exitTexts: ["All Clear."]
    },
    finish3: {
        name: "<h2><b>Police.</b></h2>",
        image: "police",
        description: "<br>After an unknown amount of time you hear a loud announcement 'This is an all clear call, the shooter has been neutralized. All remaining students and staff left in the building please evacuated now.'\
         You make your way to the police blockade. They ask you if you're okay and what you know about what happened. \
        They sit you down and let the shock wear off. You are given the numbers of trauma counselors and websites to help deal with what just happened.",
    //list of helpful resources??? 
        linkTexts: ["The NCTSN (National Child Traumatic Stress Network) helps provide resources for parents and caregivers on how to help their children get through the aftermath of traumatic events such as school shootings.", "The \
        American School Counselor Association also has many different resources to help students. As well as tips for parents to follow.", "Another resource is the American Psychological Association for tips on how to get children to\
        comprehend what just happened and move forward. This is geared towards mass shootings in general.", "youth.gov is the U.S. government website that helps you create, maintain, and strengthen effective youth programs. Included are youth facts, \
        funding information, and tools to help you assess community assets, generate maps of local and federal resources, search for evidence-based youth programs, and keep up-to-date on the latest, youth-related news. The following link is to their page\
         providing resources for mass shootings."],
        links: ["https://www.nctsn.org/what-is-child-trauma/trauma-types/terrorism-and-violence/school-shooting-resources", "https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting","\
        https://www.apa.org/topics/gun-violence-crime/mass-shooting-resources", "https://youth.gov/feature-article/resources-help-youth-cope-after-mass-shooting"]
    },
    footsteps: {
        name: "<h2><b>Baskin Engineering Room 152: Listening...</b></h2>",
        image: "listening",
        description: "<br>You stay quiet and listen… You hear gunshots somewhere above you and the sound of running in the hallway outside the door. \
        You think for a moment if you should try to make a run for it while believing the shooter is on the level above you. Evacuate if possible if deemed safe to do so away from the sound of the shooting to a safe zone.",
        exitKeys: ["run2", "stay"], 
        exitTexts: ["You make your escape.", "You stay hidden."]
    },
    remind: {
        name: "<h2><b>Baskin Engineering Room 152: Reminder...</b></h2>",
        image: "remind",
        description: "<br>You whisper to the person next to you, 'hey, silence your phone.' They nod and pass on the message.",
        exitKeys: ["listen", "weapon" ],
        exitTexts: ["Listen for footsteps.", "Look around for a weapon."]
    },
    //needs changing...
    listen: {
        name: "<h2><b>Baskin Engineering Room 152: Listening…</b></h2>",
        image: "footsteps",
        description: "<br>You listen closely, flinching when you hear the sound of gunshots in the hallway outside the room. You can feel your heartbeat \
         speed up as footsteps get closer. There is a moment when the footsteps stop… light enters the room.",
        exitKeys: ["stay2", "use", "use"],
        exitTexts: ["Stay hidden.", "Use weapon.", "Try to grab the shooter"], 
    },
    //needs changing...
    weapon: {
        name: "<h2><b>Finding a Weapon</b></h2>",
        image: "weapon",
        description: "<br>You look around and see a metal water bottle. You grab it. As a last resort to try to save your life, fight.",
        exitKeys:["listen"],
        exitTexts: ["You listen for footsteps."]
    },
    //needs changing...
    stay2: {
        name: "<h2><b>Staying hidden. Not the right choice.</b></h2>",
        image: "StayingHidden",
        description: "<br>There are three main choices when dealing with a school shooter: hide, run, or fight. In this instance you would want to try and \
        catch the shooter off guard and fight instead of staying hidden as the shooter has already discovered your hiding place.",
        exitKeys: ["listen"],
        exitTexts: ["Return to Listening..."]
    },
    run2: {
        name: "<h2><b>Running…</b></h2>",
        image: "building",
        description: "<br>Now that you know the shooter is above you, you make your way to the door and run for the exit. You make it and once outside \
         you creep off into the forest out of sight of the second floor windows.",
        exitKeys: ["finish"],
        exitTexts: ["You hear a siren..."]
    },
    stay: {
        name: "<h2><b>Staying put.</b></h2>",
        image: "stay",
        description: "<br>Not wanting to risk it you stay put and wait it out. You don't know how much time has passed while you try to stay quiet and calm. \
        It isn't till you hear 'The shooter has been neutralized, everyone is safe to leave the building.' that you breathe a sigh of relief.", 
        exitKeys: ["finish"],
        exitTexts: ["You are safe."]
    },
    
    //need changing...
    use: {
        name: "<h2><b>Using a weapon</b></h2>", //default is unarmed
        image: "fight",
        description: "<br>You leap out and attack the shooter catching them off guard. Around you other students jump up and help disarm the shooter. Unless you have no other choice, do not approach the shooter, and if approached by them comply with the shooter's instructions.",
        exitKeys: ["finish2"],
        exitTexts: ["It's over..."]
    },
    finish: {
        name: "<h2><b>Police.</b></h2>",
        image: "police",
        description: "<br>You make your way to the police blockade. When law enforcement reaches you, do not run or make any sudden movements and wait for their instruction. They ask you if you're okay and what you know about what happened. \
        They sit you down and let the shock wear off. You are given the numbers of trauma counselors and websites to help deal with what just happened.",
    //list of helpful resources??? 
        linkTexts: ["The NCTSN (National Child Traumatic Stress Network) helps provide resources for parents and caregivers on how to help their children get through the aftermath of traumatic events such as school shootings.", "The \
        American School Counselor Association also has many different resources to help students. As well as tips for parents to follow.", "Another resource is the American Psychological Association for tips on how to get children to\
        comprehend what just happened and move forward. This is geared towards mass shootings in general.", "youth.gov is the U.S. government website that helps you create, maintain, and strengthen effective youth programs. Included are youth facts, \
        funding information, and tools to help you assess community assets, generate maps of local and federal resources, search for evidence-based youth programs, and keep up-to-date on the latest, youth-related news. The following link is to their page\
         providing resources for mass shootings."],
        links: ["https://www.nctsn.org/what-is-child-trauma/trauma-types/terrorism-and-violence/school-shooting-resources", "https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting","\
        https://www.apa.org/topics/gun-violence-crime/mass-shooting-resources", "https://youth.gov/feature-article/resources-help-youth-cope-after-mass-shooting"]
    },
    //need changing...
    finish2: {
        name: "<h2><b>Police.</b></h2>",
        image: "finish2",
        description: "<br>While you and other students keep the shooter incapacitated another calls the police. They storm the building and quickly \
        find your class room. Law enforcement will need to identify that you are not the shooter, be quiet and compliant. 'We can take it from here.' They say, gesturing for you all to leave.",
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
    var element = $("#info");
    element.html(`${element.html() + string}`);
    
}

/*
 * Clear display area
 */
function clearDisplayArea() {
    $("#info").html("");
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
 * Display current links
 * Parameters: Takes a room object
 */
function displayCurrentLinks(roomObj) {
    // loop over all the exitKeys for this room
    if(roomObj.linkTexts){
        display("<p>Resources: </p><ul>");
        for(i=0; i<roomObj.links.length; i++) {

            linkHTML = `<a class= 'links' href= ${roomObj.links[i]}>` + roomObj.linkTexts[i] + "</a>";
            display(linkHTML);
        }
        display("</ul>");
    }
}

/*
 * Display current exitKeys
 * Parameters: Takes a room object
 */
function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room
    display("<p><br>Choose your next move:</p><ul class='exits'>");
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
    displayCurrentLinks(currentRoomObj);
    if(currentRoom != "finish"){
        if(currentRoom != "finish3"){
            displayCurrentExits(currentRoomObj);
        }
    }
    if(currentRoom == "lights"){
        console.log("yes");
        $("#js-output").css("color", "white");
        $("#js-output").css("background-color", "black");
        $(".exitkeys").css("color", "black");
    }
}
// we need to wait until the webpage is loaded before we display room 1
document.addEventListener("DOMContentLoaded", function(event) { 
    newRoom('main')
  });