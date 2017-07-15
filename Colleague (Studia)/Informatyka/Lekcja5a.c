#include<stdio.h>

#define N 10

int main()
{
    float x[N]={-1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    float e=0;
    int i;
    for (i=0; i<N; i++)
      printf("%2d. x[%d]=%.2f\n",(i+1),i,x[i]);
    for (i=0; i<N; i++)
      e+=x[i];
    printf("\nSuma wynosi %.2f\n",e);
    e/=N;
    printf("\nSrednia arytmetyczna wynosi %.2f\n\n",e);
    system("pause");
}
