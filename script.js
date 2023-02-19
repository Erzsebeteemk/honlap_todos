
// T: Teljes lista törlése, legalul, jóváhagyással, +2 gombbal.
//Ezt a részt lehet függvénnyel tömöríteni.

$("#teljuj").click(() => {
    $("#teljuj").toggleClass("rakattintva")
    $("#megsteljuj").toggleClass("rejt")
    $("#tenyteljuj").toggleClass("rejt")
}
)

    $("#tenyteljuj").on("click",() => {
    $(".sor").remove()
    $("#megsteljuj").toggleClass("rejt")
    $("#tenyteljuj").toggleClass("rejt")
    $("#teljuj").toggleClass("rakattintva")
    }
    )
    
    $("#megsteljuj").on("click",() => {
        $("#megsteljuj").toggleClass("rejt")
        $("#tenyteljuj").toggleClass("rejt")
        $("#teljuj").toggleClass("rakattintva")
    }
    )



// T: Soronkénti törlés jóváhagyással, +2 gombbal (Töröl?, Mégsem), bármennyi sornál. //
let mittorol = null
let toroltorol = null
let vissza = null

$("ul").on("click",".torl",(event) => {
    mittorol = $(event.currentTarget).attr("data-szamozo")
    $("#torl"+mittorol).toggleClass("rejt")
    $("#ikon"+mittorol).toggleClass("rejt")
    $("#teny"+mittorol).toggleClass("rejt")
    $("#megs"+mittorol).toggleClass("rejt")
}
)


    $("ul").on("click", ".tenylproba",(event) => {
    toroltorol = $(event.currentTarget).attr("data-szamozo")
    $("#sor"+toroltorol).remove()
    }
    )
    
    $("ul").on("click", ".megsproba",(event) => {
    vissza = $(event.currentTarget).attr("data-szamozo") 
    $("#torl"+vissza).toggleClass("rejt")
    $("#ikon"+vissza).toggleClass("rejt")
    $("#teny"+vissza).toggleClass("rejt")
    $("#megs"+vissza).toggleClass("rejt")
    }
    )




// T: Újabb li-t tesz be a listába. A: fögombra kattintva a képernyőn, és B: Enter billentyűre kattintva a billentyűzeten.
// A. (Enterre kattintás(W3school keyboardEvent key)) és B. (főgombra kattintás=Listába feliratú gomb) 
//ugyanazt a függvényt használja
//(függvény: listába teszi az inputmező tartalmát) Működik.
let hanyadiksor = 1
let szoveg = null

let listabateszi = () => {
    szoveg      = $("#inputMezo").val()
    hanyadiksor = parseInt(hanyadiksor)+1

                            // D, 2021.10.09-én:  A szöveg-nek div-et adott. ( Előtte ennyi volt: ${szoveg} )
    $("ul").append(` <li   class="sor"  id="sor${hanyadiksor}"   data-szamozo="${hanyadiksor}">
                        <div class="szoveg">${szoveg}</div>
                        <button class="ikon" id="ikon${hanyadiksor}" data-szamozo="${hanyadiksor}" >  <i class="fas fa-space-shuttle"></i>   </button>
                        <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>

                        <button class="rejt tenylproba" id="teny${hanyadiksor}" data-szamozo="${hanyadiksor}" >Töröl?</button>
                        <button class="rejt megsproba" id="megs${hanyadiksor}" data-szamozo="${hanyadiksor}" >Mégsem</button>
                    </li> 
    `)
}

            //A. Enter-t nyomtam-e meg? Vagyis a billentyűlenyomás esemény függvény eseménybillentyűje Enter volt-e.
            //(HTML input tulajdonsághoz is kapcsolódik:    onkeydown="billty(event)") 
function billty (event) {
    var x = event.key
    if  (x == "Enter") {
            //Ha igen, akkor jöhet a listabateszi függvény.
        listabateszi ()
    }
}

            //B. főgomb-ra kattintva jöhet a listabateszi függvény,
