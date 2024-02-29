document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question:
        "1. ¿Qué se necesita generar previamente para hacer uso de los servicios de Google Maps en nuestras aplicaciones Android?",
      a: "Una Clave de API",
      b: "Una cuenta de desarrollador en Play Store",
      c: "Una suscripción a Google Cloud Platform",
      d: "Un token de acceso a Firebase",
      correct: "a",
      explanation:
        "Para utilizar los servicios de Google Maps, es necesario generar una Clave de API asociada a la aplicación.",
    },
    {
      question:
        "2. ¿Cuál es el primer paso para configurar un mapa usando Google Maps en una Activity?",
      a: "Configurar la facturación en Google Cloud Console",
      b: "Crear una Google Maps Activity",
      c: "Habilitar la API de Google Maps para Android",
      d: "Generar una clave de API",
      correct: "b",
      explanation:
        "El primer paso es utilizar una Google Maps View Activity para crear un mapa en una Activity.",
    },
    {
      question:
        "3. ¿Cómo se obtiene la referencia al mapa en Google Maps para Android?",
      a: "Usando el método getMap()",
      b: "Mediante el método getMapAsync()",
      c: "Con el método findViewById()",
      d: "A través del método onCreate()",
      correct: "b",
      explanation:
        "Se obtiene la referencia al mapa llamando al método getMapAsync(), pasando un objeto que implemente OnMapReadyCallback.",
    },
    {
      question:
        "4. ¿Qué permite hacer la clase CameraUpdate en Google Maps para Android?",
      a: "Actualizar la interfaz de usuario",
      b: "Cambiar la orientación del dispositivo",
      c: "Realizar operaciones sobre el mapa como mover la cámara",
      d: "Tomar fotos del mapa",
      correct: "c",
      explanation:
        "La clase CameraUpdate facilita operaciones sobre el mapa, como mover la cámara.",
    },
    {
      question:
        "5. ¿Cuál es la versión actual de la API de OpenStreetMaps mencionada en el documento?",
      a: "5.0.0",
      b: "6.1.17",
      c: "7.2.1",
      d: "8.0.0",
      correct: "b",
      explanation:
        "La versión actual de la API de OpenStreetMaps mencionada es la 6.1.17.",
    },
    {
      question:
        "6. Antes de comenzar a desarrollar con Mapbox Maps SDK para Android, ¿qué es necesario configurar?",
      a: "Las dimensiones del mapa",
      b: "El tipo de mapa",
      c: "Las credenciales y agregar el SDK como dependencia",
      d: "El nivel de zoom predeterminado",
      correct: "c",
      explanation:
        "Es necesario configurar las credenciales y agregar el SDK como una dependencia antes de empezar a desarrollar.",
    },
    {
      question:
        "7. ¿Qué tipo de token se necesita generar desde la cuenta de Mapbox para usar el SDK de Mapbox Maps en Android?",
      a: "Un token de acceso público",
      b: "Un token de acceso secreto",
      c: "Ambos, un token de acceso público y un token de acceso secreto",
      d: "Un token de autenticación de dos factores",
      correct: "c",
      explanation:
        "Para usar el SDK de Mapbox Maps en Android, se necesita tanto un token de acceso público como un token de acceso secreto.",
    },

    {
      question:
        "15. ¿Cuál es el propósito principal de las corutinas en Kotlin?",
      a: "Manejar operaciones de red",
      b: "Simplificar la programación asíncrona y las operaciones en segundo plano",
      c: "Reemplazar a los hilos en aplicaciones Android",
      d: "Incrementar la velocidad de ejecución de la aplicación",
      correct: "b",
      explanation:
        "Las corutinas en Kotlin están diseñadas para simplificar la programación asíncrona y las operaciones en segundo plano, haciendo el código más legible y conciso.",
    },
    {
      question:
        "16. ¿Qué característica de Kotlin ayuda a evitar los NullPointerExceptions?",
      a: "Inferencia de tipos",
      b: "Clases selladas",
      c: "Null safety",
      d: "Extension functions",
      correct: "c",
      explanation:
        "El sistema de tipos de Kotlin está diseñado para eliminar el peligro de los NullPointerExceptions mediante el uso del concepto de null safety.",
    },
    {
      question:
        "17. ¿Cómo se declara una variable que puede cambiar en Kotlin?",
      a: "Con la palabra clave 'val'",
      b: "Usando la palabra clave 'var'",
      c: "Con la palabra clave 'const'",
      d: "Mediante la palabra clave 'let'",
      correct: "b",
      explanation:
        "Las variables que pueden cambiar su valor después de la inicialización se declaran con la palabra clave 'var'.",
    },
    {
      question: "18. ¿Qué permite hacer la sobrecarga de operadores en Kotlin?",
      a: "Cambiar el valor de una variable",
      b: "Permitir que una instancia de una clase se comporte como un array",
      c: "Modificar el comportamiento de los operadores estándar para clases personalizadas",
      d: "Crear funciones anónimas",
      correct: "c",
      explanation:
        "La sobrecarga de operadores en Kotlin permite modificar el comportamiento de los operadores estándar cuando se usan con clases personalizadas.",
    },
    {
      question: "19. ¿Qué es una 'data class' en Kotlin?",
      a: "Una clase que solo contiene datos",
      b: "Una clase para manejar bases de datos",
      c: "Una clase que genera automáticamente métodos como hashCode() y equals()",
      d: "Todas las anteriores",
      correct: "c",
      explanation:
        "Una 'data class' en Kotlin es una clase diseñada para almacenar datos y que automáticamente proporciona métodos como hashCode(), equals() y toString().",
    },
    {
      question:
        "20. ¿Qué estructura se utiliza en Kotlin para manejar las excepciones?",
      a: "try-catch",
      b: "if-else",
      c: "switch-case",
      d: "do-while",
      correct: "a",
      explanation:
        "En Kotlin, al igual que en otros lenguajes de programación, se utiliza la estructura try-catch para manejar las excepciones.",
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
