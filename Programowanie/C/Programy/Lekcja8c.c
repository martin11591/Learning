#include<stdio.h>

int silnia(int x);

int main()
{
    int x;
    printf("Oblicz silnie z liczby: ");
    scanf("%d",&x);
    printf("\n%d! = %d\n\n",x,silnia(x));
    system("pause");
}

int silnia(int x)
{
    int i;
    int s=1;
    for (i=1; i<=x; i++)
      s*=i;
    return s;
}
