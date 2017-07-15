program plik_elementowy;
USES Crt;
Var
 X:REAL;
 f:FILE OF REAL;
 nazwa:STRING[30];
 Wybrany_klawisz:CHAR;
 Istnieje_plik:BOOLEAN;
 (*****************************************************)
 BEGIN
   ClrScr;
   Writeln('Zakladanie pliku elementarnego na dysku');
   Writeln('i wprowadzanie do niego liczb rzeczywistych.');
   Istnieje_plik:=TRUE;
   Writeln;
   Writeln('Podaj nazwe pliku:');
   Write('(Nie podasz - nazwa domyslna pliku:');
   Writeln('rzecz-1.dan)');
   Readln(nazwa);
   Writeln;
   IF LENGTH(nazwa)=0 THEN
     nazwa:='rzecz-1.dan';
   ASSIGN(f,nazwa);
   {$I-}
   RESET(f);
   {$I+}
   IF IOResult=0 THEN
   BEGIN (*Plik istnieje, czy zastapic go nowym?*)
     Writeln('Uwaga!!!');
     Writeln('Plik istnieje - ',#7#7#7,'Wszystkie dotychczasowe dane zostana usuniete z pliku.');
     Writeln;
     REPEAT
       Write('Wykonywac dalej (Tak/Nie) ? ');
       Readln(Wybrany_klawisz);
     UNTIL Wybrany_klawisz IN ['T','t','N','n'];
     IF Wybrany_klawisz IN ['N','n'] THEN
       Istnieje_plik:=FALSE (*Nie tworzymy nowego pliku*)
   END;
   Writeln;
   IF Istnieje_plik THEN
   BEGIN (*Tworzenie nowego pliku*)
     ASSIGN(f,nazwa);
     REWRITE(f);
     X:=-10.0;
     WHILE X<=10.0 DO
     BEGIN
       Write(f,X);
       X:=X+0.5;
     END;
   CLOSE(f);
   Writeln;
   Writeln('Nowo utworzony plik nosi nazwe:',nazwa);
   Writeln;
   Readln;
 END;
END.