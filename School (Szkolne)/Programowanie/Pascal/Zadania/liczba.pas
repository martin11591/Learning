program liczba1;
uses crt;
var liczba : integer;
begin
  clrscr;
  write('Podaj liczbe z zakresie od 1 do 100 : ');
  readln(liczba);
  if (liczba < 1) then writeln('Liczba jest mniejsza od 1!');
  if (liczba > 100) then writeln('Liczba jest wieksza od 100!');
  if ((liczba >= 1) and (liczba <= 100)) then
    begin
      if (liczba mod 2 <> 0) then writeln('Liczba ', liczba, ' jest liczba nieparzysta')
      else
      writeln('Liczba ', liczba, ' jest liczba parzysta.')
      end;
  readln;
end.