$("#fogomb").click (()  => {
        listabateszi ()
}
)  



/* 2021.09.24.23:01  Ez csak az A változat (főgombra kattintva tesz listába elemet.)
Ehelyett most beteszek A (főgomb) + B (billty Enter) egy komplett változatot. 2021.09.24.23:01.
// T: Főgombra kattintva mindig újabb li-t tesz az ul-be, az input mezőből (input, val, li, ul)
let hanyadiksor = 1
let szoveg = null

$("#fogomb").click (()  => {

            szoveg      = $("#inputMezo").val()
            hanyadiksor = parseInt(hanyadiksor)+1

            $("ul").append(` <li   class="sor"  id="sor${hanyadiksor}"   data-szamozo="${hanyadiksor}">
                                ${szoveg}
                                <button class="ikon" id="ikon${hanyadiksor}" data-szamozo="${hanyadiksor}" >  <i class="fas fa-space-shuttle"></i>   </button>
                                <button class="torl" id="torl${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Törlés      </button>

                                <button class="rejt tenylproba" id="teny${hanyadiksor}" data-szamozo="${hanyadiksor}" >Töröl?</button>
                                <button class="rejt megsproba" id="megs${hanyadiksor}" data-szamozo="${hanyadiksor}" >Mégsem</button>
                            </li> 
            `)
}
)
*/

                                /*
                                <button class="jegy" id="jegy${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   J     </button>
                                <button class="megn" id="megn${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   M  </button>
                                <button class="rend" id="rend${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   S     </button>
                                <button class="szin" id="szin${hanyadiksor}"  data-szamozo="${hanyadiksor}" >   Sz        </button>
                                */



/*
T: minta:  Ne töröld ki, mert ez minta.
T: Dupla kattra piros-fekete betűszín-váltás (dblclick, 2 eset).

let most = null
$("ul").on("dblclick","li",(event) => {
                                        // console.log(event)
most = $(event.target).css("color")
                                        // console.log(most)                                      
if (`${most}` !== "rgb(255, 0, 0)")      {
    $(event.target).css("color", "rgb(255, 0, 0)")  }
                                        //Egy másik módszerrel toggleClass-szal 2 szín között váltogat:    $(event.target).toggleClass("blue")  és ennél a css-ben kell osztályt felvenni.
else if (`${most}` !== "rgb(0, 0, 0)")   {
    $(event.target).css("color", "rgb(0, 0, 0)")  }
}
)
*/


 
// T: 1 katt: kék-sárga... háttérszín váltás. Listasor háttérszíne.
katt = 0

$("ul").on("click","li",(event) => {
                                    //   console.log(event)
                                    //   console.log(event.target)

        // T: törlés gomb háttérszíne akkor sem változik meg, ha a Törlés gombra kattintunk.
        // event.target tartalmazza-e a torl osztályt?
        //Ha a Törlés gombra kattintok, akkor a valt nevű változóra true értéket ad.                                      
        let valt = $(event.target).hasClass("torl") 
                                    //   console.log(valt)  
        // Ha a valt értéke nem true, akkor fog lefutni az alatta levő rész.                                       
        if (!valt) {

                        katt = katt + 1
                                                            // console.log(katt)
                                if (katt === 1) {
                                    $(event.target).css("background-color", "rgb(54, 105, 173)")    }
                                else if (katt === 2) {
                                    $(event.target).css("background-color", "#fcc11e")     }
                                else if (katt === 3) {
                                    $(event.target).css("background-color", "rgb(255, 119, 0)")     }
                                else if (katt === 4) {
                                    $(event.target).css("background-color", "#a5dc1f")   }
                                else if (katt === 5) {
                                $(event.target).css("background-color", "rgb(155, 255, 255)")        }
                                else if (katt === 6) {
                                    $(event.target).css("background-color", "#8c9093")      }

                                else if (katt === 7) {
                                $(event.target).css("background-color", "rgb(255, 255, 255)")   
                        katt = 0                                                                    }
        }       //ez a kapcsos zárójel a if (!valt) {    -hez tartozik
}
)



