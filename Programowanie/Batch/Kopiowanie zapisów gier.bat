@echo off
cls
chcp 1250
setlocal enableextensions >nul
set savefolder=F:\Gry\Hitman 2 Silent Assassin\Save
set copyfolder=F:\Gry\Hitman 2 Silent Assassin\Profiles
if NOT EXIST "%savefolder%" (md "%savefolder%")
if NOT EXIST "%copyfolder%" (md "%copyfolder%")
echo Folder zapisow: %savefolder%
echo Folder kopii:   %copyfolder%
set /P player=Kto ostatnio gral? 
if NOT EXIST "%copyfolder%\%player%" (md "%copyfolder%\%player%")
cd /D "%copyfolder%\%player%"
for /R %%f in (.) do (
for %%g in ("%%f\*") do (del "%%g" >nul)
)
cd /D "%savefolder%"
for /R %%f in (.) do (
copy "%%f\*" "%copyfolder%\%player%" >nul
for %%g in ("%%f\*") do (del "%%g" >nul)
)
set /P player=Kto ma teraz grac? 
if NOT EXIST "%copyfolder%\%player%" (md "%copyfolder%\%player%")
cd /D "%copyfolder%\%player%"
for /R %%f in (.) do (
copy "%%f\*" "%savefolder%" >nul
)
echo Kopiowanie zakonczone. Nacisnij dowolny klawisz.
pause >nul