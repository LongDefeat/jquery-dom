// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

console.log("Let's get ready to party with jQuery!");

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$("article img").addClass("img-center");

//Remove the last paragraph in the article.
$("p").last().remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
// function time(){
//   var number = Math.floor(Math.random());
//   $('h1').text(number);
// }

let title = $("h1").addClass("title");
$(".title").css("font-size", Math.random() * 100);

//Add an item to the list; it can say whatever you want.
$("ol").append("<li>New item on the list!!</li>");

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("ol").remove();
$("aside").append("<p>I'm sorry that aside, it was a stupid idea</p>");

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css("background-color", "rgb(" + red + "," + blue + "," + green);
});

//Add an event listener so that when you click on the image, it is removed from the DOM.
// $("img").on("click", function () {
//     $(this).fadeOut(3000, function () {
//       $(this).remove()
//     }
$("img").on("click", (evt) => {
  $(evt.target).remove();
});
