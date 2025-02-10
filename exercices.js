const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3,
  },
};
let inventaire = [
  {
    id: "potion_soin",
    prix: 10,
    stock: 0,
  },
];

// ---------------- ex 1 ----------------

function salutations(nom) {
    console.log(`Salutations Aventurier ! Je me nomme ${nom} pour vous servir.`)
}

salutations(nom_sorcier)

// ---------------- ex 2 ----------------

function tarifPotion(id_potion,inventaire,quantite_demandee=1) {
    inventaire.forEach(element => {
        if (element.id===id_potion) {
            tarif = element.prix * quantite_demandee
            console.log(`Le tarif pour ${quantite_demandee} potions ${id_potion} est ${tarif}`)
            return tarif
        }
        else {
            return console.log("La potion n'est pas dans l'inventaire.")
        }
    });
}

let id_potion = "potion_soin"
let quantite_demandee = 3

tarifPotion(id_potion,inventaire,quantite_demandee)

// ---------------- ex 3 ----------------

function fabricationPotion(id_potion,prix_potion=10,stock_potion=1) {
    let potion = {
        id: id_potion,
        prix: prix_potion,
        stock: stock_potion,
    }
    return potion
}

console.log(fabricationPotion("potion_2",15,3))

// ---------------- ex 4 ---------------

function ajoutPotion(inventaire,potion) {
    inventaire.forEach(item => {
        if (potion.id===item.id) {
            item.prix = potion.prix
            item.stock+=potion.stock
            return inventaire
        }
        else {
            inventaire.push(potion)
            return inventaire
        }
    });
}

let potionAjoutee = {
    id: "potion_3",
    prix: 18,
    stock: 2,
}

ajoutPotion(inventaire,potionAjoutee)
console.log(inventaire)

// ---------------- ex 5 ---------------

function chercherPotionEnStock() {
    let potionsEnStock = inventaire.filter(potion => potion.stock > 0)
    return potionsEnStock
}

function chercherPotionPasEnStock() {
    let potionsPasEnStock = inventaire.filter(potion => potion.stock === 0)
    return potionsPasEnStock
}

console.log(chercherPotionEnStock())
console.log(chercherPotionPasEnStock())
console.log(inventaire)

// ---------------- ex 6 ---------------

function fabricationPotionAvecIngredients(id_potion,ingredients,prix_potion=10,stock_potion=1) {
    if (id_potion in manuel_de_fabrication && manuel_de_fabrication[id_potion].ingredients.length === ingredients.length) {
        let test = []
        manuel_de_fabrication.id_potion.forEach(element => {
           if (element in ingredients) {
            test.push(1)
           }
           else {
            test.push(0)
           }
    })
    if (!(test.includes(0))) {
        return potion
    }
    else {
        return new Error('Il manque des ingrédients à cette potion')
    }
}
}

console.log(fabricationPotionAvecIngredients("potion_soin",["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"]))
console.log(fabricationPotionAvecIngredients("potion_soin",["eau_de_source", "poudre_de_diamant"]))

console.log(document.body)








// function fabricationPotionAvecIngredients(id_potion,ingredients,prix_potion=10,stock_potion=1) {
//     if (manuel_de_fabrication.hasOwnProperty(id_potion) && manuel_de_fabrication.id_potion.ingredients.length === ingredients.length) {
//         manuel_de_fabrication.id_potion.forEach(element => {
//         if ((element.id === id_potion) AND manuel_de_fabrication[]
        
//     });
//     }

    
//             if id_potion 
//             manuel_de_fabrication[id_potion].ingredients.forEach(ingredient => {
                
//             });
//             if (manuel_de_fabrication[id_potion].ingredients[0] === ingredients[0] && manuel_de_fabrication[id_potion].ingredients[1] === ingredients[1] && manuel_de_fabrication[id_potion].ingredients[2] === ingredients[2]) {
//                 potion = {
//                     id: id_potion,
//                     prix: prix_potion,
//                     stock: stock_potion,
//                 }
//                 return potion
//             }
//             else {
//                 return new Error('Il manque des ingrédients à cette potion')
//             }
// }

// console.log(fabricationPotionAvecIngredients("potion_soin",["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"]))
// console.log(fabricationPotionAvecIngredients("potion_soin",["eau_de_source", "poudre_de_diamant"]))

// console.log(document.body)