#include<stdio.h>

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
