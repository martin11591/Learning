#include<iostream>
#include<cstdio>
#include<cstdlib>

using namespace std;

int main()
{
    double a,b;
    long T=0;
    long R;
    long ilosc;
    srand(time(NULL));
    cout<<"Na podstawie ilu punktow znalezc wartosc liczby pi?";
    cin>>ilosc;
    for(R=0;R<ilosc;R++)
    {
        a=(double)rand()/(RAND_MAX);
        b=(double)rand()/(RAND_MAX);
        if(a*a+b*b<=1) T++;
    }
    cout<<"Liczba PI ma wartosc:"<<(double)(4*T)/R;
    cin.ignore();
    getchar();
    return 0;
}        
