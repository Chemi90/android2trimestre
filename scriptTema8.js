document.addEventListener('DOMContentLoaded', () => {
    // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
    // Similar al proporcionado en el código de referencia
    const quizData = [
        {
            question: "1. ¿Qué clases de Kotlin se utilizan para validar la entrada del usuario en un formulario de login?",
            a: "TextUtils y Patterns",
            b: "SharedPreferences y ActivityLogin",
            c: "MainActivity y LoginActivity",
            d: "ConstraintLayout y MotionLayout",
            correct: "a",
            explanation: "TextUtils y Patterns son las clases utilizadas para realizar comprobaciones y validar las reglas básicas de una dirección de email correcta en Kotlin."
          },
          
          {
            question: "2. ¿Para qué se configuran las Shared Preferences en una aplicación Android?",
            a: "Para cambiar el tema de la aplicación",
            b: "Para guardar los datos de acceso",
            c: "Para configurar el SplashScreen",
            d: "Para validar la entrada del usuario",
            correct: "b",
            explanation: "Las Shared Preferences se utilizan para guardar datos de acceso de forma que no sea necesario especificar el email y la contraseña cada vez que se accede a la aplicación."
          },
          
          {
            question: "3. ¿En qué archivo se configura el SplashScreen en una aplicación Android?",
            a: "build.gradle",
            b: "MainActivity.kt",
            c: "Theme.xml",
            d: "AndroidManifest.xml",
            correct: "a",
            explanation: "El archivo build.gradle es donde se realiza la configuración inicial para implementar un SplashScreen en una aplicación Android."
          },
          
          {
            question: "4. ¿Qué archivo se modifica para añadir propiedades a un MotionLayout?",
            a: "activity_main.xml",
            b: "activity_login.xml",
            c: "activity_main_xml_motionlayout_scene.xml",
            d: "AndroidManifest.xml",
            correct: "c",
            explanation: "El archivo activity_main_xml_motionlayout_scene.xml se modifica para añadir propiedades específicas a un MotionLayout, como la transición automática."
          },
          
          {
            question: "5. ¿Dónde se realiza la configuración inicial del MotionLayout para un SplashScreen?",
            a: "En LoginActivity.kt",
            b: "En MainActivity",
            c: "En activity_main.xml",
            d: "En build.gradle",
            correct: "c",
            explanation: "La configuración inicial del MotionLayout para un SplashScreen se realiza en el archivo activity_main.xml, dentro de un ConstraintLayout."
          },
          
          {
            question: "6. ¿Cuál es el propósito de utilizar MotionLayout en el desarrollo de una aplicación Android?",
            a: "Para guardar datos de usuario",
            b: "Para validar emails",
            c: "Para crear animaciones complejas y transiciones de layouts",
            d: "Para configurar las Shared Preferences",
            correct: "c",
            explanation: "MotionLayout se utiliza para crear animaciones complejas y transiciones entre layouts en una aplicación Android, mejorando la experiencia de usuario."
          },
          
          {
            question: "7. ¿Qué método de la clase TextUtils se utiliza para verificar si un string está vacío?",
            a: "isValidEmail()",
            b: "isEmpty()",
            c: "savePreferences()",
            d: "animateToEnd()",
            correct: "b",
            explanation: "El método isEmpty() de la clase TextUtils se utiliza para verificar si un string está vacío o no, lo cual es útil para validar la entrada del usuario."
          },
          {
            question: "8. ¿Qué elemento de Kotlin se usa para realizar transiciones y animaciones en un SplashScreen?",
            a: "TextView",
            b: "MotionLayout",
            c: "SharedPreferences",
            d: "Patterns",
            correct: "b",
            explanation: "MotionLayout se utiliza para realizar transiciones y animaciones complejas, ideal para implementar en un SplashScreen."
          },
          
          {
            question: "9. ¿Qué archivo se modifica para añadir una transición automática en MotionLayout?",
            a: "activity_main.kt",
            b: "AndroidManifest.xml",
            c: "build.gradle",
            d: "activity_main_xml_motionlayout_scene.xml",
            correct: "d",
            explanation: "El archivo activity_main_xml_motionlayout_scene.xml se modifica para añadir propiedades de transición automática en MotionLayout."
          },
          
          {
            question: "10. ¿Dónde se coloca un TextView con una imagen de fondo para un SplashScreen en MotionLayout?",
            a: "Dentro de un LinearLayout",
            b: "Dentro de un ConstraintLayout convertido en MotionLayout",
            c: "Dentro de un FrameLayout",
            d: "Dentro de un ScrollView",
            correct: "b",
            explanation: "Para un SplashScreen en MotionLayout, un TextView con imagen de fondo se coloca dentro de un ConstraintLayout que se ha convertido en MotionLayout."
          },
          
          {
            question: "11. ¿Cuál es el propósito de la propiedad motion:autoTransition en MotionLayout?",
            a: "Permitir la transición entre actividades",
            b: "Añadir animaciones a botones",
            c: "Realizar transición automática al final de una animación",
            d: "Controlar la velocidad de las transiciones",
            correct: "c",
            explanation: "La propiedad motion:autoTransition en MotionLayout permite realizar una transición automática al final de una animación."
          },
          
          {
            question: "12. ¿En qué archivo se realiza la configuración inicial para implementar un SplashScreen?",
            a: "MainActivity.kt",
            b: "build.gradle",
            c: "AndroidManifest.xml",
            d: "app/src/main/res/values/strings.xml",
            correct: "b",
            explanation: "La configuración inicial para implementar un SplashScreen, incluyendo dependencias necesarias, se realiza en el archivo build.gradle."
          },
          
          {
            question: "13. ¿Qué método de Kotlin se utiliza para comprobar si una cadena de texto está vacía?",
            a: "string.isEmpty()",
            b: "TextUtils.isEmpty()",
            c: "Patterns.isEmpty()",
            d: "SharedPreferences.isEmpty()",
            correct: "b",
            explanation: "El método TextUtils.isEmpty() se utiliza para comprobar si una cadena de texto está vacía, facilitando la validación de campos en formularios."
          },
          
          {
            question: "14. ¿Cuál es la función de la clase Patterns en Kotlin?",
            a: "Guardar datos de usuario",
            b: "Realizar animaciones en la UI",
            c: "Validar la dirección de email",
            d: "Configurar el SplashScreen",
            correct: "c",
            explanation: "La clase Patterns, específicamente con su método de validación de email, se utiliza para validar las direcciones de correo electrónico."
          },
          {
            question: "15. ¿Qué se necesita configurar en `build.gradle` para implementar un SplashScreen en Kotlin?",
            a: "Dependencias para Retrofit",
            b: "Dependencias para MotionLayout",
            c: "Configuración de minSdkVersion",
            d: "Dependencias para Firebase",
            correct: "b",
            explanation: "Para implementar un SplashScreen utilizando MotionLayout en Kotlin, es necesario configurar las dependencias apropiadas en el archivo `build.gradle`."
          },
          
          {
            question: "16. ¿Qué método se utiliza para guardar datos de acceso en SharedPreferences?",
            a: "commit()",
            b: "apply()",
            c: "save()",
            d: "store()",
            correct: "b",
            explanation: "El método `apply()` se utiliza para guardar datos de acceso en SharedPreferences de manera asíncrona y segura."
          },
          
          {
            question: "17. ¿Cuál es el propósito de utilizar `MotionLayout` en las aplicaciones Android?",
            a: "Para mejorar la seguridad de la app",
            b: "Para almacenar datos de usuario",
            c: "Para implementar animaciones y transiciones de interfaces",
            d: "Para gestionar la base de datos SQLite",
            correct: "c",
            explanation: "MotionLayout se utiliza para implementar animaciones y transiciones complejas en las interfaces de las aplicaciones Android, mejorando la experiencia del usuario."
          },
          
          {
            question: "18. ¿Cómo se verifica si un campo de texto está vacío en Kotlin?",
            a: "Usando el método `isBlank()`",
            b: "Mediante la propiedad `length`",
            c: "Con el método `isEmpty()` de TextUtils",
            d: "Utilizando Regex",
            correct: "c",
            explanation: "El método `isEmpty()` de la clase TextUtils se utiliza para verificar si un campo de texto está vacío en Kotlin."
          },
          
          {
            question: "19. ¿Para qué se utiliza la clase `Patterns` en Kotlin?",
            a: "Para realizar cálculos matemáticos",
            b: "Para validar direcciones de email",
            c: "Para gestionar conexiones de red",
            d: "Para animaciones gráficas",
            correct: "b",
            explanation: "La clase `Patterns` proporciona patrones de expresiones regulares, como para validar direcciones de email correctamente."
          },
          
          {
            question: "20. ¿Cuál es la ventaja de utilizar `apply()` sobre `commit()` al editar SharedPreferences?",
            a: "`apply()` es síncrono y `commit()` es asíncrono",
            b: "`apply()` ejecuta la escritura en disco inmediatamente",
            c: "`apply()` es asíncrono y no bloquea el hilo principal",
            d: "No hay diferencia entre `apply()` y `commit()`",
            correct: "c",
            explanation: "`apply()` realiza cambios en SharedPreferences de manera asíncrona y no bloquea el hilo principal, lo que mejora el rendimiento de la app."
          }
          
    ];
    
    
    const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

function loadQuiz() {
    const quizQuestions = quizData.map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
    }).join('');
    quizForm.innerHTML = quizQuestions;
}

function submitQuiz() {
    const answers = quizData.map((_, index) => {
        return document.querySelector(`input[name="question${index}"]:checked`)?.value;
    });

    let score = 0;
    let resultsHTML = '';

    answers.forEach((answer, index) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (answer === quizData[index].correct) {
            score++;
            resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
            questionElement.classList.remove('incorrect');
        } else {
            resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            questionElement.classList.add('incorrect');
        }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
}

window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
loadQuiz();
});