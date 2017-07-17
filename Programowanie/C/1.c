#include<stdio.h>
#define N 50

int main()
{
    char napis1[N], napis2[N];
    int i,j,k,len,sum=0;
    printf("Podaj tekst 1: ");
    scanf("%s",napis1);
    printf("Podaj tekst 2: ");
    scanf("%s",napis2);
    printf("\nTekst 1: %s\n",napis1);
    for (i=0; napis1[i]!='\0'; i++)
        for (j=(i+1); napis1[j]!='\0'; j++)
          if (napis1[i]==napis1[j])
          {
              len=strlen(napis1);
              for (k=j; k<len; k++)
                  napis1[k]=napis1[k+1];
          }
    printf("Tekst 1: %s\n",napis1);
    printf("\n");
    for (i=0; napis1[i]!='\0'; i++)
        for (j=0; napis2[j]!='\0'; j++)
            if (napis2[j]==napis1[i]) sum++;
    printf("Laczna liczba wystapien znakow z napisu pierszego w napisie drugim: %d\n\n", sum);
    system("pause");
    return 0;
}
