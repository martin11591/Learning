program kwadrat;
{Program rysuje kwadrat z gwiazdek o zadanej dlugosci boku}
uses crt;
var A, B, dA : integer;
begin
  clrscr;
  write('Dlugosc boku kwadratu : ');
  readln(dA);
  for A:=1 to dA do
    begin
    for B:=1 to dA do
      write('*');
    writeln;
    end;
  readln;
end.