// T: Színminta az inputmező felett (ikonhoz, betűszínhez kapcsolódik.
let szinekikon = ["red", "blue", "green", "white", "black", "yellow", "pink"] 

szinekikon.forEach(function (szinikon) {
    $(".kontenerikon").append("<div class='szinboxikon'> </div>")
    $(".kontenerikon div:last-of-type").css("background-color", szinikon)
}
)



// T: Ikonra kattintva a listaelem betűszíne változik meg (legfelül van a színsáv).
kattikon = 0
let mitszinezikon = null

$("ul").on("click",".ikon",(event) => {
                                       // console.log(event)
    kattikon = kattikon + 1
                                       // console.log(kattikon)
    mitszinezikon = $(event.currentTarget).attr("data-szamozo")
                                       // console.log(mitszinezikon)
            if (kattikon === 1) {
                $("#sor"+mitszinezikon).css("color", "red")  }       
            else if (kattikon === 2) {
                $("#sor"+mitszinezikon).css("color", "blue")  }       
            else if (kattikon === 3) {
                $("#sor"+mitszinezikon).css("color", "green")  }       
            else if (kattikon === 4) {
                $("#sor"+mitszinezikon).css("color", "white")   }       
            else if (kattikon === 5) {
                $("#sor"+mitszinezikon).css("color", "black")   }       
            else if (kattikon === 6) {
                $("#sor"+mitszinezikon).css("color", "yellow")  }       
            else if (kattikon === 7) {
                $("#sor"+mitszinezikon).css("color", "pink")         
    kattikon = 0                                                }
}
)



// T: Színminta az inputmező felett, listasorok színe.
let szinek = ["rgb(54, 105, 173)", "#fcc11e", "rgb(255, 119, 0)", "#a5dc1f", "rgb(185, 255, 255)", "#8c9093", "rgb(255, 255, 255)"] 

szinek.forEach(function (szin) {
    $(".kontener").append("<div class='szinbox'> </div>")
    $(".kontener div:last-of-type").css("background-color", szin)
//    $(".kontener div:last-of-type").css("display", inline)    ez a sor a videóban volt, de itt nem működött.
}
)



/* Ez a 3 ugyanaz: Függvény definiálás      =>   ill.  function  -nal
$("#ujelem").on("click", () => {
............................
}
)


$("#ujelem").click( () => {
............................
}
)

$("#ujelem").click( function () {
............................
}
)
*/



// T: InputMező üres lesz, ha egy gombra (#ujelem) rákattintunk.
$("#ujelem").click( () => {
    $("#inputMezo").val("")
}
)



// T: Véletlenszerűen megváltoztatja a színét az oldalnak, ha egy gomboot (#veletlenhatter) megnyomok. JQuery-vel.
function veletlen(number) {
    return Math.floor(Math.random() * (number+1)  )
}

$("#veletlenhatter").click( function() {
                            // console.log("háttérgomb")
        const ujvaltozat = 'rgb(' + veletlen(255) + ',' + veletlen(255) + ',' + veletlen(255) + ')'
        $("body").css("background-color", ujvaltozat)
}
)
/*
Mit csináltam tartalmilag?
Először definiálok egy véletlen nevű fg-t, ahol number a bemenet. Ez a fg. kiad egy 0-266 közötti számot
Math.floor a szám egész része, Math(random) 0=<ilyen számot véletlenszerűen generál<1, szorozza a numberral (majd 255 lesz a beadott number a fg meghívásakor)
így a végén 0 és 255 közötti vagy azzal egyenlő véletlen szám lesz a return visszaadása a fg-nek.
#veletlenhatter id-jű gombra kattintva meghívódik az előbb definiált fg, majd a body háttérszín eszerint változik.
!!!!!!!!!!!!!!!!!!!ujváltozat ne legyen idézőjelben !!!!!!!!!!!!!!!!!!!!!!!//
*/
