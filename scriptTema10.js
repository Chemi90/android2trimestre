document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question: "1. ¿Qué es DiffUtil en el contexto de Android?",
      a: "Una librería para gestionar animaciones",
      b: "Un framework para el desarrollo de interfaces de usuario",
      c: "Una clase de utilidad para optimizar el rendimiento de RecyclerView",
      d: "Un componente de Material Design",
      correct: "c",
      explanation:
        "DiffUtil es una clase de utilidad que ayuda a optimizar el rendimiento de RecyclerView comparando y calculando diferencias entre listas.",
    },
    {
      question: "2. ¿Cuál es el propósito principal del Material Design?",
      a: "Mejorar la experiencia de usuario en aplicaciones web",
      b: "Establecer un estilo visual coherente en dispositivos móviles y web",
      c: "Aumentar la velocidad de desarrollo de aplicaciones Android",
      d: "Proporcionar una biblioteca de animaciones",
      correct: "b",
      explanation:
        "Material Design es un estilo de diseño desarrollado por Google que busca establecer un lenguaje visual coherente para mejorar la experiencia de usuario en dispositivos móviles y web.",
    },
    {
      question:
        "3. ¿Qué archivo se modifica para incluir los componentes de Material Design en un proyecto Android?",
      a: "AndroidManifest.xml",
      b: "MainActivity.java",
      c: "build.gradle",
      d: "app.json",
      correct: "c",
      explanation:
        "Para incluir componentes de Material Design en un proyecto Android, se deben añadir las dependencias correspondientes en el archivo build.gradle.",
    },
    {
      question:
        "4. ¿Qué permite personalizar el componente Material Button en Android?",
      a: "El tamaño de la pantalla",
      b: "El color y estilo del botón, incluyendo iconos y texto",
      c: "La versión de Android del dispositivo",
      d: "La duración de la animación del botón",
      correct: "b",
      explanation:
        "Material Button permite personalizar aspectos como el color y estilo, e incluir iconos y texto, mejorando la experiencia de usuario.",
    },
    {
      question: "5. ¿Para qué se utiliza TextInputEditText en Android?",
      a: "Para crear animaciones dentro de la aplicación",
      b: "Para implementar campos de texto personalizados",
      c: "Para añadir botones a la interfaz de usuario",
      d: "Para gestionar la base de datos de la aplicación",
      correct: "b",
      explanation:
        "TextInputEditText se utiliza para implementar campos de texto personalizados, permitiendo una mayor flexibilidad en el diseño de la interfaz.",
    },
    {
      question:
        "6. ¿Cómo se puede forzar a que todo lo que se escriba en un TextInputEditText esté en mayúsculas?",
      a: "Modificando el archivo AndroidManifest.xml",
      b: "Usando una expresión regular en el código Java",
      c: "A través de una opción en el XML del componente",
      d: "Cambiando la configuración del teclado del dispositivo",
      correct: "c",
      explanation:
        "Se puede forzar a que el texto introducido en un TextInputEditText esté en mayúsculas mediante una opción específica en el XML del componente.",
    },
    {
      question:
        "7. ¿Qué se necesita para que un TextInputEditText acepte solo valores numéricos determinados?",
      a: "Un validador de texto personalizado en Java",
      b: "Una configuración especial en el archivo build.gradle",
      c: "Una opción en el XML del componente",
      d: "Modificar el sistema operativo Android",
      correct: "c",
      explanation:
        "Para restringir la entrada a valores numéricos determinados en un TextInputEditText, se puede utilizar una opción específica en el XML del componente.",
    },
    {
      question:
        "8. ¿Qué método se recomienda para actualizar una lista en un RecyclerView utilizando DiffUtil?",
      a: "Reemplazar la lista directamente y llamar a notifyDataSetChanged",
      b: "Utilizar el método updateList con DiffUtil para optimizar el rendimiento",
      c: "Llamar directamente a los métodos add y remove sobre la lista",
      d: "Mantener la lista inmutable y usar métodos plus y minus",
      correct: "b",
      explanation:
        "Utilizar DiffUtil a través de un método como updateList es recomendado para optimizar el rendimiento de actualización de listas en RecyclerView, calculando las diferencias de manera eficiente.",
    },
    {
      question:
        "9. ¿Cuál es la ventaja principal de usar Material Design en aplicaciones Android?",
      a: "Acelerar el rendimiento del dispositivo",
      b: "Reducir el consumo de datos móviles",
      c: "Establecer una interfaz de usuario coherente y moderna",
      d: "Mejorar la precisión del GPS en aplicaciones",
      correct: "c",
      explanation:
        "Material Design proporciona un lenguaje visual coherente y moderno que mejora la experiencia de usuario a través de interfaces de usuario consistentes y atractivas.",
    },
    {
      question:
        "10. ¿Cómo se puede personalizar un Material Button para incluir un icono?",
      a: "Modificando el archivo AndroidManifest.xml",
      b: "A través de una opción en el XML del componente",
      c: "Usando un editor de texto externo",
      d: "Cambiando la configuración de gradle",
      correct: "b",
      explanation:
        "Se puede personalizar un Material Button para incluir un icono directamente a través de opciones en el XML del componente, sin necesidad de herramientas o configuraciones externas.",
    },
    {
      question:
        "11. ¿Qué componente se utiliza para crear campos de texto personalizados en Android?",
      a: "TextView",
      b: "EditText",
      c: "TextInputLayout",
      d: "TextInputEditText",
      correct: "d",
      explanation:
        "TextInputEditText se utiliza junto con TextInputLayout para crear campos de texto personalizados, permitiendo una amplia personalización.",
    },
    {
      question:
        "12. ¿Qué archivo se modifica para personalizar un TextInputEditText con un selector drawable?",
      a: "build.gradle",
      b: "AndroidManifest.xml",
      c: "Un archivo de recursos drawable",
      d: "El XML del layout donde se utiliza el componente",
      correct: "c",
      explanation:
        "Para personalizar un TextInputEditText con un selector drawable, se modifica o crea un archivo en el directorio de recursos drawable, lo que permite personalizar el aspecto del campo de texto.",
    },
    {
      question:
        "13. ¿Cómo se puede añadir un TextInputEditText para introducir contraseñas?",
      a: "Usando un campo EditText estándar",
      b: "Con un TextInputLayout configurado específicamente",
      c: "Mediante la configuración de un TextInputEditText con un tipo de input específico",
      d: "Implementando una validación personalizada en el código Java/Kotlin",
      correct: "c",
      explanation:
        "Un TextInputEditText se puede configurar para introducir contraseñas mediante la especificación de un tipo de input específico en el XML, proporcionando así un campo adecuado para contraseñas.",
    },
    {
      question: "14. ¿Qué permite el uso de TextInputEditText multilínea?",
      a: "Insertar imágenes dentro del texto",
      b: "Crear campos de texto para introducir códigos de programación",
      c: "Ingresar texto en múltiples líneas, como en un campo de comentarios",
      d: "Aumentar la velocidad de entrada de texto",
      correct: "c",
      explanation:
        "TextInputEditText multilínea permite ingresar texto en múltiples líneas, lo que es útil para campos de texto extensos como comentarios o descripciones.",
    },
    {
      question:
        "15. ¿Cómo se puede lograr que un TextInputEditText tenga esquinas redondeadas?",
      a: "Mediante la edición del código fuente de Android",
      b: "Usando una propiedad específica en el XML del componente",
      c: "Aplicando un tema de Material Design global",
      d: "Instalando unaazar toda la lista y notificar al adaptador con notifyDataSetChanged()",
      b: "Actualizar solo los elementos que han cambiado usando DiffUtil",
      c: "Eliminar y volver a añadir todos los elementos manualmente",
      d: "Usar un bucle for para comparar cada elemento individualmente",
      correct: "b",
      explanation:
        "DiffUtil es una herramienta eficiente para actualizar solo los elementos de una lista que han cambiado, mejorando el rendimiento del RecyclerView.",
    },
    {
      question:
        "16. ¿Cuál es el propósito de crear una nueva clase `FrutaDiffUtil` en el contexto de programación Android?",
      a: "Facilitar la conexión a bases de datos externas",
      b: "Optimizar la gestión de estados en aplicaciones React Native",
      c: "Mejorar el rendimiento de las actualizaciones de listas en RecyclerView",
      d: "Implementar animaciones complejas para los elementos de la UI",
      correct: "c",
      explanation:
        "La creación de una clase como `FrutaDiffUtil` permite a los desarrolladores optimizar el rendimiento de las actualizaciones de listas en RecyclerView al calcular las diferencias entre listas.",
    },
    {
      question:
        "17. ¿Qué implica la modificación de una lista en `MainActivity` para no ser mutable en el contexto de DiffUtil?",
      a: "Que la lista no puede cambiar de tamaño ni de contenido",
      b: "Que se deben usar los métodos `add` y `remove` para modificar la lista",
      c: "Que la lista debe ser reemplazada por completo para actualizarla",
      d: "Que se deben utilizar los métodos `plus` y `minus` para modificar la lista",
      correct: "d",
      explanation:
        "Modificar una lista para que no sea mutable implica que, en lugar de usar `add` y `remove`, se deben emplear métodos como `plus` y `minus` para actualizar la lista de manera eficiente.",
    },
    {
      question:
        "18. ¿Cómo se añaden las dependencias necesarias para utilizar los componentes de Material Design en un proyecto Android?",
      a: "Modificando el archivo `AndroidManifest.xml`",
      b: "Añadiendo las dependencias en el archivo `build.gradle`",
      c: "Implementando las dependencias directamente en el código Java/Kotlin",
      d: "Configurando las dependencias en el Panel de Control de Android Studio",
      correct: "b",
      explanation:
        "Para utilizar los componentes de Material Design, es necesario añadir las dependencias correspondientes en el archivo `build.gradle` del proyecto.",
    },
    {
      question:
        "19. ¿Qué caracteriza a los `TextInputEditText` personalizados en Android?",
      a: "Permiten la ejecución de código JavaScript dentro de la aplicación",
      b: "Facilitan la integración con sistemas de gestión de bases de datos como Firebase",
      c: "Ofrecen opciones de personalización como multilinealidad y esquinas redondeadas",
      d: "Habilitan la conexión directa con APIs de terceros sin necesidad de SDK adicionales",
      correct: "c",
      explanation:
        "Los `TextInputEditText` personalizados en Android se caracterizan por ofrecer opciones de personalización avanzadas, como la posibilidad de ser multilineales o tener esquinas redondeadas.",
    },
    {
      question:
        "20. ¿Cuál es la ventaja de implementar eventos personalizados en `TextInputEditText`?",
      a: "Permiten el uso de plugins de terceros para aumentar la funcionalidad",
      b: "Facilitan la personalización del teclado virtual del dispositivo",
      c: "Permiten forzar comportamientos específicos como la introducción de texto en mayúsculas",
      d: "Incrementan la seguridad de la aplicación al restringir tipos de entrada específicos",
      correct: "c",
      explanation:
        "Implementar eventos personalizados en `TextInputEditText` permite forzar comportamientos específicos en el campo de texto, como asegurar que todo lo escrito esté en mayúsculas.",
    },
  ];

  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");

  function loadQuiz() {
    const quizQuestions = quizData
      .map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
      })
      .join("");
    quizForm.innerHTML = quizQuestions;
  }

  function submitQuiz() {
    const answers = quizData.map((_, index) => {
      return document.querySelector(`input[name="question${index}"]:checked`)
        ?.value;
    });

    let score = 0;
    let resultsHTML = "";

    answers.forEach((answer, index) => {
      const questionElement = document.getElementById(`question-${index}`);
      if (answer === quizData[index].correct) {
        score++;
        resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${
          index + 1
        }: correcta.</b></a> ${quizData[index].explanation}</p>`;
        questionElement.classList.remove("incorrect");
      } else {
        resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${
          index + 1
        }: INCORRECTA.</b></a> La respuesta correcta era '${
          quizData[index].correct
        }'. ${quizData[index].explanation}</p>`;
        questionElement.classList.add("incorrect");
      }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML =
      `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
  }

  window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
  loadQuiz();
});
