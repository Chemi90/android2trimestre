document.addEventListener("DOMContentLoaded", () => {
  // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
  // Similar al proporcionado en el código de referencia
  const quizData = [
    {
      question:
        "1. ¿Qué nivel de API es el mínimo requerido para la compatibilidad de CameraX?",
      a: "Android 4.4 (API 19)",
      b: "Android 5.0 (API 21)",
      c: "Android 6.0 (API 23)",
      d: "Android 7.0 (API 24)",
      correct: "b",
      explanation:
        "CameraX ofrece retrocompatibilidad hasta Android 5.0 (API 21).",
    },
    {
      question:
        "2. ¿Qué caso de uso de CameraX permite la captura y guardado de fotos?",
      a: "Vista previa",
      b: "Análisis de imágenes",
      c: "Captura de imágenes",
      d: "Captura de video",
      correct: "c",
      explanation:
        "El caso de uso de captura de imágenes se utiliza para capturar y guardar fotos.",
    },
    {
      question:
        "3. Para agregar CameraX a tu proyecto, ¿dónde debes incluir las dependencias?",
      a: "AndroidManifest.xml",
      b: "MainActivity.kt",
      c: "FotoActivity.kt",
      d: "Build.gradle",
      correct: "d",
      explanation:
        "Las dependencias de CameraX se agregan en el archivo Build.gradle del proyecto.",
    },
    {
      question:
        "4. ¿Qué permiso es necesario declarar para utilizar la cámara en una aplicación Android?",
      a: "android.permission.CAMERA",
      b: "android.permission.ACCESS_FINE_LOCATION",
      c: "android.permission.INTERNET",
      d: "android.permission.WRITE_EXTERNAL_STORAGE",
      correct: "a",
      explanation:
        "Para utilizar la cámara, es necesario declarar el permiso android.permission.CAMERA en el AndroidManifest.xml.",
    },
    {
      question:
        "5. ¿Qué método se implementa para iniciar la cámara con CameraX?",
      a: "onCreate()",
      b: "onStartCamera()",
      c: "takePhoto()",
      d: "startCamera()",
      correct: "d",
      explanation:
        "El método startCamera() se implementa para iniciar la cámara con CameraX.",
    },
    {
      question:
        "6. ¿En qué clase se define la configuración de Preview para CameraX?",
      a: "MainActivity.kt",
      b: "FotoActivity.kt",
      c: "PreviewView",
      d: "AndroidManifest.xml",
      correct: "b",
      explanation:
        "La configuración de Preview para CameraX se define en FotoActivity.kt.",
    },
    {
      question:
        "7. ¿Qué función se usa para capturar fotos en una aplicación de CameraX?",
      a: "captureImage()",
      b: "takePicture()",
      c: "takePhoto()",
      d: "capturePhoto()",
      correct: "c",
      explanation:
        "La función takePhoto() se utiliza para capturar fotos en una aplicación de CameraX.",
    },
    {
      question:
        "8. ¿Qué librería se recomienda para cargar imágenes en ImageView para una aplicación Android?",
      a: "Glide",
      b: "Picasso",
      c: "Fresco",
      d: "Coil",
      correct: "d",
      explanation:
        "Coil es la librería recomendada para cargar imágenes en ImageView en el contexto de este documento.",
    },
    {
      question:
        "9. ¿Cuál es el propósito principal de la función takePhoto() en la aplicación de cámara?",
      a: "Visualizar la foto en un ImageView",
      b: "Guardar la foto en la base de datos",
      c: "Capturar y guardar la foto en el almacenamiento del dispositivo",
      d: "Actualizar la base de datos con la nueva foto",
      correct: "c",
      explanation:
        "La función takePhoto() se utiliza principalmente para capturar y guardar la foto en el almacenamiento del dispositivo.",
    },
    {
      question:
        "10. ¿Dónde se guarda la URI de la foto capturada en la aplicación?",
      a: "En un archivo de texto plano",
      b: "Directamente en el ImageView",
      c: "En la base de datos",
      d: "En SharedPreferences",
      correct: "c",
      explanation:
        "La URI de la foto capturada se guarda en la base de datos según lo descrito en el documento.",
    },
    {
      question: "11. ¿Cómo se visualiza la foto capturada en la aplicación?",
      a: "Mediante un AlertDialog",
      b: "Usando la librería Coil en un ImageView",
      c: "Con un Toast",
      d: "A través de un Fragment",
      correct: "b",
      explanation:
        "Para visualizar la foto capturada, se utiliza la librería Coil para cargar la imagen en un ImageView.",
    },
    {
      question:
        "12. ¿Qué método se modifica para añadir el campo URI en la base de datos?",
      a: "actualizarBBDD()",
      b: "onCreate()",
      c: "inicializarBBDD()",
      d: "insertarBBDD()",
      correct: "a",
      explanation:
        "El método actualizarBBDD() se modifica para incluir el campo URI en la base de datos.",
    },
    {
      question:
        "13. ¿Para qué se utiliza la función cargarLista() en la aplicación?",
      a: "Para cargar las imágenes desde la base de datos",
      b: "Para actualizar la UI con las fotos capturadas",
      c: "Para cargar los detalles de la fruta desde la base de datos",
      d: "Para insertar nuevas fotos en la base de datos",
      correct: "c",
      explanation:
        "La función cargarLista() se utiliza para cargar los detalles de la fruta desde la base de datos.",
    },
    {
      question:
        "14. ¿Cuál es el primer paso para visualizar imágenes en la aplicación?",
      a: "Crear una nueva Activity",
      b: "Configurar la librería Coil",
      c: "Modificar el AndroidManifest.xml",
      d: "Llamar a la función takePhoto()",
      correct: "a",
      explanation:
        "El primer paso para visualizar imágenes es crear una nueva Activity especificada para mostrar la imagen.",
    },
    {
        question: "15. ¿Qué función se utiliza para inicializar la base de datos con el nuevo campo URI?",
        a: "actualizarBBDD()",
        b: "inicializarBBDD()",
        c: "crearBBDD()",
        d: "modificarBBDD()",
        correct: "b",
        explanation: "La función inicializarBBDD() se utiliza para inicializar la base de datos con nuevos campos, incluido el campo URI."
    },
    {
        question: "16. ¿Cómo se pueden visualizar las fotos guardadas en la aplicación?",
        a: "Mediante un RecyclerView",
        b: "Con un ImageView estático",
        c: "Usando un ViewPager",
        d: "A través de un AlertDialog",
        correct: "a",
        explanation: "Para visualizar las fotos guardadas en la aplicación, se utiliza un RecyclerView, permitiendo una visualización dinámica y eficiente."
    },
    {
        question: "17. ¿Cuál es el método utilizado para insertar la URI de la foto en la base de datos?",
        a: "insertarURI()",
        b: "guardarFoto()",
        c: "actualizarBBDD()",
        d: "añadirFoto()",
        correct: "c",
        explanation: "El método actualizarBBDD() es utilizado para insertar o actualizar datos en la base de datos, incluida la URI de la foto."
    },
    {
        question: "18. ¿Qué librería se utiliza para facilitar la carga de imágenes en Android, mencionada en el documento?",
        a: "Glide",
        b: "Picasso",
        c: "Fresco",
        d: "Coil",
        correct: "d",
        explanation: "Coil es la librería recomendada en el documento para facilitar la carga de imágenes en aplicaciones Android."
    },
    {
        question: "19. ¿Cuál es el propósito de la función obtenerFruta()?",
        a: "Obtener el nombre de la fruta de la base de datos",
        b: "Insertar una nueva fruta en la base de datos",
        c: "Obtener los detalles de la fruta, incluyendo la URI de su foto",
        d: "Eliminar una fruta de la base de datos",
        correct: "c",
        explanation: "La función obtenerFruta() se utiliza para obtener los detalles de la fruta, incluyendo la URI de su foto, de la base de datos."
    },
    {
        question: "20. ¿Dónde se configura la librería Coil mencionada para cargar imágenes?",
        a: "En el archivo gradle del módulo app",
        b: "Directamente en el ImageView",
        c: "En el archivo AndroidManifest.xml",
        d: "Dentro de la función onCreate() de la Activity",
        correct: "a",
        explanation: "La configuración de la librería Coil se realiza en el archivo gradle del módulo app para gestionar su importación y uso en el proyecto."
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
