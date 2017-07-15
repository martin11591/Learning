#include<stdio.h>

int main()
{
    float a,b,c;
    char op;
    printf("Podaj a: ");
    scanf("%f",&a);
    fflush(stdin);
    printf("Podaj znak dzialania: ");
    scanf("%c",&op);
    printf("Podaj b: ");
    scanf("%f",&b);
    fflush(stdin);
    printf("\n");
    switch (op)
    {
           case '+':
                c=a+b;
                printf("%0.2f + %0.2f = %0.2f",a,b,c);
                break;
           case '-':
                c=a-b;
                printf("%0.2f - %0.2f = %0.2f",a,b,c);
                break;
           case '*':
                c=a*b;
                printf("%0.2f * %0.2f = %0.2f",a,b,c);
                break;
           case '/':
                if (b==0) printf("Nie dziel przez zero!");
                else
                {
                    c=a/b;
                    printf("%0.2f %c %0.2f = %0.2f",a,op,b,c);
                }
                break;
           default:
                printf("Zly znak lub nie wprowadzono znaku!");
                break;
    }
    getchar();
}
