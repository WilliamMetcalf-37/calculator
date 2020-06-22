var calcHTML = document.querySelector(".container")

const calcbuilder = () => {

  calcHTML.innerHTML = `<div class="body">
  
  <div class="Display">
    <input class="displayText" type="textarea" disabled/>
  </div>
  <div class="row1 buttonRow">
  <button id="Number--1" value="1">1</button>
  <button id="Number--2" value="2">2</button>
  <button id="Number--3" value="3">3</button>
  <button id="Button--plus">+</button>
  <button id="Button--minus">-</button>
  </div>
  <div class="row2 buttonRow">
  <button id="Number--4" value="4">4</button>
  <button id="Number--5" value="5">5</button>
  <button id="Number--6" value="6">6</button>
  <button id="Button--multiply">*</button>
  <button id="Button--divide">/</button>
  </div>
  <div class="row3 buttonRow">
  <button id="Number--7" value="7">7</button>
  <button id="Number--8" value="8">8</button>
  <button id="Number--9" value="9">9</button>
  <button id="Button--squared">XX</button>
  <button id="Button--sqrt">root</button>
  </div>
  <div class="row4 buttonRow">
  <button id="Button--clear" focus>Clear</button>
  <button id="Number--0" value="0">0</button>
  <div></div>
  <button id="Button--equals">=</button>
  <button id="Button--cubed">Cubed</button>
  
  </div>
  <div class="details">
  <input class="detailText" type="textarea" disabled/>
  <div>`
}
export default calcbuilder