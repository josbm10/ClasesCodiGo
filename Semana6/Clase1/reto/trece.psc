
Proceso trece
	Definir nota,aprobado,desaprobado Como real
	aprobado=0
	desaprobado=0
	Repetir
		Leer nota 
		Si nota>11 Entonces
			aprobado=aprobado+1
		SiNo
			desaprobado=desaprobado+1
		Fin Si
	Hasta Que nota=1
	Escribir "aprobados: " aprobado " desaprobado: " desaprobado-1
FinProceso
