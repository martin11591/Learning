#include<stdio.h>

int main()
{
    char tab1[20]="Ala ma kota";
    char tab2[20]="Zosia ma psa";
    char tab3[100];
    char znak;
    int i,j;
    for (i=0; tab1[i]!='\0'; i++)
      tab3[i]=tab1[i];
    tab3[i]=' ';
    i++;
    for (j=0; tab2[j]!='\0'; j++)
      tab3[i+j]=tab2[j];
    tab3[i+j]='\0';
    printf("%s\n\n",tab3);
    printf("Podaj znak: ");
    scanf("%c",&znak);
    printf("\n");
    j=0;
    for (i=0; tab3[i]!='\0'; i++)
      if (tab3[i]==znak) j++;
    printf("Znak '%c' wystapil %d razy.\n\n",znak,j);
    system("pause");
}
