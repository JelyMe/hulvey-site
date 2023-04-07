async function task(i) {
    if (i < list.length - delays.length) await timer(100);
    else await timer(delays[i - (list.length - delays.length)]);
    if (list[i] == "Christopher"){
      text.style.display = "none";
      img.style.display = "block";
      img.src = "christopher1.png";
      img.style.width = "230px";
    }
    else if(list[i] == "Coma"){
      text.style.display = "none";
      img.style.display = "block";
      img.src = "coma1.png";
      img.style.width = "230px";
    }
    else{
    text.style.display = "block";
    img.style.display = "none";
    text.textContent = list[i];
    text.style.fontFamily = fonts[i % 3];
    text.style.fontSize = fontSizes[i % 3];
    }
  }
  function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async function main() {
    for (let i = 0; i < list.length; i++) {
      await task(i);
    }
    text.style.fontSize = "4em";
  }
  var fonts = ["Poppins", "Bebas Neue", "Canela"];
  var fontSizes = ["1.5em", "2em", "2.5em"];
  var delays = [200, 300, 400];
  var list = [
    "WALK",
    "Closer",
    "Have Me",
    "Beautiful",
    "Coma",
    "Christopher",
    "Still 40 Deep",
    "Heaven Up Above",
    "OTHERSIDE",
    "Don't Play Cheap",
    "Different",
    "BRKNHRT",
    "Prelude",
    "Hulvey Vol.2",
    "Hulvey Vol.1",
    "Wasted Times",
    "Christopher",
    "Michael",
    "Hulvey"
  ];
  var text = document.getElementById("main-text");
  var img = document.getElementById("main-img");
  
  main();