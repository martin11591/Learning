#include<stdio.h>

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

struct l_elem* l_tworz(list_key_type w)
{
    struct l_elem* l=(struct l_elem*)malloc(sizeof(struct l_elem*));
    if (l==0) return 0;
    l->war=w;
    l->prev=0;
    l->next=0;
    return l;
}

struct l_elem* l_dodaj(struct l_elem *l,list_key_type w)
{
    if (l==0) return l_tworz(w);
    struct l_elem *tmp=l;
    while (tmp->next!=0)
        tmp=tmp->next;
    tmp->next=(struct l_elem*)malloc(sizeof(struct l_elem*));
    if (tmp->next==0) return l;
    tmp->next->war=w;
    tmp->next->prev=tmp;
    tmp->next->next=0;
    return l;
}

struct l_elem* l_wstaw(struct l_elem *l,list_key_type w,int nr)
{
    return l;
}

void l_wypisz(struct l_elem *l)
{
    struct l_elem *tmp=l;
    printf("%d\t",tmp->war);
    printf("%d\t",tmp->next->war);
    printf("%d\t",tmp->next->next->war);
    printf("%d\t",tmp->next->next->next->war);
    while (tmp!=0)
    {
        printf(list_key_type_spec,tmp->war);
        printf("\t");
        tmp=tmp->next;
    }
    printf("\n");
}

struct l_elem* l_zwolnij(struct l_elem *l)
{
    struct l_elem* tmp;
    while (l->next!=0)
    {
        l=l->next;
    }
    while (l!=0)
    {
        printf("%d\n",l->war);
        tmp=l->prev;
        free(l);
        l=tmp;
    }
    return l;
}

struct l_elem* l_usun(struct l_elem *l,int nr)
{
    struct l_elem* tmp=l;
    while (nr>0)
    {
        tmp=tmp->next;
        nr--;
        free(l);
        l=tmp;
    }
    return l;
}

int main()
{
    struct l_elem *lista=0, *x;
    int i, w;
    srand(time(NULL));
    for (i=0; i<10; i++)
    {
      w=rand()%10;
      printf("I: %d\t%d\n",i,w);
      lista=l_dodaj(lista,w);
    }
    printf("\n");
    system("pause");
    l_wypisz(lista);
    system("pause");
    printf("%d\n\n",lista->next->next->next->next->prev->prev->war);
    /*lista=l_wstaw(lista,5,0);
    l_wypisz(lista);
    printf("%d\n\n",lista->next->next->next->next->prev->prev->war);
    */
    system("pause");
    return 0;
}
