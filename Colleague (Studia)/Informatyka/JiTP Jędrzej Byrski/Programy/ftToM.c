#include<stdio.h>

int main()
{
    float ft, m;
    printf("Podaj dlugosc w stopach: ");
    scanf("%f",&ft);
    m=ft*0.3048;
    printf("\n%.4f ft = %.4f m\n\n",ft,m);
    system("pause");
    return 0;
}
