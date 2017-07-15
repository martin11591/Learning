#include<stdio.h>

int main()
{
    char tab3[100];
    int i,j;
    printf("Napisz zdanie:\n");
    gets(tab3);
    i=0;
    for (j=0; tab3[j]!='\0'; j++)
      if (tab3[j]==' ') i++;
    i++;
    printf("\nW zdaniu sa %d wyrazy.\n\n",i);
    system("pause");
}
