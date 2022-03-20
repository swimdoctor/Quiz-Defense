import * as express from "express"
const app = express()
const port = 3000
let activeSet : Array<card> = [new card("hablo", "i speak"), new card("说", "i speak")]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function showNext() {
  let displayed : card = activeSet[0]
  document.getElementById("card").textContent = displayed.Term
  activeSet = activeSet.slice(1)
  //randomize
  shuffleArray(activeSet)
  activeSet.push(displayed)
}

function flip() {
  document.getElementById("card").textContent = activeSet[activeSet.length - 1].Definition
  document.getElementById("card").style.backgroundColor = "rgb(50, 255, 50)";

}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function goToMenu(){
  document.getElementById("card").style.width = "500px";
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  /*x.style.display = "block";
  x.style.display = "none";*/
}

function goToSetCreation(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  
}

function goToPlaySet(){
  showNext()
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
}