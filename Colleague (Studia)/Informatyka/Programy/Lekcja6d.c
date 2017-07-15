#include<stdio.h>

#define W 4
#define K 4

int main()
{
  int A[W][K] = {{ 2, 3, 5, 0},
                 { -1, -5, 3, 2},
                 { 0, 7, -4, 0},
                 { 2, -5, 0, 2}};
  int B[W][K] = {{ 1, 3, 2, 1},
                 { 3, -1, 3, 0},
                 { 0, 0, 4, 5},
                 { 0, -2, -3, 2}};
  int C[W][K];
  long int D[W][K];
  int i,j,k;
  for (j=0; j<W; j++)
    for (i=0; i<K; i++)
    {
      C[j][i]=A[j][i]+B[j][i];
    }
  for (k=0; k<W; k++)
    for (j=0; j<W; j++)
    {
      D[j][k]=0;
      for (i=0; i<K; i++)
        D[j][k]+=A[j][i]*B[j][k];
    }
  printf("Dodawanie macierzy A + B\n\n");
  for (j=0; j<W; j++)
  {
    for (i=0; i<K; i++)
      printf("%4d ",A[j][i]);
    printf("   ");
    for (i=0; i<K; i++)
      printf("%4d ",B[j][i]);
    printf("   ");
    for (i=0; i<K; i++)
      printf("%4d ",C[j][i]);
    printf("\n");
  }
  printf("\nMnozenie macierzy A * B\n\n");
  for (j=0; j<W; j++)
  {
    for (i=0; i<K; i++)
      printf("%4d ",A[j][i]);
    printf("   ");
    for (i=0; i<K; i++)
      printf("%4d ",B[j][i]);
    printf("   ");
    for (i=0; i<K; i++)
      printf("%4d ",D[j][i]);
    printf("\n");
  }
  printf("\n");
  system("pause");
}
