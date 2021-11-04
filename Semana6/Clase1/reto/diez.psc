Proceso diez
	Definir a,b,c Como Entero
	Leer a
	Leer b
	Leer c
	
	Si a>b Entonces
		Si b>c Entonces
			Escribir "mayor" a
			Escribir "menor" c
		SiNo
			Si a>c Entonces
				Escribir "mayor" a
				Escribir "menor" b
			SiNo
				Escribir "mayor" c
				Escribir "menor" b
			Fin Si
		Fin Si
	SiNo
		Si a>c Entonces
			Escribir "mayor" b
			Escribir "menor" c
		SiNo
			Si b>c Entonces
				Escribir "mayor" b
				Escribir "menor" a
			SiNo
				Escribir "mayor" c
				Escribir "menor" a
			Fin Si
		Fin Si
	Fin Si
	
	
FinProceso
