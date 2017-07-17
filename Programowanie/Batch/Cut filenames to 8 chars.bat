@echo off
setlocal enableextensions
setlocal enabledelayedexpansion
del "Revert.bat" >nul
for %%f in (*.*) do (
set a=%%~nf
rename "%%f" "!a:~0,8!%%~xf"
echo rename "!a:~0,8!%%~xf" "%%f" >>"Revert.bat"
)
pause