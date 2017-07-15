# Manga chapters downloader (from MangaTown)

## It was my first attempt

Back to then, I didn't know about JSZip library and creating Blob resources to save files by browser.

I tried to gather data from page with Yahoo Query API (YQL) to bypass introduced that time Cross-Origin Request Sharing (CORS) policy. Browser can't get HTML source from page loaded to iframe or new window/tab without additional tools. I managed to discover that with using YQL I could get the source code and parse it to gather links and other data allowing me to browsing website further.

Now YQL can't get full HTML (despite requests limits per day), so project doesn't work anymore. I've abandoned that project version, because I've started new version \(**[Manga-downloader](https://github.com/martin11591/Manga-downloader)** repository\), which uses JSZip library (allowing to compress images together to one file and save by browser) and my little PHP script (allowing to bypass CORS, get HTML source and download images).

All that in one page, no additional programs needed to run, opposed to previous project. It needed to get images links, prepare them as text files for parsing and downloading by wget (thanks to another program, Batch script).

## Still, as best part of this piece of code I consider requests management.

I can: reuse it somewhere else, control number of simultaneous requests at once, pause current requests or abort it whenever I want, then retry it.

All requests are stored in history with its results, grouped by: aborted, succeded and failed.

# Pobieracz rozdziałów mangi (z MangaTown)

## To było moje pierwsze podejście

Wracając do wtedy, nie wiedziałem jeszcze o bibliotece JSZip i tworzeniu zasobów Blob, które mogły zostać zapisane przez przeglądarkę jako plik.

Próbowałem zebrać dane ze strony z użyciem Yahoo Query API (YQL) aby pominąć wprowadzone w tym czasie zasady mechanizmu współdzielenia zasobów pomiędzy serwerami (CORS). Przeglądarka nie mogła uzyskać źródła HTML ze strony wczytanej do iframe lub nowego okna/karty bez dodatkowych narzędzi. Udało mi się odkryć, że korzystając z YQL byłem w stanie uzyskać kod źródłowy strony i przeparsować go, aby uzyskać dalsze linki i inne dane pozwalające mi poruszać się dalej po stronie.

Teraz YQL nie może uzyskać pełnych danych HTML (pomijając limit żądań na dzień), w związku z czym projekt przestał działać. Porzuciłem tą wersję projektu, ponieważ rozpocząłem nową wersję \(repozytorium **[Manga-downloader](https://github.com/martin11591/Manga-downloader)**\), która używa biblioteki JSZip (pozwalająca na skompresowanie obrazów do jednego pliku i zapisania przez przeglądarkę) i mojego małego skryptu PHP (pozwalającego pominąć CORS, pozyskać źródło HTML i pobrać obrazy).

Wszystko to na jednej stronie, nie potrzeba uruchamiać żadnych dodatkowych programów, w przeciwieństwie do poprzedniego projektu. Potrzebował on pobrać linki obrazów oraz przygotować je jako tekstowe pliki do parsowania i pobrania przez wget (dzięki kolejnemu programowi, skryptowi Batch).

## Wciąż, za najlepszą część tego kodu uważam zarządzanie żądaniami.

Mogę: wykorzystać to ponownie gdzieś indziej, kontrolować równoczesną liczbę żądań na raz, pauzować bieżące żądanie lub anulować je kiedy chcę, by następnie je wznowić.

Wszystkie żądania są zachowywane w historii wraz z ich wynikami, pogrupowane jako: anulowane, zakończone sukcesem i błędem.