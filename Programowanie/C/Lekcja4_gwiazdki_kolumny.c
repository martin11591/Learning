#include<stdio.h>

int main()
{
    int i,liczba;
    printf("Liczba gwiazdek: ");
    scanf("%d",&liczba);
    for(i=0;i<liczba;i++)
      printf("*");
    printf("\n");
    system("pause");
}
