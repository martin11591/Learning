#include<stdio.h>

int main()
{
  int *wsk=NULL;       // definicja wskaünika oraz przypisanie NULL
  int k;               // definicja zmiennej k
  int m;               // definicja zmiennej m
  k=5;                 // wpisanie wartoúci do zmiennej k
  wsk=&k;              // ustawienie wskaünika na zmiennπ k
  m=*wsk;              // skopiowanie wartoúci ze zmiennej k przez wskaünik
  printf("%d\n\n", m); // wyúwietlenie wartoúci zmiennej m
  system("pause");
}
