var introList = new Array("Fight", "Nevertheless", "March", "Human Rights", "As long as", "Because", "Revolution", "Vote", "Still", "Smash");
var pointsList = new Array("the", "she", "for", "are", "like", "we", "girl style", "out", "better", "Love");
var sumList = new Array("Power", "Now", "Human Rights", "Feminism", "Persisted", "Progress", "Tear sh*t up");

var meOne = "";

var pointOne = "This is Point One";
var intro = " ";
var sum = " ";
var bigArgue = $("bigArgue");

function $(id) {
    return document.getElementById(id);
}


function changeThree() {

    var one = Math.random() * pointsList.length;
    one = Math.floor(one);

    var two = Math.random() * pointsList.length;
    two = Math.floor(two);
    while (one == two) {
        two = Math.random() * pointsList.length;
        two = Math.floor(two);
    }

    var three = Math.random() * pointsList.length;
    three = Math.floor(three);
    while (two == three || three == one) {
        three = Math.random() * pointsList.length;
        three = Math.floor(three);
    }

    var i = Math.random() * introList.length;
    i = Math.floor(i);

    var s = Math.random() * sumList.length;
    s = Math.floor(s);

    pointOne = pointsList[one];

    intro = introList[i];
    sum = sumList[s];





    wordOne.innerHTML = intro;
    wordTwo.innerHTML = pointOne;
    wordThree.innerHTML = sum;
}