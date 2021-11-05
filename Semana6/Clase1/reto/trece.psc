
Proceso trece
	Dimension alumnos[100]
	Definir aprobado,desaprobado,n,notas Como Entero
	Escribir "cuantos alumnos tiene:"
	Leer n
	Para x=1 Hasta n Con Paso 1 Hacer
		Escribir "ingrese las notas de :|0-20|"
		Leer notas
		Si notas<=20 & notas>=0 Entonces
			alumnos[x]=notas
		SiNo
			Escribir "nota no valida"
			x=x-1
		Fin Si
		
	Fin Para
	Para x=1 Hasta n Con Paso 1 Hacer
		Si alumnos[x] >=0 & alumnos[x]<11 Entonces
			desaprobado=desaprobado+1
		SiNo
			Si alumnos[x] >=11 & alumnos[x]<=20 Entonces
				aprobado=aprobado+1
			SiNo
				Escribir "error"
			Fin Si
		Fin Si
	Fin Para
	Escribir "total alumnos: aprobados: " aprobado " desaprobados: " desaprobado 
FinProceso
