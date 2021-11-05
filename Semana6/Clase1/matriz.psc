Proceso matriz
	Dimension datos[4]
	Dimension datosSuma[4]
	datos[1]=0
	datos[2]=1
	datos[3]=2
	datos[4]=3
	Escribir "el primer dato es: " datos[1]
	Escribir "el segundo dato es" datos[2]
	Para x=1 Hasta 4 Con Paso 1 Hacer
		Escribir "posicion " x " es igual a " datos[x]
		datosSuma[x]=x+10
	Fin Para
	Para x=1 Hasta 4 Con Paso 1 Hacer
		Escribir "posicion datosSuma " x " es igual a " datosSuma[x]
	Fin Para
FinProceso
