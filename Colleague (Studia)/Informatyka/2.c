#include<stdio.h>
#define W 23
#define H 12

int main()
{
    int tab1[W][H],tab2[W],w,h;
    for (w=0; w<W; w++)
    {
        for (h=0; h<H; h++)
            tab1[w][h]=w*H+h;
        tab2[w]=0;
        for (h=0; h<H; h++)
            tab2[w]+=tab1[w][h];
        for (h=0; h<H-1; h++)
            printf("%3d + ",tab1[w][h]);
        printf("%3d = %4d\n",tab1[w][h],tab2[w]);
    }
    printf("\n");
    system("pause");
    return 0;
}
