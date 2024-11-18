//VARIABELTILORDNING OPPGAVER

void GreetUser()
{
    Console.WriteLine("Hello, welcome!");
}

/* Oppgave 1:
    Lag en metode som tar inn og returnerer summen av to tall 
*/
int tall1 = 5;
int tall2 = 10;
int ReturnTwoSumOfNumbers(int number, int number2)
{
    return number + number2;
}


/* Oppgave 2:
    Lag en metode som skal printe setningen "Denne metoden returnerer ingenting" til konsollen.
    Denne metoden skal altså ikke returnere noe verdi ;)
 */
void ReturnNothing()
{
    Console.WriteLine("This method returns nothing :)");
}

GreetUser();
Console.ReadKey();
Console.WriteLine("What is your name?");

var userInput = Console.ReadLine();
Console.WriteLine($"Nice to meet you {userInput}!");

Console.ReadKey();
Console.WriteLine($"{ReturnTwoSumOfNumbers(tall1, tall2)}"); //oppgave 1

Console.ReadKey();
ReturnNothing();
Console.WriteLine("You can now close this window");