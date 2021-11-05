Proceso quince
	Dimension votantes[100]
	Definir novota,vota,n,edad Como Entero
	Escribir "cuantos electores tiene:"
	Leer n
	Para x=1 Hasta n Con Paso 1 Hacer
		Escribir "ingrese la edad del elector:"
		Leer edad
		Si edad<=120 & edad>=0 Entonces
			votantes[x]=edad
		SiNo
			Escribir "*** edad no valida o su edad es muy avanzada ****"
			x=x-1
		Fin Si
		
	Fin Para
	Para x=1 Hasta n Con Paso 1 Hacer
		Si votantes[x] >=0 & votantes[x]<18 Entonces
			novota=novota+1
		SiNo
			Si votantes[x] >=18 & votantes[x]<=120 Entonces
				vota=vota+1
			SiNo
			Fin Si
		Fin Si
	Fin Para
	Escribir "total electores habilitados: votan: " vota " no votan: " novota 
FinProceso
