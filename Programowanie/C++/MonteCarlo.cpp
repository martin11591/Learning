#include<iostream>
#include<cstdio>

using namespace std;

int main()
{
    long int x, y, il, T, R;
    srand(time(NULL));
    cout<<"Ilosc:";
    cin>>il;
    T=0;
    R=0;
    while (!R<il)
    {
        R++;
        x=rand();
        y=rand();
        if (x*2+y*2<=1) {T++;}
    }
    cout<<4*T/R;    
}    
