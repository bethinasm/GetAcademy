// Oppgaver om conditions - if/else

using System.Numerics;
using System.Threading.Channels;

/*  Oppgave 1: 
    Lag en metode som tar imot to tall og returnerer true dersom tallene er like.
*/

Console.WriteLine("OPPGAVE 1:");

Console.WriteLine("Skriv inn ett tall");
var numberInput1 = Console.ReadLine();
Console.WriteLine("Supert, nå skriv inn et til!");
var numberInput2 = Console.ReadLine();
IsNumberEqual();

void IsNumberEqual()
{
    if (numberInput1 == numberInput2)
    {
        Console.WriteLine("Tallene du skrev inn er like!");
    }
    else
    {
        Console.WriteLine("Tallene du skrev inn er ikke like");
    }
}

Console.ReadKey();


/*  Oppgave 2: 
    Lag en metode som tar imot to tall og returnerer summen av tallene dersom de er ulike, 
    og returnerer tallene multiplisert med hverandre dersom de er like
*/

Console.WriteLine("OPPGAVE 2:");

Random rand = new Random();
int RandomNr1 = rand.Next(1, 11);
int RandomNr2 = rand.Next(1, 11);
Console.WriteLine($"First random number is: {RandomNr1}");
Console.WriteLine($"Second random number is: {RandomNr2}");

int result = CheckNumbers(RandomNr1, RandomNr2);
Console.WriteLine($"The result is: {result}.");
int CheckNumbers(int RandomNr1, int RandomNr2)
{
    if (RandomNr1 == RandomNr2)
    {
        Console.WriteLine("The numbers were equal, so they were multiplied.");
        return RandomNr1 * RandomNr2;
    }
    else
    {
        Console.WriteLine("The numbers were not equal, so they were added together.");
        return RandomNr1 + RandomNr2;
    }
}

Console.ReadKey();

/*  Oppgave 3:
    Lag en metode som tar inn to int verdier. Dersom en av de, eller summen til int verdiene blir 30,
    skal metoden returnere true. Ellers returnerer metoden false
*/

Console.WriteLine("OPPGAVE 3");
