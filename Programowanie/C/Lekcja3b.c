#include<stdio.h>

int main()
{
    int a,b,c;
    printf("Podaj a:");
    scanf("%d",&a);
    printf("Podaj b:");
    scanf("%d",&b);
    if (b!=0)
    {
       c=a/b;
       printf("%d/%d=%d\n\n",a,b,c);
    }
    else
    {
       printf("Nie dzieli sie przez zero!\n\n");
    }
    system("pause");
}
