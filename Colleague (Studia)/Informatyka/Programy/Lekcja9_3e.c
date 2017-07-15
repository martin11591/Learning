#include<stdio.h>

#define N 100

int main()
{
    char tab3[]="Ala ma kota Zosia ma psa";
    int i,c;
    char znak;
    char *wsk=NULL;
    printf("%s\n\n",tab3);
    printf("Podaj znak: ");
    scanf("%c",&znak);
    c=0;
    wsk=tab3;
    for (i=0; *wsk!='\0'; i++)
    {
      //printf("%2d. %c\n",i,*wsk);
      if (*wsk==znak) c++;
      wsk++;
    }
    printf("Znak %c wystapil %d razy.\n\n",znak,c);
    system("pause");
}
