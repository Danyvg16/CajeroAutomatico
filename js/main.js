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

    //Aparecer el cajero Automatico
    function montoIngresar(){
        const montos = document.getElementById("cont-body");
        montos.style.display = "flex";
        const agregar = document.getElementById("retirar");
        agregar.style.display = "none";
        const enter = document.getElementById("enter");
        enter.style.display = "flex";
    }

    function montoRetirar(){
        const montos = document.getElementById("cont-body");
        montos.style.display = "flex";
        const retirar = document.getElementById("enter");
        retirar.style.display = "none";
        const withdraw = document.getElementById("retirar");
        withdraw.style.display = "flex";
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

    //----------------------------Agregar o Retirar Saldo --------------------
    const screenResult = document.getElementById('screen-result');
    let enteredAmount = 0.0; 
    let saldoActual = 200.0; 
    
    function getData(inputElement) {
    const value = parseFloat(inputElement.value);
    if (isNaN(value)) {
        return; 
    }
        enteredAmount = enteredAmount * 10 + value;
        screenResult.value = enteredAmount.toFixed(2); 
    }

    //Agregar Saldo
    function enter() {
    if (enteredAmount > 0) {
        saldoActual += enteredAmount; 
        enteredAmount = 0.0; 
        screenResult.value = `Saldo: ${saldoActual}`;
        alert("Se agrego saldo con exito") 
    } else {
        alert('Ingrese un monto válido.'); 
        }
    }

    //Retirar Saldo
    function retirar() {
      if (enteredAmount > 0) {
        const newSaldo = saldoActual - enteredAmount;
    
        if (enteredAmount <= 10.0) {
          alert('Saldo insuficiente. Mínimo: $10.00');
          console.log("Entro a la validacion de -10");
        } else if (enteredAmount >= 990.0) {
          alert('Retiro no permitido. Máximo: $990.00');
          console.log("Entro a la validacion de 990");
        } else {
          saldoActual = newSaldo;
          enteredAmount = 0.0;
          screenResult.value = `Saldo: $${newSaldo.toFixed(2)}`;
          alert("Retiro con exito!")
        }
      } else {
        alert('Ingrese un monto válido para retirar.');
      }
    }

    //Limpiar la pantalla
    function clean() {
        enteredAmount = 0.0;
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