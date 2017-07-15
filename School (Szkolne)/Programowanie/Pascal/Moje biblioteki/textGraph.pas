unit textGraph;

interface

uses crt,math;

procedure WriteXY(x,y:longint;tekst:string);
procedure WritelnXY(x,y:longint;tekst:string);
procedure Center(tekst:string);
procedure Centerln(tekst:string);
procedure WriteLine(x1,y1,x2,y2:longint;znak:string);
procedure WriteRectangle(x1,y1,x2,y2:longint;znak:string);
procedure WriteCircle(x1,y1,x2,y2:longint;znak:string);

implementation

procedure WriteXY(x,y:longint;tekst:string);
begin
  gotoxy(x,y);
  write(tekst);
end;

procedure WritelnXY(x,y:longint;tekst:string);
begin
  WriteXY(x,y,tekst);
  writeln;
end;

procedure Center(tekst:string);
var
b:string;
dlugosc:real;
i:byte;
begin
  dlugosc:=39-Length(tekst)/2;
  i:=1;
  b:=tekst;
  tekst:='';
  while (i<=dlugosc) do
  begin
    tekst:=tekst+' ';
    i:=i+1;
  end;
  tekst:=tekst+b;
  writeln(tekst);
end;

procedure Centerln(tekst:string);
begin
  Center(tekst);
  writeln;
end;

procedure WriteLine(x1,y1,x2,y2:longint;znak:string);
var
  qw,er:real;
  x,y,dx,dy:real;
  i:real;
begin
  qw:=abs(x2-x1);
  er:=abs(y2-y1);
  if (qw<er) then
    qw:=er;
  dx:=(x2-x1)/qw;
  dy:=(y2-y1)/qw;
  x:=x1;
  y:=y1;
  i:=1;
  while (i<=qw) do
    begin
      gotoxy(Math.floor(x)+1,Math.floor(y)+1);
      write(znak);
      x:=x+dx;
      y:=y+dy;
      i:=i+1;
    end;
end;

procedure WriteRectangle(x1,y1,x2,y2:longint;znak:string);
begin
  WriteLine(x1,y1,x2,y1,znak);
  WriteLine(x2,y1,x2,y2,znak);
  WriteLine(x2,y2,x1,y2,znak);
  WriteLine(x1,y2,x1,y1,znak);
end;

procedure WriteCircle(x1,y1,x2,y2:longint;znak:string);
var
  Rx,Ry,Sx,Sy:real;
  k1,w1,k2,w2,k,w:longint;
  j:real;
begin
  Sx:=x1+(x2-x1)/2;
  Sy:=y1+(y2-y1)/2;
  Rx:=(x2-x1)/2;
  Ry:=(y2-y1)/2;
  k1:=Math.floor(Sx+sin(0.1)*Rx);
  w1:=Math.floor(Sy-cos(0.1)*Ry);
  k:=k1;
  w:=w1;
  j:=0.2;
  while (j<=6.4) do
    begin
      k2:=Math.floor(Sx+sin(j)*Rx);
      w2:=Math.floor(Sy-cos(j)*Ry);
      writeline(k1,w1,k2,w2,znak);
      k1:=k2;
      w1:=w2;
      j:=j+0.1;
    end;
end;

begin
end.
