#include<stdio.h>

#define N 10

int main()
{
    int x[N]={4, -50, 24, 230, -55, 12, 0, -10, 78, -35};
    int *wsk=NULL;
    float avg=0;
    int i;
    wsk=x;
    for (i=0; i<N; i++)
    {
      avg+=*wsk;
      printf("%d\t",*wsk);
      wsk++;
    }
    avg/=N;
    printf("\nSrednia arytmetyczna tych liczb wynosi: %.1f\n\n",avg);
    system("pause");
}
