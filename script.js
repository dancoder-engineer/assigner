const fromBox = document.querySelector("#from")
const toBox = document.querySelector("#to")
const lines = document.querySelector("#linesNo")

const assign = () => {
    const noOfLines = parseInt(lines.value)
    const names = fromBox.value.split("\n")
    eachPerson = Math.floor(noOfLines / names.length)
    
    let assignments = ""
    for(let i = 0; i < names.length;i++){
        let start = i === 0  ? 2 : (i * eachPerson) + 1
        let finish = i === names.length - 1 ? noOfLines : start + eachPerson - 1
        assignments += names[i] + ": lines " + start + " - " + finish + "\n"
    }
    toBox.value = assignments
}