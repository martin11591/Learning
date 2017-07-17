#include<stdio.h>
#include "windows.h"

/*
#define MAXW 159	// maksymalne wartoœci dla
#define MAXH 61		// rozdzielczoœci 1280x800

#define MAXW 271	// maksymalne wartoœci dla
#define MAXH 83		// rozdzielczoœci 1920x1080
*/

// kody polskich znaków
// sposób u¿ycia:
// printf("%c",a_PL); // dla ma³ego a z ogonkiem - ¹
// cout<<"Pr"<<o_PL<<"ba"; // dla s³owa Próba - czyli ma³ego o z kresk¹ - ó

#define c_PL 134	// æ
#define l_PL 136	// ³
#define X_PL 141	// Ÿ
#define C_PL 143	// Æ
#define S_PL 151	// Œ
#define s_PL 152	// œ
#define L_PL 157	// £
#define o_PL 162	// ó
#define A_PL 164	// ¥
#define a_PL 165	// ¹
#define E_PL 168	// Ê
#define e_PL 169	// ê
#define x_PL 171	// Ÿ
#define Z_PL 189	// ¯
#define z_PL 190	// ¿
#define O_PL 224	// Ó
#define N_PL 227	// Ñ
#define n_PL 228	// ñ
					//219 - pe³ny kwadrat
				
void gotoxy(HANDLE h, int x, int y)
{
	COORD c;
    c.X=x-1;
    c.Y=y-1;
    SetConsoleCursorPosition(h, c);
}

void resizeScreen(HANDLE h, int x, int y)
{
	COORD c;
    c.X=x;
    c.Y=y;
    SMALL_RECT r;
    r.Left=r.Top=0;
    r.Right=x-1;
    r.Bottom=y-1;
    SetConsoleWindowInfo(h, TRUE, &r);
    SetConsoleScreenBufferSize(h, c);
}

unsigned char* createDisp(unsigned int w, unsigned int h)
{
	int size=getSize(w, h);
	unsigned char *disp=(unsigned char*)calloc(size, size*sizeof(unsigned char));
	return disp;
}

void clearDisp(unsigned char *disp, unsigned int w, unsigned int h)
{
	int i, size=getSize(w, h);
	for (i=0; i<size; i++)
	    disp[i]=0;
	return;
}

void invertDisp(unsigned char *disp, unsigned int w, unsigned int h)
{
	int i, size=getSize(w, h);
	for (i=0; i<size; i++)
	    disp[i]=255-disp[i];
	return;
}

void printDisp(HANDLE hndl, unsigned char *disp, unsigned char ch, unsigned int w, unsigned int h)
{
	int size=getSize(w, h), x=1, y=1;
	unsigned char tab[8], num, j;
	char dispStr[h*w];
	gotoxy(hndl, 1, 1);
	int i, I=0;
	for (i=0; i<size; i++)
	{
		num=disp[i];
		j=7;
		tab[0]=tab[1]=tab[2]=tab[3]=tab[4]=tab[5]=tab[6]=tab[7]=0;
		while(num>0)
		{
			tab[j]=num%2;
			num=num/2;
			j--;
		}
		for (j=0; j<8; j++)
		{
			if (y>h) break;
		    if (tab[j]==1) dispStr[I]=ch; else dispStr[I]=' ';
		    if (x>=w)
		    {
		    	dispStr[I]='\n';
				x-=w;
				y++;
			}
			x++;
			I++;
		}
	}
	dispStr[I]='\0';
	printf("%s",dispStr);
}

unsigned char getState(unsigned char *disp, unsigned int x, unsigned int y, unsigned int w, unsigned int h)
{
	if (x<0) x=0;
	if (y<0) y=0;
	if (x>w-1) x=w-1;
	if (y>h-1) y=h-1;
	int pos=y*w+x;
	int size=w*h;
	if (pos>size) pos=size;
	int _pos, _size;
	_pos=pos/8;
	_size=size/8;
	unsigned char nByte=pos-_pos*8, i=7;
	unsigned char state=disp[_pos];
	unsigned char tab[8]={0,0,0,0,0,0,0,0};
	int num=0;
	while (state>0)
	{
	    tab[i]=state%2;
	    if (i==nByte) break;
	    state=state/2;
	    i--;
	}
	return tab[nByte];
}

