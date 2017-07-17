#include<iostream>
#include<cstdlib>
#include<ctime>
#include<math.h>

using namespace std;

void losowanie(double *tab, int &ilosc, double min, double max, int precyzja)
{
     int i;
     int ile=0;
     bool test;
     double los, tmp;
     if (min>max)
     {
         tmp=min;
         min=max;
         max=tmp;
     }
     srand(time(NULL));
     cout<<"\n";
     if (ilosc>(int)((max-min)*pow(10,precyzja)))
     {
         ilosc=(int)((max-min)*pow(10,precyzja))+1;
         cout<<"Maksymalna mozliwosc kombinacji: "<<ilosc<<"\n\n";
     }
     for (ile=0; ile<ilosc; ile++)
     {
         do
         {
             test=false;
             los=rand(); // przy napisaniu w jednej linii wychodzi 0
             los=los/RAND_MAX*(max-min)+min;
             los=los*pow(10,precyzja);
             los=(long int)los;
             los=los/pow(10,precyzja);
             for (i=0; i<ile; i++)
                 if (tab[i]==los)
                 {
                     test=true;
                     break;
                 }
         } while (test==true);
         tab[ile]=los;
     }
}

int main()
{
    int i;
    int ilosc, precyzja;
    double min, max;
    cout<<"Podaj przedzial losowanych liczb\nMin: ";
    cin>>min;
    cout<<"Max: ";
    cin>>max;
    cout<<"Podaj ilosc liczb do wylosowania: ";
    cin>>ilosc;
    cout<<"Podaj liczbe cyfr po przecinku: ";
    cin>>precyzja;
    double tab[ilosc];
    losowanie(tab,ilosc,min,max,precyzja);
    cout.precision(precyzja+1);
    cout.setf(ios::showpoint);
    for (i=0; i<ilosc; i++)
      //cout<<(i+1)<<". liczba to "<<tab[i]<<"\n";
      printf("%d. liczba to %.6f\n",(i+1),tab[i]);
    cout<<"\n";
    system("pause");
}
