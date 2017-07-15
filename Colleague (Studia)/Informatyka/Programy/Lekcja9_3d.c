#include<stdio.h>

#define N 100

int main()
{
    char tab1[]="Ala ma kota";
    char tab2[]="Zosia ma psa";
    char tab3[N];
    int i;
    char *wskR=NULL;
    char *wskW=NULL;
    wskR=tab1;
    wskW=tab3;
    for (i=0; *wskR!='\0'; i++)
    {
      //printf("%2d. %c\n",i,*wskR);
      *wskW=*wskR;
      wskW++;
      wskR++;
    }
    *wskW=' ';
    wskW++;
    wskR=tab2;
    //printf("\n");
    for (i=0; *wskR!='\0'; i++)
    {
      //printf("%2d. %c\n",i,*wskR);
      *wskW=*wskR;
      wskW++;
      wskR++;
    }
    *wskW='\0';
    printf("%s\n\n",tab3);
    system("pause");
}