void setState(unsigned char *disp, unsigned int val, unsigned int x, unsigned int y, unsigned int w, unsigned int h)
{
	if (x<0) x=0;
	if (y<0) y=0;
	if (x>w-1) x=w-1;
	if (y>h-1) y=h-1;
	if (val<0) val=0;
	if (val>2) val=2;
	int pos=y*w+x;
	int size=w*h;
	if (pos>size) pos=size;
	int _pos, _size;
	_pos=pos/8;
	_size=size/8;
	unsigned char nByte=pos-_pos*8, i=7;
	unsigned char state=disp[_pos];
	unsigned char tab[8]={0,0,0,0,0,0,0,0};
	int num=0;
	while (state>0)
	{
	    tab[i]=state%2;
	    state=state/2;
	    i--;
	}
	if (val>1) val=1-tab[nByte];
	if (tab[nByte]==val) return;
	tab[nByte]=val;
	for (i=0; i<8; i++)
	    num+=pow(2,7-i)*tab[i];
	disp[_pos]=num;
	return;
}

int getSize(unsigned int w, unsigned int h)
{
	int size=w*h;
	size=(size%8>0)?(size/8+1):(size/8);
	return size;
}

unsigned char isFilled(unsigned char *disp, unsigned int mode, unsigned int w, unsigned int h)
{
	unsigned char test=0;
	int size=(w*h)/8, rest=getSize(w, h)%8, num=0, i;
	for (i=0; i<size; i++)
	{
	    if (mode==0)
	    {
			if (disp[i]==0) test=1;
			else return 0;
		}
		else if (disp[i]==255) test=1;
		else return 0;
	}
	if (rest>0)
	{
		size=getSize(w, h);
    	for (i=rest; i>=0; i--)
	    {
		    num+=pow(2,8-i);
	    }
	    if (mode==0)
	    {
			if (disp[size]==0) test=1; else	return 0;
		} else if (disp[size]==num) test=1; else return 0;
	}
	return test;
}

void line(unsigned char *disp, unsigned int mode, float x1, float y1, float x2, float y2, unsigned int w, unsigned int h)
{
	if (mode<0) mode=0;
	if (mode>2) mode=2;
	float qw, er, x=x1, y=y1, dx, dy;
	qw=abs(x2-x1);
	er=abs(y2-y1);
	if (qw<er) qw=er;
	dx=(x2-x1)/(float)qw;
	dy=(y2-y1)/(float)qw;
	for (er=0; er<=qw; er++)
	{
		if (x>=0&&x<=w&&y>=0&&y<=h) setState(disp, mode, x, y, w, h);
		x+=dx;
		y+=dy;
	};
	return;
}

void ellipseR(unsigned char *disp, unsigned int mode, float x, float y, float r1, float r2, unsigned int w, unsigned int h)
{
	float i, x1, y1, x2, y2;
	x1=x-sin(-3.1415)*r1;
	y1=y+cos(-3.1415)*r2;
	for (i=-3.1315; i<=3.1415; i+=0.01)
	{
		x2=x-sin(i)*r1;
		y2=y+cos(i)*r2;
		line(disp, mode, x1, y1, x2, y2, w, h);
		x1=x2;
		y1=y2;
	}
	x2=x-sin(3.1415)*r1;
	y2=y+cos(3.1415)*r2;
	line(disp, mode, x1, y1, x2, y2, w, h);
	return;
}

void ellipseXY(unsigned char *disp, unsigned int mode, float x1, float y1, float x2, float y2, unsigned int w, unsigned int h)
{
	float r1=(x2-x1)/2, r2=(y2-y1)/2;
	ellipseR(disp, mode, x1+r1, y1+r2, r1, r2, w, h);
	return;
}

void moveup(unsigned char *disp, unsigned int val, unsigned int w, unsigned int h)
{
	int x, y;
	if (val<0) val=0;
	if (val>1) val=1;
	for (y=0; y<w-1; y++)
	    for (x=0; x<w; x++)
	        setState(disp, getState(disp, x, y+1, w, h), x, y, w, h);
	for (x=0; x<w; x++)
	    setState(disp, val, x, w, w, h);
}

