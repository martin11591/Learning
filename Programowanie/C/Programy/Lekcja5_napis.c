#include<stdio.h>

#define N 13

int main()
{
    char napis[N]="Mama ma kota";
    int i;
    int j=0;
    for (i=0; i<N; i++)
    {
     if (napis[i]=='a')
      for (j=i; j<N; j++) napis[j]=napis[j+1];
    } 
    printf("%s\n\n",napis);
    system("pause");
}
