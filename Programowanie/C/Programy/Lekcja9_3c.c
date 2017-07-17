#include<stdio.h>

#define N 10

int main()
{
    int x[N]={4, -50, 24, 230, -55, 12, 0, -10, 78, -35};
    int *wsk=NULL;
    wsk=x;
    int min,max=*wsk;
    printf("%d\t",*wsk);
    wsk++;
    int i;
    for (i=1; i<N; i++)
    {
      if (*wsk<min) min=*wsk;
      if (*wsk>max) max=*wsk;
      printf("%d\t",*wsk);
      wsk++;
    }
    printf("\nNajmniejsza z tych liczb to: %d\nNajwieksza z tych liczb to: %d\n\n",min,max);
    system("pause");
}
