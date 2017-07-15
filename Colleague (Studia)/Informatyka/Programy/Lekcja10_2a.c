#include<stdio.h>

void wysw(float *a, int x)
{
    int i;
    for (i=0; i<x; i++)
    {
        printf("%4.0f ",*a);
        a++;
    }
    printf("\n");
}

void add(float *a, float *b, float *c, int x)
{
    int i;
    for (i=0; i<x; i++)
    {
        *c=*a+*b;
        a++;
        b++;
        c++;
    }
}
void sub(float *a, float *b, float *c, int x)
{
    int i;
    for (i=0; i<x; i++)
    {
        *c=*a-*b;
        a++;
        b++;
        c++;
    }
}

float len(float *a, int x)
{
    int i;
    float wynik=0;
    for (i=0; i<x; i++)
    {
        wynik+=pow(*a,2);
        a++;
    }
    return sqrt(wynik);
}

float dot(float *a, float *b, int x)
{
    int i;
    float wynik=0;
    for (i=0; i<x; i++)
    {
        wynik+=(*a)*(*b);
        a++;
        b++;
    }
    return wynik;
}

int main()
{
    float V1[3]={1,4,6};
    float V2[3]={5,0,6};
    float V3[3]={0};
    
    float W1[4]={1,2,3,4};
    float W2[4]={5,6,7,8};
    float W3[4]={0};
    
    wysw(V1,3);
    wysw(V2,3);
    wysw(V3,3);
    
    printf("\nDodawanie:\n");    
    add(V1,V2,V3,3);
    wysw(V3,3);
    
    printf("\nOdejmowanie:\n");    
    sub(V1,V2,V3,3);
    wysw(V3,3);
    
    printf("\nDlugosc wektora:\n");
    printf("V1: %2.2f V2: %2.2f V3: %2.2f\n",len(V1,3),len(V2,3),len(V3,3));
    
    printf("\nDot:\nV1V2: %2.2f V1V3: %2.2f V2V3: %2.2f\n\n",dot(V1,V2,3),dot(V1,V3,3),dot(V2,V3,3));
    
    wysw(W1,4);
    wysw(W2,4);
    wysw(W3,4);
    
    printf("\nDodawanie:\n");
    add(W1,W2,W3,4);
    wysw(W3,4);
    
    printf("\nOdejmowanie:\n");    
    sub(W1,W2,W3,4);
    wysw(W3,4);
    
    printf("\nDlugosc wektora:\n");
    printf("W1: %2.2f W2: %2.2f W3: %2.2f\n",len(W1,4),len(W2,4),len(W3,4));
    
    printf("\nDot:\nW1W2: %2.2f W1W3: %2.2f W2W3: %2.2f\n\n",dot(W1,W2,4),dot(W1,W3,4),dot(W2,W3,4));
    
    system("pause");
}
