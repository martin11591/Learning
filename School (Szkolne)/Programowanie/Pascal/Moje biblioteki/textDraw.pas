unit textDrawing;

interface

uses crt,math;

procedure WriteXY(x,y:integer;tekst:string);
procedure WritelnXY(x,y:integer;tekst:string);
procedure WriteLine(x1,y1,x2,y2:integer;znak:string);

implementation

procedure WriteXY(x,y:integer;tekst:string);
begin
  gotoxy(x,y);
  write(tekst);
end;

procedure WritelnXY(x,y:integer;tekst:string);
begin
  gotoxy(x,y);
  writeln(tekst);
end;

procedure WriteLine(x1,y1,x2,y2:integer;znak:string);
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
  i:=0;
  while (i<qw) do
    begin
      gotoxy(Math.floor(x)+1,Math.floor(y)+1);
      write(znak);
      x:=x+dx;
      y:=y+dy;
      i:=i+1;
    end;
end;

begin
end.
