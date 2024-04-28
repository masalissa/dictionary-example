let array = ["yahoo", "word", "book", "key",]

var inputVal = document.getElementById("inputVal")
var words = document.getElementById("words")
array.forEach(word => {
    var newP = document.createElement("p")
    newP.innerHTML = word
    words.appendChild(newP)
})


inputVal.addEventListener("keyup", function (e) {
    words.innerHTML = ""
    if (e.target.value == "") {
        words.innerHTML = ""
        array.forEach(word => {
            var newP = document.createElement("p")
            newP.innerHTML = word
            words.appendChild(newP)
        })
    } else {
        array.forEach(w => {
            if (w.toUpperCase().indexOf(e.target.value.toUpperCase()) != -1) {

                var newP = document.createElement("p")
                newP.innerHTML = w
                words.appendChild(newP)
            }
        })
    }
})