#include<stdio.h>

void trojkat(int a, char znak);

int main()
{
    int a;
    char znak;
    printf("Wysokosc trojkata prostokatnego: ");
    scanf("%d",&a);
    fflush(stdin);
    printf("Znak z ktorego bedzie tworzony trojkat: ");
    scanf("%c",&znak);
    fflush(stdin);
    printf("\n");
    trojkat(a,znak);
    printf("\n");
    system("pause");
}

void trojkat(int a, char znak)
{
     int i,j;
     for (i=0; i<a; i++)
     {
         for (j=0; j<=i; j++)
           printf("%c",znak);
         printf("\n");
     }
     return;
}
