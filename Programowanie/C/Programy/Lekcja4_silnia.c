#include<stdio.h>

int main()
{
    int a,i;
    printf("Silnia: ");
    scanf("%d",&a);
    long int b=1;
    for (i=2; i<=a; i++)
      b*=i;
    printf("\n%d! = %d\n",a,b);
    system("pause");
}
