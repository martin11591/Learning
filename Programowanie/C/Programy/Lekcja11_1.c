#include<stdio.h>

struct student
{
  char nazwisko[31];
  char imie[16];
  int nr_indeksu;
  float srednia;
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
    struct student stud1={"Kowalski","Jan",23234,4.0};
    struct student stud2={"Nowak","Marek",21074,3.5};
    struct student stud3;
    stud3=wprowadz_dane();
    printf("\nStudent 1:\n\n");
    wypisz_dane(stud1);
    printf("\nStudent 2:\n\n");
    wypisz_dane(stud2);
    printf("\nStudent 3:\n\n");
    wypisz_dane(stud3);
    printf("\n");
    system("pause");
}
