@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
title Usuwanie wirusa
echo Zostanie usuniety wirus typu Autorun oraz
echo zostana przywrocone foldery, jezeli zamiast
echo folderow sa tylko skroty o nazwach tychze folderow.
echo.
echo UWAGA - Zostana usuniete wszystkie pliki
echo autorun.inf, autorun.ini, wszystkie pliki EXE
echo i LNK oraz usuniety zostanie folder RECYCLER
echo (potencjalne pliki oraz foldery zawierajace
echo wirusy) na kazdej partycji.
echo.
echo Dodatkowo zostana odkryte wszystkie foldery
echo (poprzez usuniecie atrybutow Ukryty i Systemowy)
echo znajdujace sie bezposrednio na danej partycji.
echo.
echo Przyklady:
echo.
echo C:\autorun.inf   -     bedzie usuniety
echo D:\autorun.ini   -     bedzie usuniety
echo E:\setup.exe     -     bedzie usuniety
echo F:\game.lnk      -     bedzie usuniety
echo G:\1\autorun.inf - nie bedzie usuniety
echo H:\2\autorun.ini - nie bedzie usuniety
echo I:\3\setup.exe   - nie bedzie usuniety
echo J:\4\game.lnk    - nie bedzie usuniety
echo K:\RECYCLER      -     bedzie usuniety
echo L:\5\RECYCLER    - nie bedzie usuniety
echo M:\Folder        -     bedzie odkryty
echo N:\6\Folder      - nie bedzie odkryty
echo.
echo Nacisnij klawisz, gdy bedziesz gotow.
pause >nul
echo.

echo --------------------------------------------------------------------------------
title Szukanie partycji i/lub napedow...
echo Szukanie partycji i/lub napedow...
echo.

set letters=ABCDEFGHIJKLMNOPQRSTUVWXYZ
set l=
set ll=0

for /L %%B in (0,1,25) do (
call set m=%%letters:~%%B,1%%
if EXIST "!m!:\" (set l=!l!!m! & set /a ll+=1 & echo !m!:\ & title !ll! partycji i/lub napedow)
)

set letters=%l%
echo.
echo %ll% partycji i/lub napedow
echo.
set /a ll-=1
set /a ll*=2

echo --------------------------------------------------------------------------------
title Okreslanie liczby folderow i plikow...
echo Okreslanie liczby folderow i plikow...
echo.

set fCount=0
set dCount=0
title !l!:\ !dCount! folderow, !fCount! plikow
for /L %%B in (0,2,%ll%) do (
call set l=%%letters:~%%B,1%%
echo !l!:\
if EXIST "!l!:\autorun.ini" (set /a fCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
if EXIST "!l!:\autorun.inf" (set /a fCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
for %%F in ("!l!:\*.lnk") do (set /a fCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
for %%F in ("!l!:\*.exe") do (set /a fCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
for /D %%F in ("!l!:\*") do (set /a dCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
for /R "!l!:\RECYCLER\" %%F in (*) do (echo %%F & set /a fCount+=1 & title !l!:\ !dCount! folderow, !fCount! plikow)
)

echo.
echo %dCount% folderow, %fCount% plikow.
echo.

echo Pauza
pause >nul