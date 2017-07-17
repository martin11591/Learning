@echo off

mode con: cols=80 lines=25

setlocal enableextensions
setlocal enabledelayedexpansion

set tCount=0
set dCount=0
set fCount=0
set hLen=80
set wLen=25
set /a hLen1=%hLen%-1
set /a hLen2=%hLen%-8
set /a wLen1=%wLen%-4

set APL=¤
set CPL=
set EPL=¨
set LPL=
set NPL=ã
set OPL=à
set SPL=—
set XPL=
set ZPL=½
set aPL=¥
set cPL=†
set ePL=©
set lPL=ˆ
set nPL=ä
set oPL=¢
set sPL=˜
set xPL=«
set zPL=¾

title Odkrywanie plik%oPL%w i nadawanie praw aktualnemu u%zPL%ytkownikowi
echo Odkrywanie plik%oPL%w i nadawanie praw
echo aktualnemu u%zPL%ytkownikowi do wszystkich plikow.
echo.
echo Naci%sPL%nij dowolny klawisz, aby rozpocz%aPL%%cPL%.
pause >nul

:count

cls
title Okre%sPL%lanie liczby folder%oPL%w i plik%oPL%w...
echo Okre%sPL%lanie liczby folder%oPL%w i plik%oPL%w...
echo.

for /f "tokens=* delims=" %%F in ('dir /a: /o:gn /b /s') do (
if EXIST "%%F\" (set /a dCount=!dCount!+1) ELSE (
set /a fCount=!fCount!+1
)
title !dCount! folder%oPL%w, !fCount! plik%oPL%w
)

title Odkrywanie plik%oPL%w i nadawanie praw aktualnemu u%zPL%ytkownikowi
echo Liczba folder%oPL%w: %dCount%
echo Liczba plik%oPL%w: %fCount%
echo.

echo Naci%sPL%nij dowolny klawisz, aby
echo rozpocz%aPL%%cPL% wprowadzanie zmian.

pause >nul

set ddCount=/%dCount% folder%oPL%w
set ffCount=/%fCount% plik%oPL%w

:process

set pdCount=0
set pfCount=0

cls
title Przetwarzanie folder%oPL%w i plik%oPL%w...
echo Przetwarzanie folder%oPL%w i plik%oPL%w...
echo.

for /f "tokens=* delims=" %%F in ('dir /a: /o:gn /b /s') do (
if EXIST "%%F\" (set /a pdCount=!pdCount!+1) ELSE set /a pfCount=!pfCount!+1
set /a perc="(!pdCount!+!pfCount!)*10000/(%dCount%+%fCount%)"
if !perc! LSS 100 (set perc=0!perc!) ELSE (if !perc! LSS 10 set perc=00!perc!)
set perc=!perc:~0,-2!.!perc:~-2!
set perc=!perc!%%
title !perc! - przetwarzany !pdCount! folder%ddCount%, !pfCount! plik%ffCount%
set err=0
cacls "%%F" /E /G Wszyscy:F >nul
if %ERRORLEVEL% EQU 1 set /a err+=1
cacls "%%F" /E /G %USERNAME%:F >nul
if %ERRORLEVEL% EQU 1 set /a err+=1
attrib -r -s -h "%%F" >nul
if %ERRORLEVEL% EQU 1 set /a err+=1
if !err! GTR 0 (set log=B%lPL%%aPL%d) ELSE (set log=OK)
set F= %%F : !log!
if NOT !F! EQU !F:~-%hLen1%! set F=!F:~0,4!...!F:~-%hLen2%!
if !tCount! LEQ %wLen1% (
set str!tCount!=!F!
echo !F!
set /a tCount=!tCount!+1
) ELSE (
for /l %%G in (1,1,%wLen1%) do (
set /a rep=%%G-1
set str!rep!=!str%%G!
)
set str%wLen1%=!F!
cls
echo Przetwarzanie folder%oPL%w i plik%oPL%w...
echo.
for /l %%G in (0,1,%wLen1%) do (
echo !str%%G!
)
)
)

title Odkrywanie plik%oPL%w i nadawanie praw aktualnemu u%zPL%ytkownikowi
cls
echo Przetwarzanie folder%oPL%w i plik%oPL%w...
echo.
if %tCount% LSS %wLen1% set /a wLen1=%tCount%-1
for /l %%G in (2,1,%wLen1%) do (
echo !str%%G!
)
echo.
echo Zako%nPL%czono. Naci%sPL%nij dowolny klawisz.

pause >nul
exit