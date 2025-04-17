let isMessageDisplayed = false; //So message doesnt get replaced by jersey number

document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("message");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", async () => {
        const newP = document.createElement("p");
        try {
            const res = await fetch("/api/lebron");
            const data = await res.json();
            message.textContent = data.text;
            isMessageDisplayed = true;
        } catch(error) {
            message.textContent = "There was an error";
            console.log("Error: " + error);
        }

        
    });

    //Cycle color scheme
    const themes = ["cavs", "heat", "cav", "lakers"];
    const jerseyNumbers = [23, 6, 23, 23]
    let current = 0;

    setInterval(() => {
        document.body.classList.remove(...themes);
        document.body.classList.add(themes[current]);

        //Ensure jersey number doesnt replace message from api
        if (!isMessageDisplayed){
            document.getElementById("message").textContent = jerseyNumbers[current];
        }

        current = (current + 1) % themes.length;
    }, 5000); // switch every 5 seconds

});


