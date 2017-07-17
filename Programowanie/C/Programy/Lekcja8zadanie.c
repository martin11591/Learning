#include<stdio.h>
#define N 100

char podmien(char tab[], int rozmiar, char znak);

int main()
{
    char tab[N]="Ala ma kota";
    char znak;
    int i;
    printf("Wprowadz tekst:\n");
    scanf("%s",&tab);
    fflush(stdin);
    printf("\nPodmien znak: ");
    scanf("%c",&znak);
    fflush(stdin);
    printf("\nPrzed podmiana:\n%s\n\nPo podmianie:\n",tab);
    podmien(tab, N, znak);
    printf("%s\n\n",tab);
    system("pause");
}

char podmien(char tab[], int rozmiar, char znak)
{
    int i;
    for (i=0; (tab[i]!='\0'||i<rozmiar); i++)
      if (tab[i]==znak) tab[i]='P';
}
