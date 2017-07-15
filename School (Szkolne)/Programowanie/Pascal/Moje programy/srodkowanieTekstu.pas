program srodkowanieTekstu;
uses crt;
var tekst:string;
procedure writeXY(a,b:longint;x:string);
begin
  gotoxy(a,b);
  write(x);
end;
procedure writelnXY(a,b:longint;x:string);
begin
  writeXY(a,b,x);
  writeln;
end;
procedure center(a:string);
var
b:string;
dlugosc:real;
i:byte;
begin
  dlugosc:=37-Length(a)/2;
  i:=1;
  b:=a;
  a:='';
  while (i<=dlugosc) do
  begin
    a:=a+' ';
    i:=i+1;
  end;
  a:=a+b;
  writeln(a);
end;
procedure centerln(a:string);
begin
  center(a);
  writeln;
end;
begin
  clrscr;
  centerln('Proba');
  centerln('Srodkowania');
  centerln('Tekstu');
  readln;
end.