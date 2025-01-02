let maximum=parseInt(prompt("Enter the maximum number"));
while(!maximum)
{
    maximum=parseInt(prompt("Enter a valid number"))
}
let num=Math.floor(Math.random()*maximum)+1;
//this will generate a number from 1 to userinput 
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess!=num)
{
    if(guess>num)
    {
        guess = (prompt("Number too high"));
        attempts++;
    }
    else if(guess<num)
    {
        guess= parseInt(prompt("Number too Low"))
        attempts++;
    }
    else if (guess==="Q")
    {
        console.log('Boo you quit')
        break;
    }
    
}
console.log("You got it!");
console.log(`You took ${attempts} attempts`)