let box = document.getElementById("box");
box.classList.add("active");
box.classList.remove("active");

function checkAge() {
    let user_text = document.getElementById("ageinput").value;

        if (!user_text) {
        document.getElementById("result").innerText = "your age, not your ex's love for you";
        return;
    }

    if (isNaN(user_text)) {
        document.getElementById("result").innerText = "cat 3 m, gion mat voi t a? tuoi cua m le len";
        return;
    }

    if (user_text < 17) {
        document.getElementById("result").innerHTML = "my dih is younger than lil bro💔"

    } else if (user_text >= 17 && user_text <= 22) {
        document.getElementById("result").innerHTML = "Mommmy🌹";

    } else if (user_text == 36) {
        document.getElementById("result").innerHTML = "rau ma🍀🍀🍀";

    } else if (user_text == 67) {
        document.getElementById("result").innerHTML = "DID YOU JUST SAY YOUR AGE IS 67????";

    } else if (user_text > 70) {
        document.getElementById("result").innerHTML = "Do you live in Jurassic Park bro?";

    } else {
        document.getElementById("result").innerHTML = "expired.";
    }
}
