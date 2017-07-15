program figury;
{
Program liczy pola i obwody figur plaskich oraz rysuje figury

Program wykonal: Marcin Podraza
}
uses crt;
const
PI=3.14;  (*Definiujemy stala PI*)
var
  wybor:byte;  (*Zmienna dla wyboru opcji w menu*)
  a,b,c,d,e,f,h,r:real;  (*Zmienne wymagane do obliczen pol i obwodow*)
  P,L:real;  (*Zmienne dla wynikow dla pol i obwodow*)
  czyTak:char;  (*Zmienna dla klawisza dla powtorki*)
  i,j:byte;  (*Zmienne dla petel rysujacych figury*)
begin
{Dokonujemy wyboru figury}
  repeat
    repeat
    clrscr;
    writeln('Wybierz figure:');
    writeln;
    writeln('1 - Kolo');
    writeln('2 - Trojkat');
    writeln('3 - Prostokat');
    writeln('4 - Kwadrat');
    writeln('5 - Trapez');
    writeln('6 - Rownoleglobok');
    writeln('7 - Romb');
    writeln;
    write('Twoj wybor (1..7):');
    readln(wybor);  (*Zapisujemy wybor do zmiennej 'wybor'*)
    until ((wybor>=1)and(wybor<=7));     (*Upewniamy sie, czy wybrana liczba miesci sie w zakresie opcji menu (1-7)*)
    clrscr;
    case wybor of     (*Sprawdzamy wybor i dokonujemy zwiazanych z nim czynnosci*)
    1:begin   (*Wybrano kolo*)
      writeln('Kolo');
      writeln;
      {Rysowanie figury}
      writeln('    ****');
      writeln('  ********');
      writeln(' **********');
      writeln(' **********');
      writeln('************');
      writeln('************');
      writeln('************');
      writeln(' **********');
      writeln(' **********');
      writeln('  ********');
      writeln('    ****');
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj promien kola:');
      readln(r);
      {Liczenie pola i obwodu kola}
      P:=PI*sqr(r);
      L:=2*PI*R;
      writeln;
      writeln('P=',PI:6:2,'*',R:6:2,'*',R:6:2);
      writeln('L=2*',PI:6:2,'*',R:6:2);
      writeln;
      writeln('Pole kola wynosi: ',P:10:2);
      writeln('Obwod kola wynosi:',L:10:2);
    end;
    2:begin  (*Wybrano trojkat*)
      writeln('Trojkat');
      writeln;
      {Rysowanie figury}
      for i:=1 to 8 do
        begin
          for j:=1 to i do
            write('*');
          writeln;
        end;
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc podstawy trojkata:');
      readln(a);
      write('Podaj wysokosc trojkata:');
      readln(h);
      write('Podaj dlugosc drugiego boku:');
      readln(b);
      write('Podaj dlugosc trzeciego boku:');
      readln(c);
      {Liczenie pola i obwodu trojkata}
      P:=0.5*a*h;
      L:=a+b+c;
      writeln;
      writeln('P=0.5*',a:6:2,'*',h:6:2);
      writeln('L=',a:6:2,'+',b:6:2,'+',c:6:2);
      writeln;
      writeln('Pole trojkata wynosi: ',P:10:2);
      writeln('Obwod trojkata wynosi:',L:10:2);
    end;
    3:begin  (*Wybrano prostokat*)
      writeln('Prostokat');
      writeln;
      {Rysowanie figury}
      for i:=1 to 5 do
        begin
          for j:=1 to 10 do
            write('*');
        writeln;
        end;
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc pierwszego boku:');
      readln(a);
      write('Podaj dlugosc drugiego boku:');
      readln(b);
      {Liczenie pola i obwodu prostokata}
      P:=a*b;
      L:=2*a+2*b;
      writeln;
      writeln('P=',a:6:2,'*',b:6:2);
      writeln('L=2*',a:6:2,'+2*',b:6:2);
      writeln;
      writeln('Pole prostokata wynosi: ',P:10:2);
      writeln('Obwod prostokata wynosi:',L:10:2);
    end;
    4:begin  (*Wybrano kwadrat*)
      writeln('Kwadrat');
      writeln;
      {Rysowanie figury}
      for i:=1 to 10 do
        writeln('**********');
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc boku:');
      readln(a);
      {Liczenie pola i obwodu kwadratu}
      P:=sqr(a);
      L:=4*a;
      writeln;
      writeln('P=',a:6:2,'*',a:6:2);
      writeln('L=4*',a:6:2);
      writeln;
      writeln('Pole kwadratu wynosi: ',P:10:2);
      writeln('Obwod kwadratu wynosi:',L:10:2);
    end;
    5:begin  (*Wybrano trapez*)
      writeln('Trapez');
      writeln;
      {Rysowanie figury}
      for i:=6 to 13 do
        begin
          for j:=1 to i do
            write('*');
          writeln;
        end;
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc dolnej podstawy (pierwszego boku):');
      readln(a);
      write('Podaj dlugosc gornej podstawy (drugiego boku):');
      readln(b);
      write('Podaj wysokosc:');
      readln(h);
      write('Podaj dlugosc trzeciego boku:');
      readln(c);
      write('Podaj dlugosc czwartego boku:');
      readln(d);
      {Liczenie pola i obwodu trapezu}
      P:=0.5*(a+b)*h;
      L:=a+b+c+d;
      writeln;
      writeln('P=0.5*(',a:6:2,'+',b:6:2,')*',h:6:2);
      writeln('L=',a:6:2,'+',b:6:2,'+',c:6:2,'+',d:6:2);
      writeln;
      writeln('Pole trapezu wynosi: ',P:10:2);
      writeln('Obwod trapezu wynosi:',L:10:2);
    end;
    6:begin  (*Wybrano rownoleglobok*)
      writeln('Rownoleglobok');
      writeln;
      {Rysowanie figury}
      for i:=1 to 5 do
        begin
          for j:=1 to i do
            write(' ');
          writeln('*************');
        end;
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc podstawy:');
      readln(a);
      write('Podaj dlugosc drugiego boku:');
      readln(b);
      write('Podaj wysokosc:');
      readln(h);
      {Liczenie pola i obwodu rownolegloboku}
      P:=a*h;
      L:=2*(a+b);
      writeln;
      writeln('P=',a:6:2,'*',b:6:2);
      writeln('L=2*(',a:6:2,'+',b:6:2,')');
      writeln;
      writeln('Pole rownolegloboku wynosi: ',P:10:2);
      writeln('Obwod rownolegloboku wynosi:',L:10:2);
    end;
    7:begin  (*Wybrano romb*)
      writeln('Romb');
      writeln;
      {Rysowanie figury}
      for i:=1 to 5 do
        begin
          for j:=1 to i do
            write(' ');
          for j:=1 to 5 do
            write('*');
          writeln;
        end;
      writeln;
      {Wprowadzanie danych o figurze (dlugosci)}
      write('Podaj dlugosc pierwszej przekatnej:');
      readln(e);
      write('Podaj dlugosc drugiej przekatnej:');
      readln(f);
      write('Podaj dlugosc boku:');
      readln(a);
      {Liczenie pola i obwodu rombu}
      P:=0.5*e*f;
      L:=4*a;
      writeln;
      writeln('P=0.5*',e:6:2,'*',f:6:2);
      writeln('L=4*',a:6:2);
      writeln;
      writeln('Pole rombu wynosi: ',P:10:2);
      writeln('Obwod rombu wynosi:',L:10:2);
    end;
    end;
    writeln;
    write('Czy jeszcze raz ? (T)ak');
    czyTak:=UpCase(readkey);  (*Czytanie klawisza i zwiekszenie go do DUZYCH LITER*)
  until not (czyTak='T');  (*Jesli nacisnieto T to powrot do poczatku, jesli nie to koniec*)
end.
