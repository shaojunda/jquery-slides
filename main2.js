$(function() {
  var allButtons = $('.buttons > button')
  for (let index = 0; index < allButtons.length; index++) {
    $(allButtons[index]).on('click', function(event) {
      let $currentTarget = $(event.currentTarget)
      let targetIndex = $currentTarget.index()
      console.log(targetIndex)
      $('.images').css({
        transform: 'translatex('+ targetIndex * -300 +'px)'
      })
      activeButton($currentTarget)
    })
  }

  $(".window").on('mouseenter', function() {
    clearInterval(timerId)
  })

  $('.window').on('mouseleave', function() {
    setTimer()
  })

  function activeButton($button) {
    $button.addClass('red').siblings('.red').removeClass('red')
  }

  function playSlide(index) {
    allButtons.eq(index).trigger('click')
  }

  setTimer.call()

  let n = 0
  let size = $("img").length
  var timerId
  function setTimer() {
    timerId = setInterval(() => {
      playSlide(n % size)
      n += 1
    }, 1000);
  }
})
