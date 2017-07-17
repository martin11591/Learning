program trojkat;
{Program rysuje z gwiazdek trojkat o zadanej dlugosci podstawy}
uses
crt;
var
A, B, C : integer;
E, dP : integer;
begin
  clrscr;
  E:=1;
  write('Dlugosc podstawy trojkata : ');
  readln(dP);
  for A:=1 to dP do
    begin
      for B:=1 to dP-A do
        write(' ');
      for C:=1 to E do
        write('*');
      writeln;
      E:=E+2;
    end;
  readln;
end.
