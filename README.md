# Etch-a-Sketch

Ho ipotizzato una funzione ciclica che creasse una riga per 16 volte; 
per ogni riga ho fatto in modo che un altro ciclo creasse 16 celle;
in questo modo viene creato il grid 16x16;

Dopo diversi tentativi, ho compreso meglio le caratteristiche di flexbox:
ho assegnato display:flex a body, container, row e gridBox;
ho fatto in modo che sia gridBox che row riempissero tutto lo spazio di container, assegnando loro flex: 1;
ho compreso che in questo caso, utilizzando flex era meglio lavorare con la dimensione quadrata del container, piuttosto che con aspect ratio: 1/1;
ho compreso come sia necessario ragionare sulle proprietà da assegnare alle varie classi, per evitare che vadano in contrasto; è stato infatti necessario non assegnare misura specifica a gridbox ma min width e min height a 0;
ho impostato una misura massima(uguale per height e width)  al container per evitare che andasse oltre i limiti della finestra;
ho imparato ad usare min() perchè il grid potesse adattarsi in maniera dinamica alla pagina.
ho compreso utilizzo di mouseenter e mouseleave
appreso come rimuovere tutti i child di un node:
per rimuovere un child è importante specificare la posizione e non il nome 
	funzione while (container.firlstChild {
		container.removeChild(container.firstChild)

