const myFunction = function(event) {
  console.log('Hooray!!');
  scrollOver = 'yes';
  console.log(scrollOver);
  keypressed = event.key;
  console.log(keypressed);

  // Challenge
  document.querySelector('#display').innerText = event.key;
  document.querySelector('#test').style.backgroundColor = "red";
}
// Use `document.querySelector()` to obtain a reference to the `#test` element.
const testElement = document.querySelector('#test');
// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.
document.addEventListener('keydown', myFunction);