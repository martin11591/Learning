#include<stdio.h>

#define N 10

int main()
{
    int x[N]={4, -50, 24, 230, -55, 12, 0, -10, 78, -35};
    int *wsk=NULL;
    float rms=0;
    int i;
    wsk=x;
    for (i=0; i<N; i++)
    {
      rms+=pow(*wsk,2);
      printf("%d\t",*wsk);
      wsk++;
    }
    rms=sqrt(rms/N);
    printf("\nPierwiastek sredniokwadratowy (Root Mean Square) tych liczb wynosi: %.9f\n",rms);
    system("pause");
}
