// KONSOLLAPPLIKASJONER
/* Oppgave 1: 
    Lag en konsoll-app som skriver til konsollen 
    "Hei, hva heter du?",

    Deretter leser inn input fra bruker og 
    til slutt printer ut "Velkommen + det brukeren skrev"
 */
    Console.WriteLine("Hei, hva heter du?");
    var userInput = Console.ReadLine();
    Console.WriteLine($"Velkommen, {userInput}!");

// STERK TYPING OG VERDITYPER
/* Oppgave 1:
    - Lag 8 variabler og gi dem en verdi.
    - Det skal være en variabel per hver type: 
      int, long, float, decimal, double, string, char og bool. 
*/
    int number = 15;
    long longNumber = 8;
    double doubleNumber = 15.0;
    float floatNumber = 15.08F; // nøyaktig
    decimal decimalNumber = 15.0800M; // veldig nøyaktig
    string text = "Hei på deg!";
    char letter = 'B';
    bool isValid = false; //eller true;
    var input = Console.ReadLine();

/* Oppgave 2: 
 Lag en konsoll-applikasjon som lager 3 variabler. De kan hete a, b og sum. 
    - a skal være en int. 
    - b skal være en decimal. 

Verdiene variablene skal ha er: 
    - a = 5;
    - b = 3;
    - sum = a + b;

Hva slags type variabel må sum være? 
 */
int a = 5;
decimal b = 3.000M;
decimal sum = a + b;
Console.WriteLine($"Summen av {a} + {b} er lik {sum}. {sum} er en decimal.");
