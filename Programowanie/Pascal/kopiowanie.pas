PROGRAM Plik_kopiujacy_liniami;
USES
Crt;
VAR
  pierwszy,drugi : Text;
  linia : STRING[70];
  naz_1,naz_2 : STRING[20];
(*****************************************)
PROCEDURE Kopiuj(naz_1,naz_2:STRING);
  BEGIN
    ASSIGN(pierwszy,naz_1);
    RESET(pierwszy);
    ASSIGN(drugi,naz_2);
    RESET(drugi);
    WHILE NOT EOF(pierwszy) DO
    BEGIN
      READLN(pierwszy,linia);
      (*WRITELN(linia);*)
      WRITELN(drugi,linia);
    END;
    CLOSE(pierwszy);
    CLOSE(drugi);
    WRITELN('Skopiowano zawartosc pliku:',naz_1,' do pliku ',naz_2);
  END;
BEGIN
  ClrScr;
  WRITELN('Kopiowanie danych tekstowych');
  WRITELN('z pliku wejsciowego i dopisywanie ich');
  WRITELN('na koncu tekstu pliku wyjsciowego.');
  WRITELN;
  WRITE('Podaj nazwe pliku wejsciowego:');
  READLN(naz_1);
  WRITE('Podaj nazwe pliku wyjsciowego:');
  READLN(naz_2);
  Kopiuj(naz_1,naz_2);
END.