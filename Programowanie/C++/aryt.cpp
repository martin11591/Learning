#include<iostream>
#include<cstdio>

using namespace std;

float a,b,srednia;

float aryt()
{
    cout<<"Podaj pierwsza liczbe:";
    cin>>a;
    cout<<"Podaj druga liczbe:";
    cin>>b;
    srednia=(a+b)/2;
    return 0;
}

int main()
{
    cout<<"Program liczy srednia arytmetyczna dwoch liczb.\n\n";
    aryt();
    cout<<"\nSrednia liczb "<<a<<" i "<<b<<" wynosi "<<srednia<<endl;
    cin.ignore();
    getchar();
    return 0;
}
