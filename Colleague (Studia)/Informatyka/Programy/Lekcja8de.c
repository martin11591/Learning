#include<stdio.h>
#define PI 3.1415

float k_obwod(float r);
float k_pole(float r);

int main()
{
    float r;
    printf("Podaj promien kola: ");
    scanf("%f",&r);
    printf("\nObwod kola o promieniu %.4f wynosi %.4f.\nPole kola o promieniu %.4f wynosi %.4f.\n\n",r,k_obwod(r),r,k_pole(r));
    system("pause");
}

float k_obwod(float r)
{
      return 2*PI*r;
}

float k_pole(float r)
{
      return PI*r*r;
}
