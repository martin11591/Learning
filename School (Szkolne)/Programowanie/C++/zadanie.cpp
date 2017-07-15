#include<iostream>
#include<cstdio>

using namespace std;

int main()
{
    long liczba;
    int i=0;
    cout << "Podaj dowolna liczbe:";
    cin >> liczba;
    if (liczba%2!=0) liczba++;         // sprawdza, czy wprowadzona liczba jest parzysta
    while (i<100)
    {
        cout << liczba+i*2 << "   ";
        if ((i+1)%10==0) cout << endl;
        i++;
    }    
    cin.ignore();
    getchar();
    return 0;
}
