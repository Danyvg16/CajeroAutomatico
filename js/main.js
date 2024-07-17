

   const opcionClientes = document.querySelectorAll('.opcion')
   const resultadoMensaje = document.getElementById('mensaje')

   //Definir una lista 
   const opciones = [{nombre:'Mali', saldo: 200}, { nombre: "Gera", saldo: 290 } , { nombre: "Maui", saldo: 67 }]
   
   //Logica de los clientes
   function cliente(opcionSeleccionada) {
    // Determinar el cliente
    if (opcionSeleccionada === 'Mali'){
        const passwordMali = prompt(`Hola ${opcionSeleccionada} ingresa tu contraseña `)
        const password = "password1"
        if(passwordMali ===  password){
            console.log("MALII CUENTAAA")
            resultadoMensaje.textContent = `Hola ${opcionSeleccionada} bienvenid@ a tu cuenta`
            document.getElementById("resultado-cliente").style.display = "flex";
            document.getElementById("opciones-cuenta").style.display = "flex";
        }else{
            console.log("INTENTA OTRA CUENTAAA")
            resultadoMensaje.textContent = `Intentalo otra vez`
        }
    }else if(opcionSeleccionada === 'Gera'){
        const passwordGera = prompt(`Hola ${opcionSeleccionada} ingresa tu contraseña `)
        const password = "password2"
        if(passwordGera ===  password){
            console.log("GERAAA CUENTAAA")
            resultadoMensaje.textContent = `Hola ${opcionSeleccionada} bienvenid@ a tu cuenta`
            document.getElementById("resultado-cliente").style.display = "flex";
            document.getElementById("opciones-cuenta").style.display = "flex";
        }else{
            console.log("INTENTA OTRA CUENTAAA")
            resultadoMensaje.textContent = `Intentalo otra vez`
        }
    }else if(opcionSeleccionada === 'Maui'){
        const passwordMaui = prompt(`Hola ${opcionSeleccionada} ingresa tu contraseña `)
        const password = "password3"
        if(passwordMaui ===  password){
            console.log("MUUII CUENTAAA")
            resultadoMensaje.textContent = `Hola ${opcionSeleccionada} bienvenid@ a tu cuenta`
            document.getElementById("resultado-cliente").style.display = "flex";
            document.getElementById("opciones-cuenta").style.display = "flex";
        }else{
            console.log("INTENTA OTRA CUENTAAA")
            resultadoMensaje.textContent = `Intentalo otra vez`
        }
    }}

    //Mostrar saldo actual
    function consultarSaldo(opcionSeleccionada){
        const mensajeOperacion = document.getElementById("resultado-saldo");
        if (opcionSeleccionada === 'Mali'){
            console.log("entraste al saldo");
            mensajeOperacion.textContent = `Tu saldo actual es: $200`;
        }else if(opcionSeleccionada === 'Gera'){
            console.log("entraste al saldo");
            mensajeOperacion.textContent = `Tu saldo actual es: $290`;
        }else if(opcionSeleccionada === 'Maui'){
            console.log("entraste al saldo");
            mensajeOperacion.textContent = `Tu saldo actual es: $67`;
        }
        mensajeOperacion.style.display = "flex";
    };

    //Aparecer el cajero Automatico
    function monto(){
        const montos = document.getElementById("cont-body");
        montos.style.display = "flex";
    }

    //Salir del Proceso
    function exit() {
        document.getElementById("resultado-cliente").style.display = "none";
        document.getElementById("opciones-cuenta").style.display = "none";
        document.getElementById("resultado-saldo").style.display = "none";
        document.getElementById("cont-body").style.display = "none";
        alert('Se salio de su cuenta');
        console.log("Se salio del processo")
    }

    //Agregar los numeros a la pantalla
    const screen = document.getElementById('screen-result')
    function getData(num) {
        let value = num.value
        screen.value = screen.value + value
    }
    
    function calcular () {
        try {
            screen.value = eval(screen.value)
        }catch(e){
            screen.value = 'SYNTAX ERROR'
        }
    }

    //Limpiar la pantalla
    function clean() {
        screen.value = '';
        console.log("Se limpio la pantalla")
    }
    
    //Cancelar la operacion
    function cancelOperation() {
        const cancelButton = document.getElementById('cancel-button');
        cancelButton.addEventListener('click', cancelOperation);
        screen.value = '';
        console.log("Se cancelo la operacion")
        alert('Operación cancelada');
      }

    //Se recorre el arreglo o lista llamada opciones
    opcionClientes.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const opcionSeleccionada = opcion.dataset.opcion 
            cliente(opcionSeleccionada)
        })
    })