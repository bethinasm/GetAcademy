// See https://aka.ms/new-console-template for more information

/* OPPGAVE:
    Reverser stringen!
   
   - Lag et program hvor du kan skrive inn en tekst, og når du sender teksten inn vil du få tilbake teksten reversert. Gjør dette uten å bruke innebygde reverse metoder

   - Bygg videre ved å legge til flere ting man kan gjøre med stringen, eksempel:

   - Alternativer for hva man vil gjøre, trykk 1,2 eller 3 for å reversere, konvertere til uppercase eller lowercase

 */

Console.WriteLine("Write something you want reversed");
var userInput = Console.ReadLine();

Thread.Sleep(400);

Console.WriteLine("You wrote:" + userInput);

Thread.Sleep(400);
mySwitch();


void reverse()
{
    Console.WriteLine("Now we reverse it");

    Thread.Sleep(400);

    reverseInput();
    mySwitch();
}

string reverseInput()
{
    for (int i = 0; i < userInput.Length; i++)
    {
        Console.Write(userInput[userInput.Length - i -1]);
    }

    return userInput;
}
Thread.Sleep(400);

string result;
void toUpperCase()
{
    Console.WriteLine();
    result = userInput.ToUpper();
    Console.WriteLine(result);
    mySwitch();
}

void toLowerCase()
{
    Thread.Sleep(400);

    result = userInput.ToLower();
    Console.WriteLine(result);
    mySwitch();
}

void mySwitch()
{
    Console.WriteLine("Press 1 for reversed text.");
    Console.WriteLine("Press 2 for uppercase text.");
    Console.WriteLine("Press 3 for lowercase text.");
    Console.WriteLine("Press 4 to exit console.");
    var userChoice = Console.ReadLine();

    switch (userChoice)
    {
        case "1":
           reverse();
            break;
        case "2":
            toUpperCase();
            break;
        case "3":
            toLowerCase();
            break;
        case "4":
            Environment.Exit(0);
            break;
    }
}
