#include<stdio.h>

int main()
{
  int i, j, w, h;
  float **wsk;
  printf("Liczba kolumn: ");
  scanf("%d",&w);
  printf("Liczba wierszy: ");
  scanf("%d",&h);
  printf("\n");
  wsk=(float**)malloc(h*sizeof(float*));
  if (wsk==NULL)
  {
    printf("Blad alokacji!");
    system("pause");
    return -1;
  }
  for (i=0; i<h; i++)
  {
    wsk[i]=(float*)malloc(w*sizeof(float));
    if (wsk[i]=NULL)
    {
      printf("Blad alokacji!");
      system("pause");
      return -1;
    }
  }
  printf("wsk[0][0]=%f",wsk[0][0]);
  system("pause");
  for (i=0; i<h; i++)
    for (j=0; j<w; j++)
      wsk[i][j]=i*j;
  system("pause");
  for (i=0; i<h; i++)
    for (j=0; j<w; j++)
      printf("wsk[%d][%d]=%f",i,j,wsk[i][j]);
  for (i=0; i<h; i++)
    free(wsk[i]);
  free(wsk);
  system("pause");
  return 0;
}
