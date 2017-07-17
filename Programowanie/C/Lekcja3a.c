#include<stdio.h>

int main()
{
    int x,mx;
    printf("Podaj x:");
    scanf("%d",&x);
    fflush(stdin);
    mx=x<0?-x:x;
    printf("|x|=%d",mx);
    getchar();
}
