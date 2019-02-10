var allButtons = $('#buttons > button')

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(event) {
    var currentTarget = $(event.currentTarget)
    var index = $(event.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translateX(' + p + 'px)'
    })
    n = index
    currentTarget.addClass('red').siblings('.red').removeClass('red')
  })
}

function activeButton($button) {
  $button.addClass('red').siblings('.red').removeClass('red')
}

function playSlide(index) {
  allButtons.eq(index).trigger('click')
}

function setTimer() {
  timerId = setInterval(() => {
    n += 1
    playSlide(n % size)
  }, 1000)
}

var n = 0;
var size = $("#images").children().length
var timerId
setTimer.call()

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
  setTimer.call()
})
