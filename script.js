//SLAPTAŽODIS:
//1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
//2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
//2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
//2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
//3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

let password = 'fjkshdkljshkfjfgdgdg'
console.log(password)
console.log(password.length)

if (password < 16) {
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
} else if(password > 15 && password > 20) {
    console.log('„Slaptažodis tinkamas"')
} else if(password != 20) { 
    console.log('„Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."')
//} else if(password != (#)) {
    console.log('„Slaptažodis privalo turėti grotažymes"')
}