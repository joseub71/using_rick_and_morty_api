const rickMortyApi = require('rickmortyapi')


/**
 * Patron de diseño creacional (Factory)
 * Asumiendo que debo traer toda la data (getCharacter(34) * 20 = 680, getLocation(6) * 20 = 108, getEpisode(3) = 41) 
 * Total =  (array) 
 * 
 * Retorna un arreglo con el array de cada pagina del API
 *
 * @param {string} apiInfo Nombre de la funcion adentro de rickmortyapi
 * @return {Array} groupCalls
 * 
 */

exports.callRickMortyApi = async (apiInfo)=> {
    console.log("\n 🎉  🐶   Buscando data de ", apiInfo, ' 🐶  🎉   ');     
    let result = await rickMortyApi[apiInfo]()
    let groupCalls = [result]
    for (let i = 0; i < result.info.pages; i++) {
        if (i >= 1) {
            groupCalls.push(await rickMortyApi[apiInfo]({page: i+1}))
        }
    }
    return groupCalls
}

/**
 * Funcion inicial, retorna toda la info necesaria para el resto del programa
 * un objeto con los tres parametros necesarios para continuar Character Location Episode
 *
 * @return {Object} 
 * 
 */

exports.getAllData = async () => {
    const allCharacter = await this.callRickMortyApi("getCharacter")
    const allLocation = await this.callRickMortyApi("getLocation")
    const allEpisode = await this.callRickMortyApi("getEpisode")
    return {
        allCharacter,
        allLocation,
        allEpisode
    }
}