const width = 600

var slides = $(".slides div")
var i = 0 //index
var j = 0 //position

setInterval(right, 3000)

$('#prev').on('click', left)
$('#next').on('click', right)

function left() {
        i--
        if(i>=0) {  
            j = width+j
        }
        else {
            j = -width * i
            i = slides.length - 1
        }
        slides.eq(0).animate({ 
            marginLeft: j 
        })
}

function right() {
        i++
        if(i<slides.length) { 
            j = j-width
        }
        else {
            j = 0
            i = 0
        }
        slides.eq(0).animate({ 
            marginLeft: j 
        })
}
