//csak backend javítanék ezért a változó nevek úgy vannak elnevezve hogy mi kapnának értéknek

let url
let textsize
let spacing
let color
let side = "float-start"

function imgChange(){
  const img = document.getElementById('img')
  const p = document.getElementById('longtext')
  url = document.getElementById('url').value 
  textsize = document.getElementById('textsize').value
  spacing = document.getElementById('spacing').value
  color = document.getElementById('color').value
  if(url == ""){
    console.log("url empty")
  }
  else if(textsize == "" || textsize < 0){
    console.log("textsize error")
  }
  else if(spacing == "" || textsize < 0){
    console.log("spacing error")
  }
  else if(color == ""){
    console.log("color error")
  }
  else{
    img.src = url
    img.class = side
    p.style.color = color
    p.style.fontSize = `${textsize}pt`
    p.style.wordSpacing = `${spacing}em`
  }
}

function float(){
  if(side != "float-start"){
    side = "float-start"
  }
  else{
    side = "float-end"
  }
}

function load(){
  document.getElementById('url').addEventListener('change', imgChange)
  document.getElementById('floatButton').addEventListener('click', float)
}

document.addEventListener('DOMContentLoaded', load)