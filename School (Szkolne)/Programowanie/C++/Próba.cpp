#include <iostream>

using namespace std;

void napis()
{ //definicja cia�a funkcji
 cout << "Funkcja dziala poprawnie." << endl;
}

int dodaj(int a, int b)
{
 return a+b; 
}

int main()
{
 napis(); //wywo�anie funkcji
 int wynik = dodaj(5,7);
 cout << "5 + 7 = " << wynik << endl;
 return 0;
}
