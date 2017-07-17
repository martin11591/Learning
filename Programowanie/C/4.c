#include<stdio.h>

int main(int argc, char *argv[])
{
    FILE *plik;
    int i,j,k,suma,suma2,len,bLen;
    long rozmiar;
    char *bufor, *cmp;
    int test=0;
    if (argc>2)
    {
        printf("Otwieranie pliku \"%s\"... ",argv[1]);
        plik=fopen(argv[1],"r");
        if (plik==NULL)
        {
            printf("Blad!\n");
            exit(-1);
        }
        fseek(plik,0,SEEK_END);
        rozmiar=ftell(plik);
        rewind(plik);
        printf("Sukces.\nAlokowanie pamieci bufora... ");
        bufor=(char*)malloc(sizeof(char)*rozmiar);
        if (bufor==NULL)
        {
            printf("Blad!\n");
            exit(-1);
        }
        printf("Sukces. (%d bajtow)\nPrzeszkuiwanie pliku...\n\n",rozmiar);
        fread(bufor,1,rozmiar,plik);
        bLen=strlen(bufor);
        suma2=0;
        for (i=2; i<argc; i++)
        {
            printf("Liczba wystapien ciagu \"%s\": ",argv[i]);
            suma=0;
            len=strlen(argv[i]);
            for (j=0; j<bLen-len; j++)
            {
                if (bufor[j]==argv[i][0])
                {
                    test=1;
                    for (k=1; k<len; k++)
                    {
                        if (bufor[j+k]==argv[i][k]) test=1; else test=0;
                        if (test==0) break;
                    }
                    if (test==1) suma+=1;
                }
            }
            printf("%d\n",suma);
            suma2+=suma;
        }
        printf("\nLaczna liczba wystapien ciagow: %d\n",suma2);
    } else printf("Skladnia polecenia:\nszukaj sciezka_do_pliku znaki_do_szukania\n");
    fclose(plik);
    return 0;
}
