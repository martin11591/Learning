#include<stdio.h>

int main()
{
  int *wsk=NULL;       // definicja wska�nika oraz przypisanie NULL
  int k;               // definicja zmiennej k
  int m;               // definicja zmiennej m
  k=5;                 // wpisanie warto�ci do zmiennej k
  wsk=&k;              // ustawienie wska�nika na zmienn� k
  m=*wsk;              // skopiowanie warto�ci ze zmiennej k przez wska�nik
  printf("%d\n\n", m); // wy�wietlenie warto�ci zmiennej m
  system("pause");
}
