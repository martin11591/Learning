#include<stdio.h>

int main()
{
    int i,j;
    for(j=0;j<3;j++)
      for(i=0;i<4;i++)
      {
          printf("j=%d i=%d\n", j, i);
      }
    system("pause");
}
