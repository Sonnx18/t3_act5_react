# Actividad 5 - Introducción a React: Fundamentos y Primer Componente

Alumno: Noel López Herrera
Materia: Programación Web
Docente: Adelina Martínez Nieto
Grupo: 7SC

## Descripción del proyecto

Hice una pequeña app que le puse "Mi Panel de Estudiante". Tiene 4 partes:

- Header, que nada más pone un título arriba, no hace nada más.
- ProfileCard, que muestra mis datos (nombre, carrera, semestre), pero esos datos
  se los mando desde App, no están escritos ahí adentro.
- Counter, un contador con botones de + y - para practicar el useState.
- TaskList, una lista de tareas que se genera a partir de un arreglo.

Fui siguiendo el video del curso y le fui agregando lo que pedía la actividad.

## Cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**

Como yo lo entendí: las props son datos que le llegan a un componente desde afuera,
o sea otro componente se los manda, y el que los recibe nada más los usa, no los
puede modificar. El state es diferente porque ese sí vive adentro del componente y
se puede ir cambiando, por ejemplo cuando le doy clic a algo. En mi caso, a
ProfileCard le mando las props desde App (nombre, carrera, semestre), y en Counter
uso state porque el número cambia cuando aprieto los botones.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**

Porque si no le pones key, React no sabe diferenciar un elemento de otro dentro de
la lista, entonces a veces se hace bolas si la lista cambia y puede que actualice
mal las cosas o marque advertencia en la consola. Entonces le puse key a cada
tarea de mi lista para que React sepa cuál es cuál.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**

useState es básicamente para que un componente pueda guardar un valor y que ese
valor se pueda actualizar después. Te da dos cosas: el valor que tienes guardado
en ese momento, y una función para cambiarlo. Yo lo usé en mi Counter, ahí tengo
const [count, setCount] = useState(0), donde count es el número que se ve en
pantalla y setCount es lo que uso en los botones para sumar o restar uno. Cada
vez que se usa setCount, la pantalla se actualiza sola con el nuevo valor.

**d) Pega el enlace de tu repositorio de GitHub:**

https://github.com/Sonnx18/t3_act5_react

**e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages:**

https://sonnx18.github.io/t3_act5_react/