#include<stdio.h>

int main()
{
    int wiek=20;
    float wzrost=165.2;
    float waga=49.6;
    printf("Ola ma %d lat.\nMa %3.1f cm wzrostu i wazy %2.2f kg.\n\n",wiek,wzrost,waga);
    int a,b;
    printf("Podaj a:");
    scanf("%d",&a);
    printf("Podaj b:");
    scanf("%d",&b);
    printf("Wynik: a+b=%d+%d=%d\n\n",a,b,(a+b));
    system("pause");
}
