#include<stdio.h>

int main()
{
    double a,b;
    do
    {
      printf("Podaj a (a>0): ");
      scanf("%lf",&a);
    } while (a<=0);
    do
    {
      printf("Podaj b (b>0): ");
      scanf("%lf",&b);
    } while (b<=0);
    printf("\nNWD(%.0lf,%.0lf)=",a,b);
    while (a!=b)
    {
      if (a<b) b-=a;
      else a-=b;
    }
    printf("%.0lf\n\n",a);
    system("pause");
    return 0;
}
