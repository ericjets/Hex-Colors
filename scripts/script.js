var gradientPanelText = document.getElementById("myText");
document.getElementById("myBtn").addEventListener("click", hexGenerator);

const directions = ["to right", "to left"]
const hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7",
                    "8", "9", "A", "B", "C", "D", "E", "F"];

function hexGenerator() {
    let hex1 = "";
    let hex2 = "";
    for (let i = 0; i < 6; i++){
        let randomNumber1 = Math.floor(Math.random() * 16);
        let randomNumber2 = Math.floor(Math.random() * 16);
        hex1 += hexDigits[randomNumber1];
        hex2 += hexDigits[randomNumber2];
    }

    let direction = null;
    if (hex2[5] % 2 == 0) {
        direction = "to right";
    } else {
        direction = "to left";
    }
    
    let result = `linear-gradient(${direction}, #${hex1}, 
                    #${hex2})`;
    
    gradientPanelText.textContent = result;
    document.body.style.background = result;
    
    console.log(result);
}

