#include<stdio.h>

struct osoba
{
  char imie[16];
  char nazwisko[31];
  char zwiazek[24];
  struct osoba *matka;
  struct osoba *ojciec;
};

int main()
{
    struct osoba rodzina[8]={
    {"Aleksandra","Nowak","babcia od strony matki"},
    {"Mariusz","Nowak","dziadek od strony matki"},
    {"Malgorzata","Kowalska","babcia od strony ojca"},
    {"Marek","Kowalski","dziadek od strony ojca"},
    {"Brygida","Kowalska","matka"},
    {"Waldemar","Kowalski","ojciec"},
    {"Janina","Kowalska","corka"},
    {"Jan","Kowalski","syn"}
    };
    
    int i;
    for (i=0; i<8; i++)
    {
      printf("%s %s - %s\n",rodzina[i].imie,rodzina[i].nazwisko,rodzina[i].zwiazek);
    }
    printf("\n");
    system("pause");
}
