@echo off
title Tool
chcp 1250
setlocal enableextensions
set /P sciezka=Sciezka=
set /P info=Info (T/N) ? 
if /I %info% neq t set info=n
set /P katalogi=Z podfolderami (T/N) ? 
if /I %katalogi% neq t set katalogi=n
cls
if /I %info% equ t (
echo Informacja wlaczona. Nacisnij dowolny klawisz, aby rozpoczac.
pause >nul
)
if /I %katalogi% equ t (
for /R %%f in (.) do (
if not exist "%sciezka%%%~pf%%~nf" mkdir "%sciezka%%%~pf%%~nf" >nul
if /I %info% equ t (
copy "%%~ff\*" "%sciezka%%%~pf%%~nf"
) else (
copy "%%~ff\*" "%sciezka%%%~pf%%~nf" >nul
)
)
) else (
for %%f in (.) do (
if not exist "%sciezka%%%~pf%%~nf" mkdir "%sciezka%%%~pf%%~nf" >nul
if /I %info% equ t (
copy "%%~ff\*" "%sciezka%%%~pf%%~nf"
) else (
copy "%%~ff\*" "%sciezka%%%~pf%%~nf" >nul
)
)
)
if /I %info% equ t (
echo Kopiowanie zakonczone.
pause >nul
)