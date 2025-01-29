const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3,
  },
};
const inventaire = [
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
    let tarif = inventaire[0].prix * quantite_demandee
    return tarif
}

let id_potion = inventaire[0].id
let quantite_demandee = 3

tarifPotion(id_potion,inventaire,quantite_demandee)
console.log(`Le tarif pour ${quantite_demandee} potions ${id_potion} est ${tarif}`)

// ---------------- ex 3 ----------------

function fabricationPotion(id_potion,prix_potion=10,stock_potion=1) {
    let potion = {
        id: id_potion,
        prix: prix_potion,
        stock: stock_potion,
    }
    return potion
}

potion = fabricationPotion("potion_2",15,3)
inventaire.push(potion)
console.log(inventaire)

// ---------------- ex 4 ---------------

function ajoutPotion(inventaire,potion) {
    inventaire.forEach(item => {
        if (potion.id===item.id) {
            item.prix = potion.prix
            item.stock = potion.stock
        }
        else {
            inventaire.push(potion)
        }
    });
    return inventaire
}

