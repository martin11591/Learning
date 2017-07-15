#include<stdio.h>

int main()
{
    int szerokosc,wysokosc,i,j;
    printf("Maksymalna wysokosc choinki\nmieszczaca sie w oknie wynosi 39\nbez zmian buforow kolumn\ni wierszy we wlasciwosciach\nokna konsoli.\n\n");
    printf("Wysokosc choinki: ");
    scanf("%d",&wysokosc);
    printf("\n");
    for (i=1; i<=wysokosc; i++)
    {
      printf("%2d.",i);
      for (j=0; j<wysokosc-i; j++)
        printf(" ");
      for (j=0; j<i*2-1; j++)
        printf("*");
      printf("\n");
    }
    printf("\n");
    system("pause");
}
