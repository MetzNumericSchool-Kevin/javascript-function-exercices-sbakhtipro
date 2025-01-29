const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
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
    tarif = inventaire[0].prix * quantite_demandee
    return console.log(`Le tarif pour ${quantite_demandee} potions ${id_potion} est ${tarif}`)
}

tarifPotion(inventaire[0].id,inventaire,3)