let id = null;
let direction = 1;

const now = new Date();
const hour = now.getHours();
const day = now.getDay();


function myMove(){
    const elem = document.getElementById("fietser");
    let pos = 0;

    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if (pos >= 1435){
            direction = -1;
            elem.style.transform = "scaleX(-1)";
            
        } else if (pos <=0){
            direction = 1;
            elem.style.transform = "scaleX(1)"; 

        }
        pos += direction;
        elem.style.left = pos + "px";
    }

}


 let slideIndex = 1;
 showSlides(slideIndex);
 let Interval = setInterval(autoSlide,5000);

 
 function PlusSlides(n){
    showSlides(slideIndex += n);
    resetTimer();
 }


 function showSlides(n){
    
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length
    }    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
 }

 function autoSlide() {
    slideIndex++
    showSlides(slideIndex)
 }


 function resetTimer(){
    clearInterval(Interval);
    Interval = setInterval(autoSlide,5000);
 }

 function storeStatus(){
    const open = document.getElementById("open-melding");
    const closed = document.getElementById("closed-melding");

    open.style.display = "none";
    closed.style.display = "none";

    if (day != 6 && day != 0){
        if (hour >= 9 && hour <= 21){
            open.style.display = "block";
        }
    }
    else {
        closed.style.display = "block";
    }
 }
 window.onload = storeStatus;

 function fiets1Expand(){
    const fiets1 = document.getElementById("fiets1");
    const fiets2 = document.getElementById("fiets2");
    const fiets3 = document.getElementById("fiets3");
    const fiets4 = document.getElementById("fiets4");

    const link = document.getElementById("huurpagina-link");
    link.style.display = "none";

    fiets1.style.display = "none";
    fiets2.style.display = "none";
    fiets3.style.display = "none";
    fiets4.style.display = "none";

    const fiets1Expand = document.getElementById("fiets1-expand");

    fiets1Expand.style.display = "grid";

 }
 function fiets2Expand(){
    const fiets1 = document.getElementById("fiets1");
    const fiets2 = document.getElementById("fiets2");
    const fiets3 = document.getElementById("fiets3");
    const fiets4 = document.getElementById("fiets4");

    const link = document.getElementById("huurpagina-link");
    link.style.display = "none";

    fiets1.style.display = "none";
    fiets2.style.display = "none";
    fiets3.style.display = "none";
    fiets4.style.display = "none";

    const fiets2Expand = document.getElementById("fiets2-expand");

    fiets2Expand.style.display = "grid";

 }
 function fiets3Expand(){
    const fiets1 = document.getElementById("fiets1");
    const fiets2 = document.getElementById("fiets2");
    const fiets3 = document.getElementById("fiets3");
    const fiets4 = document.getElementById("fiets4");


    const link = document.getElementById("huurpagina-link");
    link.style.display = "none";

    fiets1.style.display = "none";
    fiets2.style.display = "none";
    fiets3.style.display = "none";
    fiets4.style.display = "none";

    const fiets3Expand = document.getElementById("fiets3-expand");

    fiets3Expand.style.display = "grid";

 }
 function fiets4Expand(){
    const fiets1 = document.getElementById("fiets1");
    const fiets2 = document.getElementById("fiets2");
    const fiets3 = document.getElementById("fiets3");
    const fiets4 = document.getElementById("fiets4");

    const link = document.getElementById("huurpagina-link");
    link.style.display = "none";

    fiets1.style.display = "none";
    fiets2.style.display = "none";
    fiets3.style.display = "none";
    fiets4.style.display = "none";

    const fiets4Expand = document.getElementById("fiets4-expand");

    fiets4Expand.style.display = "grid";

 }
 function Return() {
    const fietsenExpand = document.getElementsByClassName("fietsen-expand");
    for (let i = 0; i < fietsenExpand.length; i++) {
        fietsenExpand[i].style.display = "none";
    }

    const fiets1 = document.getElementById("fiets1");
    const fiets2 = document.getElementById("fiets2");
    const fiets3 = document.getElementById("fiets3");
    const fiets4 = document.getElementById("fiets4");

    const link = document.getElementById("huurpagina-link");
    link.style.display = "block";


    fiets1.style.display = "grid";
    fiets2.style.display = "grid";
    fiets3.style.display = "grid";
    fiets4.style.display = "grid";

 }

 
    function addToCart(name, price, image) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || []; // Get existing cart or create empty array
    
        cart.push({ name, price: parseFloat(price), image }); // Add new item
    
        sessionStorage.setItem("cart", JSON.stringify(cart)); // Save cart back to sessionStorage
    
        console.log("Cart after adding item:", sessionStorage.getItem("cart")); // Debugging log
    }

    function Rent(){
        const checkBoxes = document.querySelectorAll(".checkbox")
        const isChecked = Array.from(checkBoxes).some(checkbox => checkbox.checked);
        var dagen = document.getElementById("huren-dagen").value;
        var labelcontent = document.getElementById("huren-voor");

        labelcontent.textContent = `Huren voor ${dagen} dagen`;


    
        if (isChecked){

        if (dagen >= 1){

            const aanhangFietsCheckBox = document.getElementById("Aanhangfiets-checkbox");
            const aanhangFietsIsChecked  = aanhangFietsCheckBox.checked;
            let tabel = document.querySelector(".fietsen-table");
            let vraag = document.getElementById("hoeveel-dagen");
            let input = document.getElementById("huren-dagen");
            let button = document.getElementById("huur-button");


            //Roep hier je form aan

            let form = document.getElementById("huur-form");

            form.style.display = "block";
            tabel.style.display = "none";
            vraag.style.display = "none";
            input.style.display = "none";
            button.style.display = "none";


            if (aanhangFietsIsChecked){

                let aanhangFietsHuren = document.getElementById("Aanhangfiets");

                aanhangFietsHuren.style.display = "grid";

            }
            const bakFietsCheckBox = document.getElementById("Bakfiets-checkbox");
            const bakFietsIsChecked  = bakFietsCheckBox.checked;

            if(bakFietsIsChecked){

                let bakFietsHuren = document.getElementById("Bakfiets");

                bakFietsHuren.style.display = "grid";
            }

            const driewielFietsCheckBox = document.getElementById("Driewielfiets-checkbox");
            const driewielFietsIsChecked  = driewielFietsCheckBox.checked;

            if (driewielFietsIsChecked){

                let driewielFietsHuren = document.getElementById("Driewielfiets");

                driewielFietsHuren.style.display = "grid";
            }

            const elektrischeFietsCheckBox = document.getElementById("Elektrischefiets-checkbox");
            const elektrischeFietsIsChecked  = elektrischeFietsCheckBox.checked;

            if (elektrischeFietsIsChecked){

                let elektrischeFietsHuren = document.getElementById("Elektrischefiets");

                elektrischeFietsHuren.style.display = "grid";
            }

            const kinderFietsCheckBox = document.getElementById("Kinderfiets-checkbox");
            const kinderFietsIsChecked  = kinderFietsCheckBox.checked;

            if (kinderFietsIsChecked){

                let kinderFietsHuren = document.getElementById("Kinderfiets");

                kinderFietsHuren.style.display = "grid";
            }

            const ligFietsCheckBox = document.getElementById("Ligfiets-checkbox");
            const ligFietsIsChecked  = ligFietsCheckBox.checked;

            if (ligFietsIsChecked){

                let ligFietsHuren = document.getElementById("Ligfiets");

                ligFietsHuren.style.display = "grid";
            }

            const omaFietsCheckBox = document.getElementById("Omafiets-checkbox");
            const omaFietsIsChecked  = omaFietsCheckBox.checked;

            if (omaFietsIsChecked){

                let omaFietsHuren = document.getElementById("Omafiets");

                omaFietsHuren.style.display = "grid";
            }

            const raceFietsCheckBox = document.getElementById("Racefiets-checkbox");
            const raceFietsIsChecked  = raceFietsCheckBox.checked;

            if (raceFietsIsChecked){

                let raceFietsHuren = document.getElementById("Racefiets");

                raceFietsHuren.style.display = "grid";
            }

            const speedpedelecCheckBox = document.getElementById("Speedpedelec-checkbox");
            const speedpedelecIsChecked  = speedpedelecCheckBox.checked;

            if (speedpedelecIsChecked){

                let speedpedelecHuren = document.getElementById("Speedpedelec");

                speedpedelecHuren.style.display = "grid";
            }

            const stadsFietsCheckBox = document.getElementById("Stadsfiets-checkbox");
            const stadFietsIsChecked  = stadsFietsCheckBox.checked;

            if (stadFietsIsChecked){

                let stadsFietsHuren = document.getElementById("Stadsfiets");

                stadsFietsHuren.style.display = "grid";
            }

            const vouwFietsCheckBox = document.getElementById("Vouwfiets-checkbox");
            const vouwFietsIsChecked  = vouwFietsCheckBox.checked;

            if (vouwFietsIsChecked){

                let vouwFietsHuren = document.getElementById("Vouwfiets");

                vouwFietsHuren.style.display = "grid";
            }

            const zitFietsCheckBox = document.getElementById("Zitfiets-checkbox");
            const zitFietsIsChecked  = zitFietsCheckBox.checked;

            if (zitFietsIsChecked){

                let zitFietsHuren = document.getElementById("Zitfiets");

                zitFietsHuren.style.display = "grid";
            }
 

            














            
        }
        else{
            alert("selecteer hoelang u de fiets wil lenen");
            
        }
    }
    else{
        alert("Selecteer de fiets die u wil huren");    }


    }


    function showMessage(){

        const naam = document.getElementById("Voornaam_Achternaam").value.trim();
        const email = document.getElementById("email").value.trim();
        const adres = document.getElementById("Adres").value.trim();
        const stad = document.getElementById("Stad").value.trim();
        const postcode = document.getElementById("Postcode").value.trim();

        if (naam != "" && email != "" && adres != "" && stad != "" && postcode != ""){
            alert("Gegevens zijn verstuurd.");
            return true;
        }
        else{
            alert("Vul uw gegevens in");
            return false;
        }

        



    
    
}

 

