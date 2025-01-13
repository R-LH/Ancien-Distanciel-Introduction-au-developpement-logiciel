/*
TP Distanciel Rodéric Lambert--Huet

Un module carte, qui permet de créer des cartes et de les manipuler.
*/


/**
 * Une enumération Couleur qui définit les différentes couleurs d’un jeu de carte (pique, carreau, trèfle et cœur),
 */
export enum Couleur{
    pique, carreau, trefle , coeur
}

/**
 * Un enregistrement Carte qui permet de représenter des cartes, chacune avec une couleur et une valeur allant de 2 à 14 (note: on peut considérer que le valet vaut 11, la dame 12, le roi 13, et l’as 14).
 * 
 */
export type Carte = {
    couleur: Couleur
    valeur :number
};

/**
 * Une enumération Couleur qui définit les différentes couleurs d’un jeu de carte (pique, carreau, trèfle et cœur),
 * 
 * @param valeur La valeur de la carte crée
 * @param couleur La couleur de la carte crée
 */
export function creerCarte(valeur :number, couleur:Couleur) : Carte{
    let resultat : Carte;
    resultat.valeur = valeur;
    resultat.couleur = couleur;
    return resultat;
}

/**
 * Une fonction afficherCarte qui affiche une carte dans la console en utilisant les emojis ♣️,♦️,♥️,♠️).
 * 
 * @param carte La carte à afficher
 */

export function afficherCarte(carte:Carte){
    let emoji : string ="♠️";
    
    if(carte.couleur== Couleur.carreau){
        emoji="♦️";
    }
    if(carte.couleur== Couleur.trefle){
        emoji="♣️";
    }
    if(carte.couleur== Couleur.coeur){
        emoji="♥️";
    }

    if(carte.valeur>=11){
        if(carte.valeur== 11){
            console.log("Valet ", emoji);
        }
        if(carte.valeur== 12){
            console.log("Dame ", emoji);
        }
        if(carte.valeur== 13){
            console.log("Roi ", emoji);
        }
        if(carte.valeur== 14){
            console.log("As ", emoji);
        }
    }
    else {
        console.log(carte.valeur, " ",emoji)
    }

}

/**
 * Une fonction comparerCartes qui prend deux cartes et renvoie une valeur positive si la première carte est plus forte, zéro si elles ont les mêmes valeurs, et une valeur négative si la première carte est moins forte.
 * 
 * @param carte1 La première carte à comparer
 * @param cartes2 La deuxième carte à comparer
 */
export function comparerCartes(carte1 : Carte, carte2 : Carte): number{
    return carte1.valeur-carte2.valeur;
}