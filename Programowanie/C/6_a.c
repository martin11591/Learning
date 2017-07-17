#include<stdio.h>

double* tablica_alokuj(int n)
{
     return (double*)malloc(n*sizeof(double));
}

void tablica_wypelnij_1(double *tablica, int n)
{
     double wartosc, *wsk=tablica;
     int i;
     for (i=1; i<=n; i++)
     {
         printf("%d/%d element: ",i,n);
         scanf("%lf",&wartosc);
         *wsk=wartosc;
         wsk++;
     }
}

void tablica_wypisz(double *tablica, int n)
{
     double *wsk=tablica;
     int i;
     for (i=1; i<=n; i++)
     {
         printf("%d/%d element = %lf\n",i,n,*wsk);
         wsk++;
     }
}

void tablica_sortuj(double *tablica, int n)
{
     double *wsk1, *wsk2;
}

double* tablica_lacz(double *tablica1, int n1, double *tablica2, int n2)
{
double *tablica, *wsk1, *wsk2;
    int i;
    tablica=(double*)malloc((n1+n2)*sizeof(double));
    if (tablica==NULL)
    {
        printf("Blad alokacji pamieci w tablica_lacz()!\n\n");
        system("pause");
        return NULL;
    }
    wsk1=tablica;
    wsk2=tablica1;
    for (i=0; i<n1; i++)
    {
        *wsk1=*wsk2;
        wsk1++;
        wsk2++;
    }
    wsk2=tablica2;
    for (i=0; i<n2; i++)
    {
        *wsk1=*wsk2;
        wsk1++;
        wsk2++;
    }
    return tablica;
}

int main()
{
    double *tablica1, *tablica2, *tablica3;
    int n1, n2;
    
    printf("Liczba elementow tablicy: ");
    scanf("%d",&n1);
    tablica1=tablica_alokuj(n1);
    if (tablica1==NULL)
    {
        printf("Blad alokacji pamieci dla tablica1 w main()!\n\n");
        system("pause");
        return -1;
    }
    printf("\n");
    tablica_wypelnij_1(tablica1,n1);
    printf("\n");
    tablica_wypisz(tablica1,n1);
    printf("\n");
    
    printf("Liczba elementow tablicy: ");
    scanf("%d",&n2);
    tablica2=tablica_alokuj(n2);
    if (tablica2==NULL)
    {
        printf("Blad alokacji pamieci dla tablica2 w main()!\n\n");
        system("pause");
        return -1;
    }
    printf("\n");
    tablica_wypelnij_1(tablica2,n2);
    printf("\n");
    tablica_wypisz(tablica2,n2);
    printf("\n");
    
    tablica3=tablica_lacz(tablica1,n1,tablica2,n2);
    tablica_wypisz(tablica3,n1+n2);
    printf("\n");
    system("pause");
    return 0;
}
