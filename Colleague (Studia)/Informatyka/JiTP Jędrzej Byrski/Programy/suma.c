#include<stdio.h>

int main()
{
    int n;
    double suma=0;
    printf("Wprowadz n: ");
    scanf("%d",&n);
    printf("\nSuma cyfr od 0 do %d z krokiem 1 wynosi: ",n);
    for (n; n>0; n--)
        suma+=n;
    printf("%.0f\n\n",suma);
    system("pause");
    return 0;
}
