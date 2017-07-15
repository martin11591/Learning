#include<stdio.h>

void pierwiastki(float a, float b, float c);

int main()
{
    float a,b,c;
    printf("Rownanie kwadratowe w postaci ax^2+bx+c=0.\n\nPodaj parametry:\na=");
    scanf("%f",&a);
    printf("b=");
    scanf("%f",&b);
    printf("c=");
    scanf("%f",&c);
    printf("\n");
    pierwiastki(a,b,c);
    printf("\n");
    system("pause");
}

void pierwiastki(float a, float b, float c)
{
    float delta, pDelta;
    delta=b*b-4*a*c;
    if (delta<0) printf("Rownanie nie ma rozwiazan.\n");
      else
      if (delta==0) printf("Rozwiazaniem rownania jest %.4f.\n",((-b)/(2*a)));
        else
        {
            pDelta=sqrt(delta);
            printf("Rozwiazaniem rownania sa %.4f lub %.4f.\n",((-b-pDelta)/(2*a)),((-b+pDelta)/(2*a)));
        }
    return;
}
