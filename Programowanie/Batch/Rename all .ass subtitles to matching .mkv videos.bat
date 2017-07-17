@echo off
if EXIST rename.bat (
del rename.bat
)
setlocal enabledelayedexpansion
set /a a=0
set /a b=0
for %%f in (*.ass) do (
for %%g in (*.mkv) do (
if !a! EQU !b! (
set name=%%g
echo rename "%%f" "!name:~0,-4!.ass">>rename.bat
)
set /a a=!a!+1
)
set /a b=!b!+1
set /a a=0
)
echo Przejrzyj plik rename.bat aby upewnic sie
echo czy zmiany sa prawidlowe, jezeli tak to uruchom.
pause