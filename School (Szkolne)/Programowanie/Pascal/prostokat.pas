program prostokat;
{Program rysuje prostokat z gwiazdek o zadanej szerokosci i wysokosci}
uses crt;
var A, B, dA, dB : integer;
begin
  clrscr;
  write('Szerokosc prostokata : ');
  readln(dA);
  write('Wysokosc prostokata : ');
  readln(dB);
  for A:=1 to dB do
    begin
      for B:=1 to dA do
        write('*');
    writeln;
    end;
  readln;
end.
