
function myFunction() {


    let A = Math.floor(Math.random() * 6) + 1;

    let B = "images/dice" + A + ".png";

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", B);


    let C = Math.floor(Math.random() * 6) + 1;

    let D = "images/dice" + C + ".png";

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", D);


    if (A > C) {

        document.querySelector("h1").innerHTML = "玩家一獲勝";
    }


    else if (C > A) {
        document.querySelector("h1").innerHTML = "玩家二獲勝";
    }


    else {

        document.querySelector("h1").innerHTML = "平手";
    }

}
