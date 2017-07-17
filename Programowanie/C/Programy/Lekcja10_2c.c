#include<stdio.h>

void m_lower_case(char *t1)
{
     int i;
     for (i=0; *t1!='\0'; i++)
     {
         if (*t1>=65&&*t1<=90) *t1+=32;
         t1++;
     }
}

int main()
{
    char tab1[]="AlA Ma KOTa";
    
    printf("%s\n\n",tab1);
    m_lower_case(tab1);
    printf("%s\n\n",tab1);
    system("pause");
}
