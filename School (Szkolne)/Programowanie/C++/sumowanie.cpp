#include<iostream>
#include<cstdio>

using namespace std;

long int sumowanie(long int a, long int b, bool wypis)
{
    long int tmp;
    long int suma=0;
    if (a>b)
    {
        tmp=a;
        a=b;
        b=tmp;
    }    
    while (a<=b)
    {
        if (wypis) cout<<suma<<"+"<<a<<"=";
        suma+=a;
        if (wypis) cout<<suma<<endl;
        a+=1;
    }    
    if (wypis) cout<<endl;
    return suma;
}    

int main()
{
    long int a,b,tmp;  
    cout<<"Podaj dwie liczby:\n\n";
    cin>>a>>b;
    if (a>b)
    {
        tmp=a;
        a=b;
        b=tmp;
    }  
    cout<<"\n";
    tmp=sumowanie(a,b,true);
    cout<<"Wartosc sumy wszystkich liczb calkowitych\nnalezacych do przedzialu <"<<a<<","<<b<<"> wynosi "<<tmp<<endl;
    cin.ignore();
    getchar();
    return 0;
}    
