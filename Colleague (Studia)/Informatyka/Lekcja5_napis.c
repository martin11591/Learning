#include<stdio.h>

#define N 12

int main()
{
    char napis[N]="Mama ma kota";
    char napis2[N]="";
    int i;
    int j=0;
    for (i=0; i<N; i++)
    {
      if (napis[i]!='a')
      {
        napis2[j]=napis[i];
        j++;
      }
    }
    printf("%s\n\n",napis2);
    system("pause");
}
