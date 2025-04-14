/**
 * Create an ID from the input truncating or padding the value to make it reach 16 characters.
 * @param {string} id
 * @returns {string}
 */
function staticID(id) {
  if ( id.length >= 16 ) return id.substring(0, 16);
  return id.padEnd(16, "0");
}

async function setTable() {
  const sorts = await fromUuid("Compendium.obojima.regles.JournalEntry.EmVb8uBX9fZ0Dyti");
  const races = await fromUuid("Compendium.obojima.regles.JournalEntry.igzkEeYj6Js7T1KI");
  races.setFlag("dnd5e", "type", "chapter");
  sorts.setFlag("dnd5e", "type", "chapter");
}

Hooks.on('init', () => {
  CONFIG.DND5E.skills.mec = {
    label: "DND5E.SkillSurMec",
    ability: "int",
    fullKey: "mechanisms",
    reference: "Compendium.obojima.règles.JournalEntry.TPZn2xqZ4RKwAkGB.JournalEntryPage.OpZZ1calv1e4guHr",
    icon: "icons/magic/fire/flame-burning-campfire-yellow-blue.webp"
  }

  CONFIG.DND5E.skills.sal = {
    label: "DND5E.SkillSurSal",
    ability: "int",
    fullKey: "salvage",
    reference: "Compendium.obojima.regles.JournalEntry.TPZn2xqZ4RKwAkGB.JournalEntryPage.kmtrINZNEmSX8V9x",
    icon: "icons/magic/fire/flame-burning-campfire-yellow-blue.webp"
  }

  const addEffect = (effects, {special, ...data}) => {
    data = foundry.utils.deepClone(data);
    data._id = staticID(`dnd5e${data.id}`);
    data.img = data.icon ?? data.img;
    delete data.icon;
    effects.push(data);
    if ( special ) CONFIG.specialStatusEffects[special] = data.id;
  };

  addEffect(CONFIG.statusEffects, {id:'pacify', name:"EFFECT.DND5E.StatusPacify", pseudo:true, icon:"modules/obojima/icons/svg/statuses/pacify.svg"});

  CONFIG.DND5E.languages.standard.children.nakunaku = "DND5E.Language.Language.Nakunaku";
  CONFIG.DND5E.languages.exotic.children.torum = "DND5E.Language.Language.Torum";
  CONFIG.DND5E.languages.exotic.children.archaifirstage = "DND5E.Language.Language.ArchaicFirstAge";
  CONFIG.DND5E.armorIds.divers = "Compendium.obojima.nouveaux-objets.Item.XqwSnlpMJKfqjHxQ";
  CONFIG.DND5E.armorIds.ecorce = "Compendium.obojima.nouveaux-objets.Item.PQNDYb0NJr3jHvqT";
  CONFIG.DND5E.armorIds.ecume = "Compendium.obojima.nouveaux-objets.Item.VYuZlawUBKTVPmV3";
  CONFIG.DND5E.shieldIds.potlid = "Compendium.obojima.nouveaux-objets.Item.asYNh3Hi5zQK0zT0";
  CONFIG.DND5E.weaponIds.papillon = "Compendium.obojima.nouveaux-objets.Item.uz8ez40oE7UDLTUx";
  CONFIG.DND5E.weaponIds.boomerang = "Compendium.obojima.nouveaux-objets.Item.4jjrbIla2YW6dUjS";
  CONFIG.DND5E.weaponIds.eventail = "Compendium.obojima.nouveaux-objets.Item.DZKKdKrTxYuhh7Gd";
  CONFIG.DND5E.weaponIds.parapluie = "Compendium.obojima.nouveaux-objets.Item.e8Kvu4kBPH01yHfF";
  CONFIG.DND5E.weaponIds.pelle = "Compendium.obojima.nouveaux-objets.Item.5fLoHSdM1Our5eFs";
  CONFIG.DND5E.weaponIds.poele = "Compendium.obojima.nouveaux-objets.Item.GdjoWIGvRnoX5JLf";
  CONFIG.DND5E.weaponIds.rame = "Compendium.obojima.nouveaux-objets.Item.moT5nRe92QALWNuu";
  CONFIG.DND5E.weaponIds.transmission = "Compendium.obojima.nouveaux-objets.Item.ZqzJYSNYseJHJAqN";
  CONFIG.DND5E.weaponIds.bougie = "Compendium.obojima.nouveaux-objets.Item.QP803H2az16mcerR";
  CONFIG.DND5E.weaponIds.berger = "Compendium.obojima.nouveaux-objets.Item.b0hHjLQ9XbQI9Ss3";
  CONFIG.DND5E.weaponIds.vertebre = "Compendium.obojima.nouveaux-objets.Item.0WmNqLhpwFagairG";
  CONFIG.DND5E.weaponIds.pierre = "Compendium.obojima.nouveaux-objets.Item.EMCs0VZWO134GulN";
  CONFIG.DND5E.weaponIds.soufflet = "Compendium.obojima.nouveaux-objets.Item.Ge2GaYJeg8nH83pL";
  CONFIG.DND5E.weaponIds.sauteur = "Compendium.obojima.nouveaux-objets.Item.lsF2Mdx8aMDITHWV";
  CONFIG.DND5E.weaponIds.campagne = "Compendium.obojima.nouveaux-objets.Item.o6MX0l66aLvR6RWm";
  CONFIG.DND5E.weaponIds.pissenlit = "Compendium.obojima.nouveaux-objets.Item.i5K1rcNnQmXWBAU3";
  CONFIG.DND5E.weaponIds.lomlom = "Compendium.obojima.nouveaux-objets.Item.fynVHhBdpAekr01P";
  CONFIG.DND5E.weaponIds.sacbaton = "Compendium.obojima.nouveaux-objets.Item.Hp5hG0wbvpEum7DS";
  CONFIG.DND5E.weaponIds.tigenakudama = "Compendium.obojima.nouveaux-objets.Item.LIfGXSvOhHeDbho0";
  CONFIG.DND5E.weaponIds.bouilloire = "Compendium.obojima.nouveaux-objets.Item.mFodLNlFkl6Z2aqo";
  CONFIG.DND5E.consumableTypes.ingredient = {
    label:"DND5E.CONSUMABLE.Type.Ingredient.Label",
    subtypes:{
      common:"DND5E.CONSUMABLE.Type.Ingredient.Common",
      uncommon:"DND5E.CONSUMABLE.Type.Ingredient.Uncommon",
      rare:"DND5E.CONSUMABLE.Type.Ingredient.Rare",
    }
  }
});

Hooks.on('ready', async () => {
  //await setTable();
});
