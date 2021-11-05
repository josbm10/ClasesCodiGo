Proceso doWhile
	Definir clave Como Entero
	Repetir
		Escribir "dime tu clave"
		Leer clave
		si clave<> 1234 Entonces
			Escribir "clave incorrecta"
		FinSi
	Hasta Que clave ==1234
	Escribir "bienvenido"
FinProceso
