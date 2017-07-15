#include<stdio.h>

int main()
{
  int i, n;
  float *wsk;
  printf("Rozmiar tablicy jednowymiarowej: ");
  scanf("%d",&n);
  printf("\n");
  wsk=(float*)malloc(n*sizeof(float));
  if (wsk==NULL)
  {
    printf("Blad alokacji!");
    system("pause");
    return -1;
  }
  for (i=0; i<n; i++)
    wsk[i]=i;
  for (i=0; i<n; i++)
    printf("wsk[%d]: %.0f\n",i,wsk[i]);
  free(wsk);
  printf("\n");
  system("pause");
  return 0;
}
