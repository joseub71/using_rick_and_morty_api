/**
 * 
 * Retorna un Numero con la cantidad de veces que haga match con el string proporcionado
 *
 * @param {string} str cadena para buscar
 * @param {string} char letra o caracter para comparar
 * @return {Number} count Numero de coincidencias, en caso de que no haya ninguna devolvera 0
 * 
 */

exports.findString = (str, char) => {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === char.toUpperCase()){
            count += 1
        }
    }
    return count
}

/**
 * 
 * Retorna un Numero con la cantidad de veces que haga match con el string proporcionado total por Array
 *
 * @param {Array} arrayData arreglo de objetos para buscar
 * @param {string} stringTofind letra o caracter para comparar
 * @return {Number} count Numero de coincidencias total por array
 * 
 */

exports.finCharacter = (arrayData, stringTofind) => {
    let countChar = 0
    for (let i = 0; i < arrayData.length; i++) {
        const mainArray = arrayData[i].results;
        for (let idx = 0; idx < mainArray.length; idx++) {
            const array = mainArray[idx];
            countChar += this.findString(array.name, stringTofind)
        }        
    }

    return countChar
}

/**
 * 
 * Retorna un Numero con la cantidad de veces que haga match con el string proporcionado total por Array
 *
 * @param {Object} data objeto con arreglos de data cruda para procesar
 * @return {Object} Objeto formateado para convertir en tabla con el resultado de las coincidencias
 * 
 */

exports.charCounter = (data) => {
    const characterCount = this.finCharacter(data.allCharacter, "c")
    const locationCount = this.finCharacter(data.allLocation, "l")
    const episodeCount = this.finCharacter(data.allEpisode, "e")

    return {
        Character: { count:  characterCount, letter: "c" },
        Location: { count:  locationCount, letter: "l" },
        Episode: { count:  episodeCount, letter: "e" }
    }
}