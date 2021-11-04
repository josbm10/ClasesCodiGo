Proceso potencia
	Definir a,b,total Como Entero
	Escribir "base"
	Leer a
	Escribir "exponente"
	Leer b
	total=1
	Repetir
		b=b-1;
		total=total*a
	Hasta Que b=0
	Escribir "total: " total
FinProceso
