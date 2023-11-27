function showInput(){
    const input = document.getElementById("myinput").value

    const myUnit = input
    let mtsFeet = (3.28084*myUnit).toFixed(3)
    let feetMts = (myUnit/3.28084).toFixed(3)
    const lengthString = document.getElementById("mts-feet")
    lengthString.innerHTML = `${myUnit} meters = ${mtsFeet} feet | ${myUnit} feet = ${feetMts} meters`

    const volString = document.getElementById("lts-gal")
    let ltsGal = (0.264172*myUnit).toFixed(3)
    let galLts = (myUnit/0.264172).toFixed(3)
    volString.innerHTML = `${myUnit} liters = ${ltsGal} gallons | ${myUnit} gallons = ${galLts} liters`
    
    const kgString = document.getElementById("kg-pound")
    let kgPound = (myUnit/2.20462262).toFixed(3)
    let poundKg = (2.20462262*myUnit).toFixed(3)
    kgString.innerHTML = `${myUnit} kilos = ${kgPound} pounds | ${myUnit} pounds = ${poundKg} kilos`
}