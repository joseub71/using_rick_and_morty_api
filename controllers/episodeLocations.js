/**
 * 
 * Retorna un arraglo con todos los episodios
 * por cada item del arreglo hay uno o mas objetos con la cantidad de veces que aparece ese lugar en concreto por personajes
 *
 * @param {Object} parameter data objeto con arreglos de data cruda para procesar
 * @return {Object} JSON con valores unicos por episodio/ubicacion
 * 
 */

exports.episodeLocations = (allData)=> {
    const allCharacter = allData.allCharacter;

    let dataToreturn = {}

    for (let i = 0; i < allCharacter.length; i++) {
        const mainArray = allCharacter[i].results;
        for (let idx = 0; idx < mainArray.length; idx++) {
            const characterArray = mainArray[idx];
            const characterEpisodes = mainArray[idx].episode;
            
            for (let inf = 0; inf < characterEpisodes.length; inf++) {
                // En caso de colocar el nombre del episodio seria aqui (actualmente es el numero)
                const element = characterEpisodes[inf];
                let splitData = element.split("/")
                splitData = splitData[splitData.length -1]
                if(dataToreturn[splitData]){
                    if (dataToreturn[splitData][characterArray.origin.name] ) {
                        dataToreturn[splitData][characterArray.origin.name].count += 1
                    }else{
                        dataToreturn[splitData][characterArray.origin.name] = { location: characterArray.origin.name, count: 1 }
                    }
                }else{
                    // Agregar nombre del personaje actualmente origin y count 
                    dataToreturn[splitData] = {[characterArray.origin.name]:{ location: characterArray.origin.name, count: 1 }}
                }
                
            }
        }        
    }
    return dataToreturn
}