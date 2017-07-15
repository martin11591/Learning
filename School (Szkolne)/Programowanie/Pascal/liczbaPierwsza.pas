program liczbaPierwsza;
uses crt;
var
n, i : longint;
pierwsza : boolean;
begin
  clrscr;
  write('Podaj liczb© : ');
  readln(n);
  if (n < 1) then
    writeln('To poj©cie nie ma zastosowania dla liczby ', n)
  else
    begin
      pierwsza:=True;
        for i:=2 to n-1 do
          if pierwsza then
            if (n mod i=0) then
              pierwsza:=false;
            if pierwsza then
              writeln('Liczba ', n, ' jest liczb¥ pierwsz¥')
            else
              writeln('Liczba ', n, ' nie jest liczb¥ pierwsz¥');
    end;
    readln;
end.