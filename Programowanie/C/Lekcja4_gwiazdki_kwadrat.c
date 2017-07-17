#include<stdio.h>

int main()
{
    int i,j,liczba;
    printf("Liczba gwiazdek: ");
    scanf("%d",&liczba);
    printf("\n");
    for (i=0;i<liczba;i++)
    {
      for (j=0;j<liczba;j++)
      printf("*");
    printf("\n");
    }
    printf("\n");
    system("pause");
}
