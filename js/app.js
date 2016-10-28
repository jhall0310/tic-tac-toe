// wait for the DOM to finish loading
console.log('JavaScript ready ')
$(document).ready(function() {
  // all code to manipulate the DOM
  // }goes inside this function
// var squares = ['aOne', 'aTwo', 'aThree', 'bOne', 'bTwo', 'bThree','cOne', 'cTwo','cThree'];

  $('.box').on("click", function handleClick(event){
    $('<p>X</p>').appendTo('this#id');
    })

    $('.box').on("dblclick", function handleClick(event){
      $('<p>O</p>').appendTo('.box');
      })

})
