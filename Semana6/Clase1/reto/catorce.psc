Proceso catorce
	Definir verde,blanco,rojo Como real
	Definir color Como Caracter
	rojo=0
	blanco=0
	verde=0
	Repetir
		Escribir "indique el color:rojo,verde,blanco o salir"
		Leer color
		Si color == "rojo" Entonces
			rojo=rojo+1
		SiNo
			Si color == "verde" Entonces
				verde=verde+1
			SiNo
				Si color == "blanco" Entonces
					blanco=blanco+1
				SiNo
				Fin Si
			Fin Si
		Fin Si
	Hasta Que color="salir"
	Escribir "rojos: " rojo " verdes: " verde " blancos: " blanco
FinProceso
