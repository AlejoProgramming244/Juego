function addUser()
{
    //Obtener los valores de player 1 y player 2 para almacenar en las variables 
    player_1 = document.getElementById("player1_name_input").value;
    player_2 = document.getElementById("player2_name_input").value;
    
    localStorage.setItem("PLAYER-1", player_1);
    localStorage.setItem("PLAYER-2", player_2);

    window.location = "game_page.html";
};