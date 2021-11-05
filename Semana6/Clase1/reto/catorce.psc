Proceso catorce
	Dimension focos[100]
	Definir verde,rojo,blanco Como Entero
	Definir color Como Caracter
	Escribir "cuantos focos tiene:"
	Leer n
	Para x=1 Hasta n Con Paso 1 Hacer
		Escribir "ingrese el color |v||r||b|"
		Leer color
		Si color=="v" Entonces
			focos[x]=color
		SiNo
			Si color=="b" Entonces
				focos[x]=color
			SiNo
				Si color=="r"  Entonces
					focos[x]=color
				SiNo
					Escribir "error"
					x=x-1
				Fin Si
			Fin Si
		Fin Si
	
	Fin Para
	Para x=1 Hasta n Con Paso 1 Hacer
		Si focos[x]=="v" Entonces
			verde=verde+1
		SiNo
			Si focos[x]=="b" Entonces
				blanco=blanco+1
			SiNo
				Si focos[x]=="r"  Entonces
					rojo=rojo+1
				SiNo
					Escribir "error"
				Fin Si
			Fin Si
		Fin Si
	Fin Para
	Escribir "usted tiene focos: rojos: " rojo " verdes: " verde " blancos: " blanco
	
	
FinProceso
