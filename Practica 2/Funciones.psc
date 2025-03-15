Funcion retornarResta <- Resta ( num1, num2 )
	
	retornarResta = num1 - num2
	
Fin Funcion

Funcion retornarSuma <- Sumar ( num1, num2 )
	
	retornarSuma = num1 + num2
	
Fin Funcion

Algoritmo Funciones
	Definir numero1, numero2, opciones como numeros
	
	Escribir "Por favor ingrese el primer número"
	Leer numero1
	
	Escribir "Por favor ingrese el segundo número"
	Leer numero2
	
	Escribir "Por favor ingrese una opción"
	Escribir "1-Sumar o 2-Restar"
	leer opciones
	
	Si opciones = 1 Entonces
		Escribir "Su suma es: ", Sumar(numero1, numero2)	
	FinSi
	
	Si opciones = 2 Entonces
		Escribir "Su resta es: ", Resta(numero1, numero2)
	FinSi
	
FinAlgoritmo
