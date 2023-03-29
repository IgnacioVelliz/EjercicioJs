class Persona {

    static ContadorPersonas = 0 ;

    constructor(nombre, apellido, edad){

        this.idPersonas = ++Persona.ContadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;  

    }

    get idPersona(){
        return this.idPersonas;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return "Id Persona: " + this.idPersona + ": "+ this._nombre +" "+this._apellido +". Edad: "+this._edad;
    }

}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.idEmpleados = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return "Id Empeleado: " + this.idEmpleados;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() +". Sueldo: " + this._sueldo
    }

}

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, date){
        super(nombre,apellido,edad);
        this.idClientes = ++Cliente.contadorCliente;
        this._date = date;
    }

    get idCliente(){
        return "Id Cliente: " + this.idClientes
    }

    get date(){
        return this._date;
    }
    set date(date){
        this._date = date;
    }
    
    toString(){
        return super.toString() + ". Fecha: " + this._date;
    }

}

let persona1 = new Persona("Juan", "Mari", 40)
console.log(persona1.toString())

let empleado1 = new Empleado("Mirta", "Heit", 40, 500000)
console.log(empleado1.toString())
console.log(empleado1.idEmpleado)

let date = new Date();

let cliente1 = new Cliente("Ignacio", "Velliz", 30, date)
console.log(cliente1.toString())
console.log(cliente1.idCliente)

let empleado2 = new Empleado("Benajamin", "Mari", 35, 40000)
console.log(empleado2.toString())
console.log(empleado2.idEmpleado)

let persona2 = new Persona("Lucas", "Mari", 20)
console.log(persona2.toString())
