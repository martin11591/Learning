#include<iostream>
#include<cstdio>

using namespace std;

double l1,l2,l3,l4;

double maxOf4(double a, double b, double c, double d)
{
    double max=a;
    if (b>max) max=b;
    if (c>max) max=c;
    if (d>max) max=d;
    return max;
}

int main()
{
    cout<<"Podaj cztery liczby\n\n";
    cout<<"1. liczba:";
    cin>>l1;
    cout<<"2. liczba:";
    cin>>l2;
    cout<<"3. liczba:";
    cin>>l3;
    cout<<"4. liczba:";
    cin>>l4;
    cout<<"\nNajwieksza z nich to "<<maxOf4(l1,l2,l3,l4)<<"\n";
    cin.ignore();
    getchar();
    return 0; 
}    
