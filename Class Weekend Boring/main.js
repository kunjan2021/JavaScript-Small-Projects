document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
if(day === "Tuesday" || day ==="Thursday"){
  console.log('Class day')
}else if (day==="Saturday" || day==="Sunday"){
  console.log('Weekend')
}else{
  console.log('Boring')
}

}