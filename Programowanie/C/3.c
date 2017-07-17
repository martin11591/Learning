#include<stdio.h>

int main(int argc, char *argv[])
{
    FILE *plik;
    int i,j,k,suma,len;
    long rozmiar;
    char *bufor, *cmp;
    int test=0;
    if (argc!=1&&argc>2)
    {
        plik=fopen(argv[1],"r");
        if (plik==NULL)
        {
            printf("Plik \"%s\" nie istnieje!\n\n",argv[1]);
            exit(-1);
        }
        fseek(plik,0,SEEK_END);
        rozmiar=ftell(plik);
        rewind(plik);
        bufor=(char*)malloc(sizeof(char)*rozmiar);
        if (bufor==NULL)
        {
            printf("Nie mozna zaalokowac bufora!");
            exit(-1);
        }
        fread(bufor,1,rozmiar,plik);
        for (i=2; i<argc; i++)
        {
            suma=0;
            len=strlen(argv[i]);
            cmp=bufor;
            for (j=0; j<len; j++)
            {
                if (argv[i][j]==*cmp)
                {
                } else cmp++;
            }
        }
    } else printf("Skladnia polecenia: \nszukaj sciezka_do_pliku znaki_do_szukania\n\n");
    
    system("pause");
    return 0;
}
