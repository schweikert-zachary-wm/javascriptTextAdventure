/*** Created by zachs_000 on 9/22/2015.*/
/*** Created by session1 on 9/18/15.*/

alert("Bear Grylls simulation.");
var question1 = prompt("You begin your journey in a forest" + "                                            Do you; look for high ground, look for water, or create a signal?");

//Look for water//

if( question1 == "look for water"){
    var question211 = prompt("Do you look for water to the North or the South?");
    if (question211 == "North") {
        var question212 = prompt("You find a stream.                                                Do you follow the stream, or drink?");
        if (question212 == "follow the stream") {
            alert("You follow the stream and it leads you to civilization.")
        }
        if (question212 == "drink"){
            alert("You start to feel sick. The water was contaminated. It stops you from moving. You perish in the wilderness.")
        }
    }
    if (question211 == South) {
        alert("Sadly you find nothing up stream. Night falls but you keep walking forward. You collapse from exhaustion.")
    }
}


//high ground//

if( question1 == "look for high ground") {
    var question12 = prompt("You walk two miles and are very tired. You see a city far off in the distance." + "                                                                          Do you; rest for a while, create a signal, or walk toward city. ");
    if(question12 == "rest for a while") {

        var question121 = prompt("It is sundown now" + "                                                             Do you; sleep on the ground, create a signal");
        if( question121 == "sleep on the ground"){
            alert("You die of hypothermia over the night")
        }
        if( question121 == "create a signal"){
            alert("You create a fire and people see it. You are rescued.")
        }
    }

    if(question12 == "create a signal"){
        var question131 = prompt("Do you create a fire or a sign?");
        if(question131 == "fire"){
            alert("You build a fire but it is too bright outside to see during the day. You freeze during the night since you used all your firewood already.")
        }
        if (question131 == "sign") {
            alert("You attempt to make a sign but are too tired to. A helicopter flies over but your sign is not completed so it doesn't stop. Morale runs out, you perish on the mountain top.")
        }
    }










}


//if(question12 == "build a shelter")      Is not working

//confirm(The yes or no questions)