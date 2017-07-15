#include<stdio.h>
#include<stdlib.h>

int main()
{
  int i, n;
  int *wsk;
  printf("Rozmiar tablicy jednowymiarowej: ");
  scanf("%d",&n);
  printf("\n");
  wsk=(int*)calloc(n,sizeof(int));
  if (wsk==NULL)
  {
    printf("Blad alokacji!");
    system("pause");
    return -1;
  }
  for (i=0; i<n; i++)
    printf("wsk[%d]: %d\n",i,wsk[i]);
  free(wsk);
  printf("\n");
  system("pause");
  return 0;
}
