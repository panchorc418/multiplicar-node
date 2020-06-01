const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`base: El valor introducido es ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`limite: El valor introducido es ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            //console.log(` ${base} * ${i} = ${base * i }`);
            data += ` ${base} * ${i} = ${base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                throw err;
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });

}

let listarTabla = (base, limite = 10) => {
    // return new Promise((resolve, reject) => {
    //     if (!Number(base)) {
    //         reject(`base: el valor introducido ${base} no es un numero`);
    //         return;
    //     }
    //     if (!Number(limite)) {
    //         reject(`Limite: el valor introducido ${limite} no es un numero`);
    //         return;
    //     }
    console.log('-----------------------'.green);
    console.log(`--tabla de ${base} --`.green);
    console.log('-----------------------'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
    //resolve(`Se lista La tabla del ${base}`);

    //});

}

module.exports = {
    crearArchivo,
    listarTabla
}