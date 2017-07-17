#include<stdio.h>

#define N 10

int main()
{
    float x[N]={-1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    int i;
    for (i=0; i<N; i++)
      printf("%2d. x[%d]=%.2f\n",(i+1),i,x[i]);
    float min=x[0];
    float max=x[0];
    for (i=1; i<N; i++)
    {
      if (x[i]<min) min=x[i];
      if (x[i]>max) max=x[i];
    }
    printf("\nNajmniejsza wartosc w tablicy: %.2f\nNajwieksza wartosc w tablicy: %.2f\n\n",min,max);
    system("pause");
}
