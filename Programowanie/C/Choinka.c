#include<stdio.h>

int main()
{
    int szerokosc,wysokosc,i,j;
    printf("Wysokosc trojkata i choinki: ");
    scanf("%d",&wysokosc);
    if (wysokosc<2) wysokosc=2;
    if (wysokosc>40) wysokosc=40;
    printf("\n");
    for (i=1; i<=wysokosc; i++)
    {
      for (j=0; j<i; j++)
        printf("*");
      printf("\n");
    }
    printf("\n");
    for (i=1; i<=wysokosc; i++)
    {
      for (j=0; j<wysokosc-i; j++)
        printf(" ");
      for (j=0; j<i*2-1; j++)
        printf("*");
      printf("\n");
    }
    printf("\n");
    system("pause");
}
