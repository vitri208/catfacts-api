async function getFacts() {
  
  try{
    const fact = await fetch('https://catfact.ninja/fact')
    const data = await fact.json()
    const fakta = data.fact

    const text = document.getElementById("facts").innerHTML = fakta;
  }
  catch(error){
    console.error(error)
  }
}