
        let dato = parseInt(prompt("Ingresa el primer número: "));
        let dato1 = parseInt(prompt("Ingresa el segundo número: "));

        let suma = (a, b)=>{
            let resp = `La suma es: ${a + b} `;
            return resp;
        }

        var resultadoSuma = suma(dato, dato1);
        alert(resultadoSuma);
    