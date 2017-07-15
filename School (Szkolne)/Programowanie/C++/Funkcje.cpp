#include<iostream>
#include<cstdio>
#include<iomanip>
#include<math.h>

using namespace std;

void liczKwadrat(long double bok)
{
    cout<<"Pole:"<<bok*bok<<"\nObwod:"<<round(4*bok)<<endl;
}

void liczKolo(long double promien)
{
    cout<<"Pole:"<<M_PI*promien*promien<<"\nObwod:"<<2*M_PI*promien<<endl;
}

void liczProstokat(long double bok1, long double bok2)
{
    cout<<"Pole:"<<bok1*bok2<<"\nObwod:"<<2*bok1+2*bok2<<endl;
}    
   
int main()
{
    cout.setf(ios::fixed);
    cout.precision(2);
    liczKwadrat(12);
    cout<<endl;
    liczKolo(12);
    cout<<endl;
    liczProstokat(12,14);
    // cin.ignore();
    getchar();
    return 0;
}    
