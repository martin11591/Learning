#include<stdio.h>

#define N 10

int main()
{
    int tab[N]={1,4,6,8,2,4,5,0,-2,-8};
    int i;
    int *wsk=NULL;                      // ustawienie wskaźnika na zerowy element tablicy
    wsk=&tab[0];
    for (i=0; i<N; i++)
    {
        printf("%d\t",*wsk);            // wyświetlenie wartości elementu tablicy
        wsk++;                          // przesunięcie wskaźnika na kolejny element
    }
    printf("\n");
    system("pause");
}
