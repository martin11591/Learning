#include<stdio.h>

#define W 23
#define K 19

int main()
{
  long int tab1[W][K];
  long int i,j;
  for (j=0; j<W; j++)
  {
    if (j==1) printf("---+-----------------------------------------------------------------------\n");
    for (i=0; i<K; i++)
    {
      tab1[j][i]=(j+1)*(i+1);
      if (i==0) printf("%3d|",tab1[j][i]);
        else printf("%3d ",tab1[j][i]);
    }
    printf("\n");
  }
  system("pause");
}
