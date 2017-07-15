#include<stdio.h>

int main()
{
    int i,n;
    double fib,fib1=1,fib2=1;
    printf("Podaj liczbe (min: 0, max: 82): ");
    scanf("%d",&n);
    if (n<0) n=0;
    if (n>82) n=82;
    for (i=0; i<=n; i++)
    {
      fib=fib1+fib2;
      printf("fib(%d)=%.0lf\n",i,fib1);
      fib1=fib2;
      fib2=fib;
    }
    printf("\n");
    system("pause");
    return 0;
}
