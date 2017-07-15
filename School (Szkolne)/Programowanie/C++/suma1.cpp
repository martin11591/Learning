#include<iostream>
#include<cstdio>

using namespace std;

int a,b;
long suma;

int main()
{
    cout<<"Obliczanie sumy dwoch liczb.\n\nPodaj pierwsza liczbe:";
    cin>>a;
    cout<<"Podaj druga liczbe:";
    cin>>b;
    suma=a+b;
    cout<<"\nSuma liczb "<<a<<" i "<<b<<" wynosi "<<suma;
    getchar();
    getchar();
    return 0;
}    
