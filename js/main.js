/*Lista de tareas o TO DO*/
/*Añadí a esta entrega DOM y eventos para lograr una interfaz mas interesante para el usuario*/

const todos = [] /*creo un arreglo vacio para usar como memoria*/
const todoForm = document.getElementById('todo-form') /*asigno el formulario a una constante para asignarle una funcion*/

todoForm.onsubmit = (a) => {

    a.preventDefault(); /*evito que mi pagina se recargue y no perder lo guardado en mi arreglo 'todos'*/

    const todoInput = document.getElementById('todo-input') /*asigno el input a una constante */
    const todo = todoInput.value; /*asigno el VALOR de mi input a una constante*/
    if (todoInput.value != '') {
        /*me aseguro de que mi lista no contenga elementos vacios*/
        todos.push(todo); /*agrego los elementos del input al arreglo 'todos'*/
        todoInput.value = '' /*borro lo escrito en el input*/

        /*modifico mi html*/

        const todoList = document.getElementById('todo-list') /*creo la constante para acceder al html y escribir dentro de ul*/
        todoList.innerHTML = '' /*limpio mi lista para que no se duplique */
        for /*proxima entrega será reemplazado por un .map*/ (let i = 0; i < todos.length; i++) {
            /*para cada indice, comenzando desde 0, y siendo menor que el largo del arreglo*/
            todoList.innerHTML += '<li>' + todos[i] + '</li>'; /*añadir dentro del html todos los elementos del arreglo 'todos'*/
        }
    }

    /*hago un recuento de mis tareas */

    const recuento = document.getElementById('recuento') /*asigno el parrafo a una constante*/
    recuento.innerHTML = 'Numero de tareas: ' + todos.length /*modifico su contenido*/
}