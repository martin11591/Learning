#include<stdio.h>

struct student
{
  char nazwisko[31];
  char imie[16];
  int nr_indeksu;
  float srednia;
  struct student *nastepny;
};

void wypisz_dane(struct student stud)
{
  printf("   Nazwisko: %s\n       Imie: %s\nNr. indeksu: %d\n    Srednia: %.2f\n",stud.nazwisko,stud.imie,stud.nr_indeksu,stud.srednia);
  return;
}

struct student wprowadz_dane(void)
{
  struct student stud;
  printf("   Nazwisko: ");
  scanf("%s",stud.nazwisko);
  fflush(stdin);
  printf("       Imie: ");
  scanf("%s",stud.imie);
  fflush(stdin);
  printf("Nr. indeksu: ");
  scanf("%d",&stud.nr_indeksu);
  fflush(stdin);
  printf("    Srednia: ");
  scanf("%f",&stud.srednia);
  fflush(stdin);
  return stud;
}
    
int main()
{
    struct student *stud, *pierwszy=NULL;
    int i, n;
    printf("Liczba studentow (max. 10): ");
    scanf("%d",&n);
    printf("\n");
    if (n<1) n=1;
    if (n>10) n=10;
    for (i=0; i<n; i++)
    {
      stud=malloc(sizeof(struct student));
      *stud=wprowadz_dane();
      stud->nastepny=pierwszy;
      pierwszy=stud;
      printf("\n");
    }
    system("pause");
}
