import { Carte , creerCarte, Couleur } from "./carte"

/**
 * Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.
 * 
 */
export function creerJeu(): Array<Carte>{
    let jeu : Array<Carte>;
    let tabCouleur : Array<Couleur> = [Couleur.carreau,Couleur.coeur,Couleur.pique,Couleur.trefle];
    let valeur : number = 1;
    let numCouleur : number=0
    let indice : number = 0;

    while(valeur<15 || numCouleur < 3){
        if(valeur>14){
            valeur=1;
            numCouleur+=1;
        }
        jeu[indice]=creerCarte(valeur,tabCouleur[numCouleur])
        indice+=1
        valeur+=1

    }
    return jeu;
}

/**
 * Une fonction tirerCarte qui retire la première carte d’un tableau de cartes, et qui la rend en valeur de retour
 * 
 * @param jeu Le jeu où l'on tire une carte
 */
export function tirerCarte(jeu : Array<Carte>):Carte{
    let cartePioche = jeu[0];
    for(let i : number = 1;i<53;i++){
        jeu[i]=jeu[i-1]
    }
    return cartePioche;
}
