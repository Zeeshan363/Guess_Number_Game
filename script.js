let x = Math.floor((Math.random() * 100) + 1);

alert("We are entering the game now!!! ")
var user_number;
var score = 101;

do{
    score--;
    user_number = prompt("Please enter any number between 1 - 100")
    user_number = Number.parseInt(user_number)

    if(user_number==x){
        alert("You won..!!! Your score is "+score);
    }
    else if(user_number>=x){
        alert("My number is small")
        
    }
    else if(user_number<=x){
        alert("My number is greater")
    }
}while(x!=user_number);

    alert("Thanks for playing game with me")