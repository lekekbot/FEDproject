//declaring constants
const modal = document.querySelector(".work-modal")
const tableimg = document.querySelectorAll(".work-table")
const container = document.querySelector('.imagetiles')
const childNode = container.querySelectorAll('p')
const content = document.querySelector('.modal-content')

// declare array
var arr = []

//push project names into array
for (i = 0; i < childNode.length; i++) {
    arr.push(childNode[i].innerHTML)
}

//declare array to put inside modal
var txtarr = [
    `<p>A hangman game programmed using HTML, CSS and JS. Animations are included as well.<br><br>
    You can try this game by clicking on the button below.</p>
    <a href="../hangman/index.html" class="hangman-btn" target="_blank" class="hangmanbtn">Play the Game</a>`,
    "<p>Hotel Booking website that features a booking system.</p>",
    "<p>Pizza Delivery website which features a delivery system.</p>",
    "<p>Calory calculator which is done on iOS. It calculates your BMI to see if your are healthy or not.</p>"
]
// gives all img a click function
tableimg.forEach(imgs => {
    imgs.addEventListener('click', () => {

        //when clicked, get its clicked data
        var txt = imgs.getElementsByTagName('p')[0].innerHTML;

        var index = 0
        //see if there is a matching name
        for (i = 0; i < tableimg.length; i++) {
            if (arr[i] == txt) {
                break
            }
            else {
                index++
            }
        }

        //give modal data
        var img = imgs.getElementsByTagName('img')[0].src;
        document.getElementById('modal-title').innerHTML = txt;
        document.getElementById('modal-img').src = img
        document.getElementById('modal-text').innerHTML = txtarr[index]
        modal.classList.add('modal-open')
        content.classList.add('modal-open')

        //one picture was too big, this is to make it smaller
        if (img.indexOf("calorie") != -1) {
            document.getElementsByClassName('md-img-p')[0].style.width = "30%"
        } else {
            document.getElementsByClassName('md-img-p')[0].style.width = "50%"
        }
    })
})

// when the "X" is clicked
var x = document.querySelector('.eksdee')
x.addEventListener("click", function () {
    modal.classList.remove('modal-open')
    content.classList.remove('modal-open')
})

// when you click outside the modal
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains('modal-open')) {
        modal.classList.remove('modal-open')
        content.classList.remove('modal-open')
    }
})