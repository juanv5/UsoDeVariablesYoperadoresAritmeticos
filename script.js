/*
2- Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente:

● Suma
● Resta
● División
● Multiplicación
● Módulo
*/


// Ingresamos las variables //

var num1 = prompt("Ingrese el primer numero: ");
var num2 = prompt("Ingrese el segundo numero: ");

// Declaramos el tipo de variables

num1 = parseInt(num1);
num2 = parseInt(num2);

// Realizamos las operaciones


const suma = num1 + num2;
const resta = num1 - num2;
const division = num1 / num2;
const multiplicacion = num1 * num2;
const modulo = num1 % num2;

// Imprimimos los resultados

document.write(`El resultado de sumar ${num1} y ${num2} es ${suma} <br>`);
document.write(`El resultado de restar ${num1} y ${num2} es ${resta} <br>`);
document.write(`El resultado de dividir ${num1} y ${num2} es ${division} <br>`);
document.write(`El resultado de multiplicar ${num1} y ${num2} es ${multiplicacion} <br>`);
document.write(`El resultado modulo de ${num1} y ${num2} es ${modulo} <br>`)


////////////////////////////////////////////////////////////////////////////////////////////


/*
3-Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es ( 0 °C × 9 / 5 ) + 32 = 32 °F
*/


// Ingresamos las variables

var C = prompt("Ingrese temperatura en grados celcius: ");
var C = parseFloat(C);

// convertidor celcius a kelvin

var K = C + 273.15;

// convertidor celcius a fahrenheit

var F = (C - 32) * 5 / 9;

// Imprimimos los resultados

document.write(`${C} grados celcius son ${K} grados Kelvin <br> `);
document.write(`${C} grados celcius son ${F} grados Fahrenheit`);



/////////////////////////////////////////////////////////////////////////////////////////////

/*
4-Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:

● 1 año tiene 365 días
● 1 semana tiene 7 días

Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal.
*/

// Ingresamos las variables

var dias = prompt("Ingrese la cantidad de dias: ");
dias = parseInt(dias);

// Realizamos las operaciones

var año = Math.floor(dias / 365);
var dife = dias % 365
var semana = Math.floor(dife / 7);
var dia = Math.floor(dias % 6);

// Imprimimos los resultados y mostramos por consola

console.log(`Los dias ingresados corresponden a ${año} año/s, ${semana} semana/s y ${dia} dia/s `)
document.write(`Los dias ingresados corresponden a ${año} año/s, ${semana} semana/s y ${dia} dia/s `)



///////////////////////////////////////////////////////////////////////////////////////////////


/*
5-Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.

● La suma de todos los números.
● El promedio de los 5 números ingresados.
*/

// Ingresamos las variables

var num1 = prompt("Ingrese el primer numero: ");
var num2 = prompt("Ingrese el segundo numero: ");
var num3 = prompt("Ingrese el tercer numero: ");
var num4 = prompt("Ingrese el cuarto numero: ");
var num5 = prompt("Ingrese el quinto numero: ");

// Declaramos el tipo de variables

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

// Realizamos las operaciones

const suma = num1 + num2 + num3 + num4 + num5;
const promedio = suma / 5;

// Imprimimos los resultados

document.write(`La suma de todos los numeros es ${suma} <br>`);
document.write(`El promedio de los 5 numeros ingresado es ${promedio} <br>`);