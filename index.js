const getData = require('./controllers/getData')
const charCounter = require('./controllers/charCounter')

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

    console.timeEnd("Tiempo total ⛅️")
}

callChipaxTest()
