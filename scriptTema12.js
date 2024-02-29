document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question:
        "1. ¿Qué se crea primero en el desarrollo del juego DuckHunt para Android?",
      a: "Una clase Constantes.kt",
      b: "Un proyecto con una Activity vacía",
      c: "Una nueva carpeta Assets",
      d: "Una variable global cazados",
      correct: "b",
      explanation:
        "Primero se crea un proyecto con una Activity vacía, que luego se refactoriza cambiando su nombre a LoginActivity.",
    },
    {
      question:
        "2. ¿Qué elemento se copia de Android Studio para utilizar en GameActivity?",
      a: "El archivo ic_timer",
      b: "La imagen de un pato",
      c: "Un EditText",
      d: "Un botón",
      correct: "a",
      explanation:
        "Se copian los archivos ic_timer, duck y duck_logo desde el icono de Android para utilizarlos en GameActivity.",
    },
    {
      question:
        "3. ¿Para qué se utiliza Cloud Firestore en el proyecto DuckHunt?",
      a: "Para gestionar la interfaz de usuario",
      b: "Para almacenar datos de los jugadores",
      c: "Para copiar archivos ic_timer",
      d: "Para personalizar el tipo de fuente",
      correct: "b",
      explanation:
        "Cloud Firestore se utiliza para almacenar datos, como las puntuaciones de los jugadores en el juego DuckHunt.",
    },
    {
      question:
        "4. ¿Qué permite hacer Firebase en el desarrollo de aplicaciones?",
      a: "Solo almacenar datos en la nube",
      b: "Solo detectar errores en el código",
      c: "Crear mejores aplicaciones optimizando tiempo de desarrollo",
      d: "Modificar el archivo colors.xml",
      correct: "c",
      explanation:
        "Firebase permite crear mejores aplicaciones minimizando el tiempo de optimización y desarrollo gracias a sus diversas funciones.",
    },
    {
      question:
        "5. ¿Qué se debe hacer para mover el pato en el juego DuckHunt?",
      a: "Modificar el archivo colors.xml",
      b: "Usar un CountDownTimer",
      c: "Crear un método moverPato",
      d: "Añadir un listener para errores",
      correct: "c",
      explanation:
        "Para hacer que el pato se mueva de forma aleatoria en el juego, se crea un método llamado moverPato.",
    },
    {
      question:
        "6. ¿Qué componente nuevo de Android se utiliza para la cuenta atrás en DuckHunt?",
      a: "ImageView",
      b: "CountDownTimer",
      c: "ConstraintLayout",
      d: "Assets Folder",
      correct: "b",
      explanation:
        "Para la cuenta atrás en el juego DuckHunt, se utiliza un nuevo componente de Android llamado CountDownTimer.",
    },
    {
      question:
        "7. ¿Qué acción no permite el juego cuando la variable gameOver es true?",
      a: "Iniciar el juego",
      b: "Capturar el evento onClick",
      c: "Mover el pato",
      d: "Actualizar la puntuación",
      correct: "b",
      explanation:
        "Cuando la variable global gameOver es true, el juego no permite capturar el evento onClick.",
    },

    {
      question:
        "8. ¿Qué función tiene el archivo Constantes.kt en el proyecto DuckHunt?",
      a: "Definir los colores de la aplicación",
      b: "Almacenar las puntuaciones de los jugadores",
      c: "Contener constantes utilizadas en el proyecto",
      d: "Gestionar las conexiones de Firebase",
      correct: "c",
      explanation:
        "El archivo Constantes.kt se utiliza para contener todas las constantes utilizadas a lo largo del proyecto, facilitando su gestión y mantenimiento.",
    },
    {
      question:
        "9. ¿Qué tipo de layout se recomienda para la interfaz de usuario en GameActivity?",
      a: "LinearLayout",
      b: "RelativeLayout",
      c: "ConstraintLayout",
      d: "FrameLayout",
      correct: "c",
      explanation:
        "Se recomienda usar ConstraintLayout para la interfaz de usuario en GameActivity debido a su flexibilidad y eficiencia en el diseño de interfaces complejas.",
    },
    {
      question:
        "10. ¿Cómo se denomina la técnica utilizada para almacenar las puntuaciones de los jugadores en Firebase?",
      a: "Data mining",
      b: "Cloud storage",
      c: "Real-time database",
      d: "Firestore database",
      correct: "d",
      explanation:
        "Para almacenar las puntuaciones de los jugadores se utiliza Firestore database, una base de datos NoSQL ofrecida por Firebase.",
    },
    {
      question: "11. ¿Cuál es el propósito del método moverPato()?",
      a: "Actualizar la puntuación",
      b: "Reiniciar el juego",
      c: "Mover el pato de forma aleatoria",
      d: "Iniciar la cuenta atrás",
      correct: "c",
      explanation:
        "El método moverPato() tiene el propósito de mover el pato de forma aleatoria en la pantalla durante el juego.",
    },
    {
      question:
        "12. ¿Qué se necesita para añadir Firebase al proyecto DuckHunt?",
      a: "Modificar el archivo build.gradle",
      b: "Ejecutar un comando en la terminal",
      c: "Crear una cuenta de usuario en Firebase",
      d: "Todas las anteriores",
      correct: "d",
      explanation:
        "Para añadir Firebase al proyecto, es necesario realizar varias configuraciones incluyendo modificar el archivo build.gradle, ejecutar comandos específicos y tener una cuenta de usuario en Firebase.",
    },
    {
      question:
        "13. ¿Qué componente es esencial para mostrar la cuenta atrás en la interfaz de usuario?",
      a: "TextView",
      b: "EditText",
      c: "Button",
      d: "ImageView",
      correct: "a",
      explanation:
        "Un TextView es esencial para mostrar la cuenta atrás en la interfaz de usuario, permitiendo visualizar el tiempo restante.",
    },
    {
      question:
        "14. ¿Cuál es el principal desafío al implementar la función de mover el pato aleatoriamente?",
      a: "Optimizar el uso de la memoria",
      b: "Evitar la repetición de posiciones",
      c: "Mantener el pato dentro de los límites de la pantalla",
      d: "Sincronizar el movimiento con la base de datos",
      correct: "c",
      explanation:
        "El principal desafío al implementar la función de mover el pato aleatoriamente es asegurar que el pato permanezca dentro de los límites de la pantalla.",
    },
    {
        question: "15. ¿Qué método se utiliza para iniciar sesión en el juego DuckHunt con Firebase?",
        a: "FirebaseAuth.getInstance().signIn",
        b: "GoogleSignInOptions.Builder",
        c: "AuthUI.getInstance().createSignInIntentBuilder",
        d: "FirebaseUser.getUser",
        correct: "c",
        explanation: "Se utiliza AuthUI.getInstance().createSignInIntentBuilder para iniciar sesión mediante Firebase Auth UI, facilitando el proceso de autenticación."
    },
    {
        question: "16. ¿Qué archivo se modifica para personalizar los colores del juego DuckHunt?",
        a: "AndroidManifest.xml",
        b: "build.gradle",
        c: "colors.xml",
        d: "MainActivity.kt",
        correct: "c",
        explanation: "El archivo colors.xml se modifica para personalizar los colores utilizados en la interfaz de usuario del juego DuckHunt."
    },
    {
        question: "17. ¿Cuál es el propósito de utilizar un CountDownTimer en DuckHunt?",
        a: "Para sincronizar el juego con Firebase",
        b: "Para realizar movimientos aleatorios del pato",
        c: "Para gestionar la cuenta atrás del tiempo de juego",
        d: "Para actualizar las puntuaciones en tiempo real",
        correct: "c",
        explanation: "El CountDownTimer se utiliza para gestionar la cuenta atrás del tiempo de juego, ofreciendo una manera de controlar la duración de cada partida."
    },
    {
        question: "18. ¿Cómo se incrementa la puntuación al acertar un pato en DuckHunt?",
        a: "Usando un método updateScore",
        b: "Mediante una variable global score",
        c: "Con una llamada a Firebase",
        d: "Incrementando una variable contador dentro de moverPato()",
        correct: "b",
        explanation: "La puntuación se incrementa mediante una variable global score cada vez que el jugador acierta a un pato."
    },
    {
        question: "19. ¿Qué permite Firebase Analytics en el juego DuckHunt?",
        a: "Modificar el layout del juego",
        b: "Almacenar las puntuaciones de los jugadores",
        c: "Analizar el comportamiento de los usuarios",
        d: "Actualizar la interfaz de usuario en tiempo real",
        correct: "c",
        explanation: "Firebase Analytics permite analizar el comportamiento de los usuarios en el juego, ofreciendo datos valiosos para mejorar la experiencia del juego."
    },
    {
        question: "20. ¿Qué acción realiza el botón 'Jugar' en LoginActivity?",
        a: "Inicia la actividad GameActivity",
        b: "Cierra la sesión de Firebase",
        c: "Muestra las mejores puntuaciones",
        d: "Configura las opciones de juego",
        correct: "a",
        explanation: "El botón 'Jugar' en LoginActivity inicia la actividad GameActivity, llevando al usuario a la pantalla principal del juego."
    }
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
