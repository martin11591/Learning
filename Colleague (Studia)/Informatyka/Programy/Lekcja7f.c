#include<stdio.h>

int main()
{
    char tab3[100];
    int i;
    printf("Napisz zdanie:\n");
    gets(tab3);
    i=0;
    for (i=0; tab3[i]!='\0'; i++)
      if (tab3[i]==' ') tab3[i]='*';
    printf("\n%s\n\n",tab3);
    system("pause");
}
