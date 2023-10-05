export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof(varsAndTypes))
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')


}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])

  let Array = {
    0: 'godag,',
    1: 'så här kan', 
    2: 'man skriva ut', 
    3: 'object inom en array.',
    4: 'Ha en bra dag.'
  }

  for (let i = 0; i < 5; i++) {
    console.log(Array[i])
  }
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
  let count = 0

  element.addEventListener('click', (e) => {
    count++
    console.log('Du tryckte på texten. du har tryckt på texten ', count, ' gånger.')
    
  })
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'DOM manipulation, ändra och lägg till element'
  let thing = document.createElement('div')

  let count = 0

  element.addEventListener('click', (e) => {
    element.appendChild(thing)
    console.log(element)
    
    

    count++
    if (count == 1) element.textContent = 'Det är inte trevligt att trycka på en text utan att fråga först!'
    if (count == 2) element.textContent = 'Gör det inte igen!'
    if (count == 3) element.textContent = '...'
    if (count == 4) element.textContent = '( ͡° ͜ʖ ͡°) Jag vet var du bor...'
  })
}