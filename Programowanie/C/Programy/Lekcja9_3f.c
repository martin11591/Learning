#include<stdio.h>

#define N 100

int main()
{
    char tab[N];
    char *wsk=NULL;
    int i,c;
    printf("Wprowadz tekst:\n");
    gets(tab);
    wsk=tab;
    for (i=0; *wsk!='\0'; i++)
    {
        if (*wsk==' ') *wsk='*';
        wsk++;
    }
    printf("\n%s\n\n",tab);
    system("pause");
}
