Proceso calculadora
	Definir a,b Como Real
	Definir operacion Como Caracter
	Escribir "ingresa un numero"
	Leer a
	Escribir "ingresa otro numero"
	Leer b
	Escribir "ingresa la operacion: |+| |-| |*| |/|"
	Leer operacion
	Segun operacion Hacer
		"+":
			Escribir suma(a,b)
		"-":
			Escribir resta(a,b)
		"*":
			Escribir multiplicacion(a,b)
		"/":
			Escribir division(a,b)
		De Otro Modo:
			Escribir "error"
	Fin Segun

FinProceso 

Funcion suma_retorno=suma(a,b)
	suma_retorno=a+b
FinFuncion
Funcion division_retorno=division(a,b)
	division_retorno=a/b
FinFuncion
Funcion multiplicacion_retorno=multiplicacion(a,b)
	multiplicacion_retorno=a*b
FinFuncion
Funcion resta_retorno=resta(a,b)
	resta_retorno=a-b
FinFuncion


