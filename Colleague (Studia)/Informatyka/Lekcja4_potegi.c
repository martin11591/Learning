#include<stdio.h>

int main()
{
    int a,b,i;
    printf("Podstawa potegi: ");
    scanf("%d",&a);
    long int c=a;
    printf("Wykladnik potegi: ");
    scanf("%d",&b);
    for (i=1; i<b; i++)
      c*=a;
    printf("\n\n%d ^ %d = %d\n",a,b,c);
    system("pause");
}
