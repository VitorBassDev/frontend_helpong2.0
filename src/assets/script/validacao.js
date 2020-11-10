export const  mascara = {
  cidade(value) {
    console.log(value)
    return value
    .replace(/1/,'2')
  }
}

document.querySelectorAll('input').forEach(($input) =>{
  const field = $input.dataset.js

  $input.addEventListener('input', (e) => {
    
    e.target.value = mascara[field](e.target.value)
  }, false)
})