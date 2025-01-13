////////////////////////////////////////////////////////////////////////////////////

Auteur: Rodéric Lambert--Huet

Ce Projet contient:

////////////////////////////////////////////////////////////////////////////////////

1)- Un module carte, qui permet de créer des cartes et de les manipuler. Ce module comprend :

1.1 : Une enumération Couleur qui définit les différentes couleurs d’un jeu de carte (pique, carreau, trèfle et cœur)

1.2 : Un enregistrement Carte qui permet de représenter des cartes, chacune avec une couleur et une valeur allant de 2 à 14 (note: on peut considérer que le valet vaut 11, la dame 12, le roi 13, et l’as 14).

1.3 : Une fonction creerCarte pour créer une carte à partir d’un couleur et d’une valeur.

1.4 : Une fonction afficherCarte qui affiche une carte dans la console (utilisant les emojis ♣️,♦️,♥️,♠️).

1.5 : Une fonction comparerCartes qui prend deux cartes et renvoie une valeur positive si la première carte est plus forte, zéro si elles ont les mêmes valeurs, et une valeur négative si la première carte est moins forte.

////////////////////////////////////////////////////////////////////////////////////

2)- Un module jeu qui permet de créer et manipuler un jeu de cartes, avec :

2.1 : Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.

2.2 : Une fonction tirerCarte qui retire la première carte d’un tableau de cartes, et qui la rend en valeur de retour

////////////////////////////////////////////////////////////////////////////////////
