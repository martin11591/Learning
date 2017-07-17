#include<stdio.h>
#include "windows.h"

//32
//176
//177
//178
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
	/*
	COORD c;
    c.X=x;
    c.Y=y;
    SMALL_RECT r;
    r.Left=r.Top=0;
    r.Right=x-1;
    r.Bottom=y-1;
    SetConsoleWindowInfo(h, TRUE, &r);
    SetConsoleScreenBufferSize(h, c);
    */
    char sizeC[25]="mode con: cols=000 >nul\0";
    sizeC[15]=48+floor(x/100);
    x-=100*floor(x/100);
    sizeC[16]=48+floor(x/10);
    x-=10*floor(x/10);
    sizeC[17]=48+x;
    char sizeL[25]="mode con: lines=000 >nul\0";
    sizeL[16]=48+floor(y/100);
    y-=100*floor(y/100);
    sizeL[17]=48+floor(y/10);
    y-=10*floor(y/10);
    sizeL[18]=48+y;
    system(sizeC);
    system(sizeL);
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
	char dispStr[(w<8?8:w)*h];
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
	//system("mode con: cp select=1250 >nul");
	unsigned int MAXW, MAXH, W, H;
    HANDLE hCon=GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cci;
	cci.dwSize=1;
	cci.bVisible=FALSE;
	SetConsoleCursorInfo(hCon, &cci);
	COORD c;
	c=GetLargestConsoleWindowSize(hCon);
	MAXW=c.X-2;
	MAXH=c.Y-2;
	if (argc>2) H=charToNumber(argv[2]); else H=MAXH;
	if (argc>1) W=charToNumber(argv[1])+1; else W=MAXW+1;
	if (W<2) W=2;
	if (W>MAXW-1) W=MAXW;
	if (H<1) H=1;
	if (H>MAXH) H=MAXH;
	if (argc>3)
	{
		if (H*2+1>MAXH) H=MAXH/2-(1-(MAXH%2));
		else MAXH=H*2+1;
	} else MAXH=H;
	MAXW=8*(floor(W/8))+(W%8>0?8:0);
	resizeScreen(hCon, MAXW, MAXH+1);
	////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////////////
	unsigned char *disp=createDisp(W, H);
	int size=getSize(W, H);
	float x=W-1, y1=H/2, y2, r1=H/8, r2, i=-3.1415, j=i, k=j, krok;
	int I, J, ix=0, iy=0, cnt=0, num;
	srand(time(NULL));
	y2=y1-sin(i)*r1;
	//line(disp, 1, 0, y1, x, y1, W, H);	// oœ
	line(disp, 1, x, y1, x, y2, W, H);
	printDisp(hCon, disp, 219, W, H);
	unsigned char dispInfo[H*(MAXW+1)];
	while (1)
	{
		r2=r1-sin(j)*(H/2.75);
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
		setState(disp, 1, x, H/2, W, H);	// oœ
		if (cnt%((int)floor(W/1))==0) line(disp, 1, floor(x), 0, floor(x), H, W, H);	// linie pionowe
     	//setState(disp, 1, x, y2, W, H);	// punktowanie
     	line(disp, 1, floor(x), floor(y1), floor(x), floor(y2), W, H);	// ³¹czenie
		printDisp(hCon, disp, 219, W, H);
		if (argc>3)
		{
			J=0;
    		for (I=0; I<size; I++)
	    	{
	    		dispInfo[J]=dispInfo[J+1]=dispInfo[J+2]=dispInfo[J+3]=dispInfo[J+4]=32;
	    		num=disp[I];
	    		if (floor(num/100)>0)
	    		{
				    dispInfo[J+5]=48+floor(num/100);
				    num-=100*floor(num/100);
	    		} else dispInfo[J+5]=32;
	    		if (floor(num/10)>0)
	    		{
	    			dispInfo[J+6]=48+floor(num/10);
	    			num-=10*floor(num/10);
	    		} else dispInfo[J+6]=32;
	    		dispInfo[J+7]=48+num%10;
	    		J+=8;
	    		if ((I*8)%MAXW==0) {
	    			dispInfo[J]='\n';
	    			J++;
	    		}
		    }
	    	printf("X: %d\n%s", cnt, dispInfo);
		} else printf("X: %d", cnt);
		cnt++;
	}
	return 0;
}
