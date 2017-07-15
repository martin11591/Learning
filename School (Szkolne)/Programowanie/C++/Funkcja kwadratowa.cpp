#include<iostream>
#include<cstdio>
#include<math.h>

using namespace std;

float a,b,c,delta,x0,x1,x2;

float kwadratowa(float a, float b, float c)
{
      if (a==0)
      {
               cout<<"Funkcja nie moze byc obliczona\n";
               return -1;
      }
      delta=pow(b,2)-4*a*c;
      if (delta<0)
      {
                  cout<<"Funkcja nie ma miejsc zerowych\n";
                  return 0;
      }
      if (delta==0)
      {
                   x0=-b/2*a;
                   cout<<"Funkcja ma jedno miejsce zerowe: "<<x0<<endl;
                   return 1;
      }
      if (delta>0)
      {
                  x1=(-b-pow(delta,1/2.0))/2*a;
                  x2=(-b+pow(delta,1/2.0))/2*a;
                  cout<<"Funkcja ma dwa miejsca zerowe: "<<x1<<" i "<<x2<<endl;
                  return 2;
      }
}     

int main()
{
    do
    {
    cout<<"Podaj wartosc a:";
    cin>>a;
    if (a==0) cout<<"Liczba a nie moze byc rowna 0!\n";
    } while (a==0);
    cout<<"Podaj wartosc b:";
    cin>>b;
    cout<<"Podaj wartosc c:";
    cin>>c;
    cout<<endl;
    cout<<a<<"x2+"<<b<<"x+"<<c<<"=0\n\n";
    kwadratowa(a,b,c);
    cin.ignore();
    getchar();
    return 0;
}
