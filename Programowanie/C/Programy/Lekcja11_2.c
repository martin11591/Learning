#include<stdio.h>

struct osoba
{
  char imie[16];
  char nazwisko[31];
  struct osoba *matka;
  struct osoba *ojciec;
};

int main()
{
    struct osoba babcia_matka={"Aleksandra","Nowak"};
    struct osoba dziadek_matka={"Mariusz","Nowak"};
    struct osoba babcia_ojciec={"Malgorzata","Kowalska"};
    struct osoba dziadek_ojciec={"Marek","Kowalski"};
    struct osoba matka={"Brygida","Kowalska"};
    struct osoba ojciec={"Waldemar","Kowalski"};
    struct osoba corka={"Janina","Kowalska"};
    struct osoba syn={"Jan","Kowalski"};
    
    matka.matka=&babcia_matka;
    matka.ojciec=&dziadek_matka;
    
    ojciec.matka=&babcia_ojciec;
    ojciec.ojciec=&dziadek_ojciec;
    
    corka.matka=&matka;
    corka.ojciec=&ojciec;
    
    syn.matka=&matka;
    syn.ojciec=&ojciec;

    printf("Babcia od strony mamy ma na imie: %s %s\n",syn.matka->matka->imie,syn.matka->matka->nazwisko);
    printf("Babcia od strony taty ma na imie: %s %s\n",syn.ojciec->matka->imie,syn.ojciec->matka->nazwisko);
    printf("Dziadek od strony mamy ma na imie: %s %s\n",syn.matka->ojciec->imie,syn.matka->ojciec->nazwisko);
    printf("Dziadek od strony taty ma na imie: %s %s\n\n",syn.ojciec->ojciec->imie,syn.ojciec->ojciec->nazwisko);
    
    system("pause");
}
