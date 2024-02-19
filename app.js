const allTickets = document.getElementsByClassName("tickets");
// console.log(allTickets)
let count = 16;
let totalSeat = 0;

for (const ticket of allTickets) {
    ticket.addEventListener("click", function (e) {

        count = count - 1;
        totalSeat = totalSeat + 1;

        document.getElementById("seatCount").innerText = count;
        document.getElementById("TotalSeatCount").innerText = totalSeat;

        setInnerText("seatCount", count);
        const seatName = e.target.innerText

        const price = document.getElementById("price").innerText;
        const seatPrice = parseInt(price);
        const grandPrice= seatPrice * totalSeat ;

        const grandPricePlace= document.getElementById("totalPrice");
        grandPricePlace.innerText = grandPrice;
        const seatClassType = "1st Class"

        const selectedContainer = document.getElementById("forPlaceTicket");
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        p1.innerText = seatName;
        
        const p2 = document.createElement("p");
        p2.innerText = seatClassType
        
        const p3 = document.createElement("p");
         p3.innerText = seatPrice;
        

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);
        
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// function setBgColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }