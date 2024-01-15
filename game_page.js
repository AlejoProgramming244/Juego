//Almacenar los nombres de los jugadores en una variable
player_1= localStorage.getItem("PLAYER-1");
player_2= localStorage.getItem("PLAYER-2");

//Variables para guardar la puntuación
player1_score= 0;
player2_score= 0;

//Actualizar el nombre de los jugadores
document.getElementById("player1_name").innerHTML= player_1 + " : ";
document.getElementById("player2_name").innerHTML= player_2 + " : ";

//Actualizar el puntaje de los jugadores
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Turno para preguntar: " + player_1;
document.getElementById("player_answer").innerHTML = "Turno para responder: " + player_2;

function send()
{
    get_word = document.getElementById("word").value;   //Obtener valor de la entrada de texto
    word = get_word.toLowerCase();   //Para convertir la palabra en minuscula
    console.log("Palabra en minuscula", word);

    charAt1= word.charAt(1);  //Obtener la letra 1
    console.log(charAt1);

    length_3= Math.floor(word.length/3);        //Math.floor es para redondear el número
    charAt2= word.charAt(length_3);       //Obtener la letra 2
    console.log(charAt2);

    length_resto= word.length - 1;
    charAt3= word.charAt(length_resto);       //Obtener la letra 3
    console.log(charAt3);


    //Remplazar letras
    remove_char1= word.replace(charAt1, "_");     // Remplaza la letra que guarde en la variable anterior por un "_"
    remove_char2= remove_char1.replace(charAt2, "_");     // Remplaza la letra que guarde en la variable anterior por un "_"
    remove_char3= remove_char2.replace(charAt3, "_");     // Remplaza la letra que guarde en la variable anterior por un "_"
    console.log(remove_char3);     // Remplaza la letra que guarde en la variable anterior por un "_"

    
    question_word= "<h4 id='word_display'> Pregunta "+remove_char3;       //Añadimos un h4 para el almacenamiento de la pregunta
    input_box= "<br>Respuesta : <input type='text' id='input_check_box'>";    //Input para respuesta
    check_button= "<br> <br><button class='btn btn-info' onclick='check()'>Comprobar</button>";    //Botón para comprobar

    row=  question_word+input_box+check_button;      //Comprobar en una sola variable

    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= " ";  
}

// Cambiar los jugadores que responden y que preguntan

question_turn= "PLAYER-1"
answer_turn= "PLAYER-2"

function check()
{
    getAnwer= document.getElementById("input_check_box").value;
    answer= getAnwer.toLowerCase();
    console.log("Respuesta en minusculas", answer);

    if(answer == word)
    {
        if(answer_turn == "PLAYER-1")
        {
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else
        {
            player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }

    if(question_turn == "PLAYER-1")
    {
        question_turn = "PLAYER-2"
        document.getElementById("player_question").innerHTML= "Turno para preguntar: " + player_2
    }
    else
    {
        question_turn = "PLAYER-1"
        document.getElementById("player_question").innerHTML= "Turno para preguntar: " + player_1
    }

    if(answer_turn == "PLAYER-1")
    {
        answer_turn = "PLAYER-2"
        document.getElementById("player_answer").innerHTML= "Turno para responder: " + player_2
    }
    else
    {
        answer_turn = "PLAYER-1"
        document.getElementById("player_answer").innerHTML= "Turno para responder: " + player_1
    }

    document.getElementById("output").innerHTML= "";
}