#include<stdio.h>

int main()
{
  int tab1[5][4] = {{ 1, 8, 2, 45},
                      { -4, 7, 20, 6},
                      { 0, 7, 22, 0},
                      { 32, 16, 10,-50},
                      { 11, -5, 0, 2}};
  int tab3[4][5];
  int i,j;
  for (j=0; j<5; j++)
    for (i=0; i<4; i++)
      tab3[i][j]=tab1[j][i];
  for (j=0; j<5; j++)
  {
    for (i=0; i<4; i++)
     printf("%4d ",tab1[j][i]);
     printf("\n");
  }
  printf("\n");
  for (j=0; j<4; j++)
  {
    for (i=0; i<5; i++)
      printf("%4d ",tab3[j][i]);
    printf("\n");
  }
  printf("\n");
  system("pause");
}
