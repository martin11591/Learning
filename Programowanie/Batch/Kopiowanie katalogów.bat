@echo off
SETLOCAL ENABLEEXTENSIONS
md "I:\Konsola"
FOR /R %%I in (.) do (
echo "I:\Konsola%%~pI"
echo
echo %%~nI
md "I:\Konsola%%~pI"
md "I:\Konsola%%~pI%%~nI"
copy /Y "%%~fI\*.jpe" "I:\Konsola%%~pI%%~nI\"
copy /Y "%%~fI\*.jpg" "I:\Konsola%%~pI%%~nI\"
copy /Y "%%~fI\*.raw" "I:\Konsola%%~pI%%~nI\"
)