#include<stdio.h>

void m_upper_case(char *t1)
{
     int i;
     for (i=0; *t1!='\0'; i++)
     {
         if (*t1>=97&&*t1<=122) *t1-=32;
         t1++;
     }
}

int main()
{
    char tab1[]="Ala ma kota";
    
    printf("%s\n\n",tab1);
    m_upper_case(tab1);
    printf("%s\n\n",tab1);
    system("pause");
}
