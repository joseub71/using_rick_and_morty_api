const getData = require('./controllers/getData')
const charCounter = require('./controllers/charCounter')
const episodeLocations = require('./controllers/episodeLocations')

console.log(`
 ██████╗██╗  ██╗ ██╗ ██████╗  █████╗ ██╗  ██╗                                                                
██╔════╝██║  ██║ ██║ ██╔══██╗██╔══██╗╚██╗██╔╝                                                                
██║     ███████║ ██║ ██████╔╝███████║ ╚███╔╝                                                                 
██║     ██╔══██║ ██║ ██╔═══╝ ██╔══██║ ██╔██╗                                                                 
╚██████╗██║  ██║ ██║ ██║     ██║  ██║██╔╝ ██╗                                                                
 ╚═════╝╚═╝  ╚═╝ ╚═╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝                                                                
                                                                                                           
██████╗ ██╗ ██████╗██╗  ██╗     █████╗ ███╗   ██╗██████╗     ███╗   ███╗ ██████╗ ██████╗ ████████╗██╗   ██╗
██╔══██╗██║██╔════╝██║ ██╔╝    ██╔══██╗████╗  ██║██╔══██╗    ████╗ ████║██╔═══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝
██████╔╝██║██║     █████╔╝     ███████║██╔██╗ ██║██║  ██║    ██╔████╔██║██║   ██║██████╔╝   ██║    ╚████╔╝ 
██╔══██╗██║██║     ██╔═██╗     ██╔══██║██║╚██╗██║██║  ██║    ██║╚██╔╝██║██║   ██║██╔══██╗   ██║     ╚██╔╝  
██║  ██║██║╚██████╗██║  ██╗    ██║  ██║██║ ╚████║██████╔╝    ██║ ╚═╝ ██║╚██████╔╝██║  ██║   ██║      ██║   
╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝ 
`)

const callChipaxTest = async ()=> {
    console.time("Tiempo total ⛅️")
    // Barra de progreso
    const P = ['\\', '|', '/', '-'];
    let x = 0;
    const loader = setInterval(() => {
    process.stdout.write(`\r${P[x++]}`);
    x %= P.length;
    }, 250);
    // Barra de progreso

    console.time("\n\nTiempo consulata al API   🍕    🍕   ")
    const allData = await getData.getAllData()
    console.timeEnd("\n\nTiempo consulata al API   🍕    🍕   ")

    clearInterval(loader);
    
    console.time("\n\nTiempo contando caracteres   ⌚️   ⌚️   ⌚️   ")
    const totalCounter = charCounter.charCounter(allData)
    console.timeEnd("\n\nTiempo contando caracteres   ⌚️   ⌚️   ⌚️   ")

    console.info('\n\n🛑  📗', '   CHAR COUNTER   ', '📗  🛑')
    console.table(totalCounter);
    
    console.time("\n\nTiempo Ubicacion Direcciones   ⌚️   ⌚️   ⌚️   ")
    const totalEpisodeLocations = episodeLocations.episodeLocations(allData)
    console.timeEnd("\n\nTiempo Ubicacion Direcciones   ⌚️   ⌚️   ⌚️   ")
    console.info('\n\n🛑  📗', '   EPISODE LOCATIONS   ', '📗  🛑')
    console.log(JSON.stringify(totalEpisodeLocations, null, 3));
    console.log('Sube para ver el reporte completo 🎉  🎉  🎉  🎉  🎉  ');
    
    console.timeEnd("Tiempo total ⛅️")
}

callChipaxTest()
