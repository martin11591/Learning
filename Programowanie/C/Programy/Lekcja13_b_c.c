#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define N 256

int main()
{
  FILE *pFile=NULL;
  char *pBuffer=NULL;
  char str[N], str2[N];
  int size, l_zn, l_wyr, i;
  pFile=fopen("dane13.txt","r");
  if (pFile==NULL)
  {
    printf("Blad otwarcia pliku dane13.txt!\n\n");
    system("pause");
    exit(1);
  }
  fseek(pFile,0,SEEK_END);
  size=ftell(pFile);
  pBuffer=(char*)malloc(size);
  if (pBuffer==NULL)
  {
    printf("Blad alokacji pamieci!\n\n");
    system("pause");
    exit(1);
  }
  rewind(pFile);
  fread(pBuffer,sizeof(char),size,pFile);
  fclose(pFile);
  printf("Plik 'dane13.txt':\n\n-> Poczatek pliku <-\n%s\n-> Koniec pliku <-\n\n",pBuffer);
  l_zn=0;
  l_wyr=0;
  for (i=0; *pBuffer!='\0'; i++)
  {
    l_zn++;
    if (*pBuffer==' '||*pBuffer=='\n') l_wyr++;
    str[i]=*pBuffer;
    str2[i]=*pBuffer;
    if (str[i]==' ') str[i]='*';
    if (str2[i]>=97&&str2[i]<=122) str2[i]-=32;
    pBuffer++;
  }
  if (*pBuffer=='\0')
  {
    l_wyr++;
    str[i]='\0';
    str2[i]='\0';
  }
  printf("Liczba znakow: %d\nLiczba wyrazow: %d\n\n",l_zn,l_wyr);
  pFile=fopen("dane13_gwiazdki.txt","w");
  if (pFile==NULL)
  {
    printf("Blad otwarcia pliku dane13_gwiazdki.txt!\n\n");
    system("pause");
    exit(1);
  }
  fwrite(str,sizeof(char),size,pFile);
  printf("Plik 'dane13_gwiazdki.txt' zapisany poprawnie!\n\n");
  fclose(pFile);
  pFile=fopen("dane13_duze.txt","w");
  if (pFile==NULL)
  {
    printf("Blad otwarcia pliku dane13_duze.txt!\n\n");
    system("pause");
    exit(1);
  }
  fwrite(str2,sizeof(char),size,pFile);
  printf("Plik 'dane13_duze.txt' zapisany poprawnie!\n\n");
  fclose(pFile);
  system("pause");
  return 0;
}
