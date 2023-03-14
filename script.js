let container = document.querySelector('.container');
let count = document.getElementById('count');
let amount = document.getElementById('amount');
let select = document.getElementById('movie');
let seats = document.querySelectorAll('.seat:not(.reserved)')

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e){

        //console.log(e)
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal();
    }
   
});

select.addEventListener('change', function(e){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected')
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    })

    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    console.log(selectedSeatIndex)

    let seatSelectedCount = selectedSeats.length
    count.innerText = seatSelectedCount;
    amount.innerText = seatSelectedCount * select.value;

    saveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage(){

        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatNumber'))
        const selectedMovieIndex = localStorage.getItem('selectedMovie');
}


function saveToLocalStorage(indexs){

    localStorage.setItem('selectedSeatNumber', JSON.stringify(indexs))
    localStorage.setItem('selectedMovie', select.selectedIndex)

}


