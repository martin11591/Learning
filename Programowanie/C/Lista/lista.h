#ifndef _PROSTA_LISTA_
#define _PROSTA_LISTA_

typedef int list_key_type;  /* typ wartosci wezlow */
#define list_key_type_spec "%d"    /* spec. wydruku wartosci wezlow */

struct l_elem
{
       list_key_type war;
       struct l_elem *prev;
       struct l_elem *next;
};

struct l_elem* l_tworz(list_key_type w);
struct l_elem* l_dodaj(struct l_elem *l,list_key_type w);
struct l_elem* l_wstaw(struct l_elem *l,list_key_type w,int nr);
void l_wypisz(struct l_elem *l);
struct l_elem* l_zwolnij(struct l_elem *l);           /* usuniecie calej listy */
struct l_elem* l_usun(struct l_elem *l,int nr);
int l_dlugosc(struct l_elem *l);
list_key_type l_pobierz(struct l_elem *l,int nr);
struct l_elem* l_zmien(struct l_elem *l,list_key_type w,int nr);
struct l_elem* l_adres(struct l_elem *l,int nr);
struct l_elem* l_wczytaj(char *plik);
int l_zapisz(struct l_elem *l,char *plik);

#endif
