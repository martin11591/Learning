#include<stdio.h>

int main()
{
    char tab1[20]="Ala ma kota";
    char tab2[20]="Zosia ma psa";
    int i;
    for (i=0; i<20; i++)
      printf("%c",tab1[i]);
    printf("\n\n");
    for (i=0; i<20&&tab2[i]!='\0'; i++)
      printf("%c\n",tab2[i]);
    printf("\n");
    system("pause");
}