void movedown(unsigned char *disp, unsigned int val, unsigned int w, unsigned int h)
{
	int x, y;
	if (val<0) val=0;
	if (val>1) val=1;
	for (y=w-1; y>0; y--)
	    for (x=0; x<w; x++)
	        setState(disp, getState(disp, x, y-1, w, h), x, y, w, h);
	for (x=0; x<w; x++)
	    setState(disp, val, x, 0, w, h);
}

void moveleft(unsigned char *disp, unsigned int val, unsigned int w, unsigned int h)
{
	int x, y;
	if (val<0) val=0;
	if (val>1) val=1;
	for (y=0; y<h; y++)
	    for (x=0; x<w-1; x++)
	        setState(disp, getState(disp, x+1, y, w, h), x, y, w, h);
	for (y=0; y<h; y++)
	    setState(disp, val, w-1, y, w, h);
}

void moveright(unsigned char *disp, unsigned int val, unsigned int w, unsigned int h)
{
	int x, y;
	if (val<0) val=0;
	if (val>1) val=1;
	for (y=0; y<h; y++)
	    for (x=w-1; x>0; x--)
	        setState(disp, getState(disp, x-1, y, w, h), x, y, w, h);
	for (y=0; y<h; y++)
	    setState(disp, val, 0, y, w, h);
}

float charToNumber(char *tab)
{
	float num=0;
	sscanf(tab, "%f", &num);
	return num;
}

unsigned char* numberToChar(float num)
{
	unsigned char *str;
	//sprintf(str, "%f", num);
	return str;
}

int main(int argc, char *argv[])
{
	unsigned int MAXW, MAXH;
    HANDLE hCon=GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cci;
	cci.dwSize=1;
	cci.bVisible=FALSE;
	SetConsoleCursorInfo(hCon, &cci);
	COORD c;
	c=GetLargestConsoleWindowSize(hCon);
	MAXW=c.X-2;
	MAXH=c.Y-2;
	resizeScreen(hCon, MAXW, MAXH+1);
	unsigned int W=MAXW, H=MAXH;
	if (argc>1)
	{
		W=charToNumber(argv[1]);
		H=charToNumber(argv[2]);
	}
	if (W<1) W=1;
	if (argc>3)
	{
		if (W>264) W=264;
	} else if (W>MAXW) W=MAXW;
	if (H<1) H=1;
	if (argc>3)
	{
		H=H/2;
		if (H>41) H=41;
	} else if (H>MAXH) H=MAXH;	
	////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////////////
	unsigned char *disp=createDisp(W, H);
	int size=getSize(W, H);
	float x=W-1, y1=H/2, y2, r1=H/8, r2, i=-3.1415, j=i, k=j, krok;
	int I;
	srand(time(NULL));
	y2=y1-sin(i)*r1;
	//line(disp, 1, 0, y1, x, y1, W, H);	// oœ
	line(disp, 1, x, y1, x, y2, W, H);
	printDisp(hCon, disp, 219, W, H);
	unsigned char dispInfo[H][W];
	int J, ix=0, iy=0;
	while (1)
	{
		r2=r1-sin(j)*(H/4);
		krok=rand();
		krok=krok/4/RAND_MAX;
		j+=krok/4;
		if (j>3.1415) j-=6.283;
		y1=y2;
	    y2=H/2-sin(i)*r2;
		moveleft(disp, 0, W, H);
		krok=0.1-sin(k)*0.1;
		i+=krok/2;
		if (i>3.1415) i-=6.283;
		k+=0.01;
		if (k>3.1415) k-=6.283;
		//setState(disp, 1, x, H/2, W, H);	// oœ
     	line(disp, 1, floor(x), floor(y1), floor(x), floor(y2), W, H);
     	//setState(disp, 1, x, y2, W, H);
		printDisp(hCon, disp, 219, W, H);
		if (argc>3)
    		for (I=0; I<size; I++)
	    	{/*
		        if (I%(W/8)==0&&I>0) printf("\n");
		        printf("%8d",disp[I]);
		        */
		        //for (J=0; J<8-(int)log10(disp[I]); J++) dispInfo[iy][ix+J]=32;
		    }
	}
	system("cls");
	system("pause");
	return 0;
}
