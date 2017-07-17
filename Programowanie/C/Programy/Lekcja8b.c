#include<stdio.h>

float potega(float x, int n);

int main()
{
    float x;
    int n;
    printf("Podstawa potegi: ");
    scanf("%f",&x);
    printf("Wykladnik potegi: ");
    scanf("%d",&n);
    printf("\n%.0f ^ %d = %.0f\n\n",x,n,potega(x,n));
    system("pause");
}

float potega(float x, int n)
{
    return pow(x,n);
}
