<!--
TRACCIA

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
-->


<!--MILESTONE 0-->

<!--
DEFINIRE UN ARRAY DI OGGETTI
-->
-Creare un array "team", creando in ogni posizione un oggetto {nome: "", ruolo: "", foto: ""}


<!--MILESTONE 1-->

<!--
STAMPARE ARRAY IN CONSOLE
-->
-Creare un ciclo for per stampare tutti gli elementi dell'array di oggetti


<!--MILESTONE 2-->

<!--
CREARE ELEMENTI NEL DOM
-->
-Definire una variabile collegata alla ul presente nell'HTML
--Creare un ciclo for per aggiungere con il metodo append() un li alla lu
---Aggiungere i 3 valori associati ad ogni oggetto al li creato con il metodo append()


<!--BONUS 1-->

<!--
CORREGGERE IL PATH
-->
-Creare un immagine nel DOM
--Attribuirgli la src eseguendo l'interpolazione tra "../img/" e il valore della chiave "image" dell'oggetto