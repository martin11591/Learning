#include<stdio.h>

int main()
{
  int *wsk=NULL;          // definicja wska�nika oraz przypisanie NULL
  int k;                  // definicja zmiennej k
  int m;                  // definicja zmiennej m
  k=5;                    // wpisanie warto�ci do zmiennej k
  wsk=&k;                 // ustawienie wska�nika na zmienn� k
  printf("%d\n\n", *wsk); // wy�wietlenie warto�ci zmiennej m przez wska�nik
  system("pause");
}
