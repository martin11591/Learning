#include<stdio.h>

void m_str_cpy(char *t1, char *t2)
{
    int i;
    for (i=0; *t1!='\0'; i++)
    {
        *t2=*t1;
        t1++;
        t2++;
    }
    *t2='\0';
}

int main()
{
    char tab1[]="Ala ma kota";
    char tab2[100];
    
    printf("%s\n%s\n\n",tab1,tab2);
    m_str_cpy(tab1,tab2);
    printf("%s\n%s\n\n",tab1,tab2);
    system("pause");
}
