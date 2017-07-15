program Pliki;
uses crt;
var
  plik:TEXT;
  wartosc:string;
  wartoscL:real;
  kod:integer;
begin
  clrscr;
  assign(plik,'D:\2Tc\Marcin~1\Pliki.txt');
  writeln('Zapisywanie dowolnych wartosci do pliku.');
  writeln;
  repeat
  write('Podaj dowolna wartosc:');
  readln(wartosc);
  append(plik);
  val(wartosc,wartoscL,kod);
  writeln(plik,wartoscL:10:2);
  close(plik);
  until not (kod=0);
  append(plik);
  writeln(plik);
  close(plik);
end.
