import { CharacterSpellSlotsAtLevelDto } from "../character/CharacterSpellSlotsAtLevel.dto"

//need subclass/levels
{
    "index": "fiend",
    "class": {
      "index": "warlock",
      "name": "Warlock",
      "url": "/api/classes/warlock"
    },
    "name": "Fiend",
    "subclass_flavor": "Otherworldly Patron",
    "desc": [
      "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."
    ],
    "spells": [
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "burning-hands",
          "name": "Burning Hands",
          "url": "/api/spells/burning-hands"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "command",
          "name": "Command",
          "url": "/api/spells/command"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "blindness-deafness",
          "name": "Blindness/Deafness",
          "url": "/api/spells/blindness-deafness"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "scorching-ray",
          "name": "Scorching Ray",
          "url": "/api/spells/scorching-ray"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "fireball",
          "name": "Fireball",
          "url": "/api/spells/fireball"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "stinking-cloud",
          "name": "Stinking Cloud",
          "url": "/api/spells/stinking-cloud"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "fire-shield",
          "name": "Fire Shield",
          "url": "/api/spells/fire-shield"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "wall-of-fire",
          "name": "Wall of Fire",
          "url": "/api/spells/wall-of-fire"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "flame-strike",
          "name": "Flame Strike",
          "url": "/api/spells/flame-strike"
        }
      },
      {
        "prerequisites": [
          {
            "index": "warlock-1",
            "type": "level",
            "name": "Warlock 1",
            "url": "/api/classes/warlock/levels/1"
          }
        ],
        "spell": {
          "index": "hallow",
          "name": "Hallow",
          "url": "/api/spells/hallow"
        }
      }
    ],
    "subclass_levels": "/api/subclasses/fiend/levels",
    "url": "/api/subclasses/fiend"
  }


  {
    "index": "evocation",
    "class": {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
    },
    "name": "Evocation",
    "subclass_flavor": "Arcane Tradition",
    "desc": [
      "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."
    ],
    "subclass_levels": "/api/subclasses/evocation/levels",
    "url": "/api/subclasses/evocation"
  }
--evocation/levels--
[
    {
      "level": 2,
      "feature_choices": [],
      "features": [
        {
          "index": "evocation-savant",
          "name": "Evocation Savant",
          "url": "/api/features/evocation-savant"
        },
        {
          "index": "sculpt-spells",
          "name": "Sculpt Spells",
          "url": "/api/features/sculpt-spells"
        }
      ],
      "class": {
        "index": "wizard",
        "name": "Wizard",
        "url": "/api/classes/wizard"
      },
      "subclass": {
        "index": "evocation",
        "name": "Evocation",
        "url": "/api/subclasses/evocation"
      },
      "url": "/api/subclasses/evocation/levels/2",
      "index": "evocation-2"
    },
    {
      "level": 6,
      "feature_choices": [],
      "features": [
        {
          "index": "potent-cantrip",
          "name": "Potent Cantrip",
          "url": "/api/features/potent-cantrip"
        }
      ],
      "class": {
        "index": "wizard",
        "name": "Wizard",
        "url": "/api/classes/wizard"
      },
      "subclass": {
        "index": "evocation",
        "name": "Evocation",
        "url": "/api/subclasses/evocation"
      },
      "url": "/api/subclasses/evocation/levels/6",
      "index": "evocation-6"
    },
    {
      "level": 10,
      "feature_choices": [],
      "features": [
        {
          "index": "empowered-evocation",
          "name": "Empowered Evocation",
          "url": "/api/features/empowered-evocation"
        }
      ],
      "class": {
        "index": "wizard",
        "name": "Wizard",
        "url": "/api/classes/wizard"
      },
      "subclass": {
        "index": "evocation",
        "name": "Evocation",
        "url": "/api/subclasses/evocation"
      },
      "url": "/api/subclasses/evocation/levels/10",
      "index": "evocation-10"
    },
    {
      "level": 14,
      "feature_choices": [],
      "features": [
        {
          "index": "overchannel",
          "name": "Overchannel",
          "url": "/api/features/overchannel"
        }
      ],
      "class": {
        "index": "wizard",
        "name": "Wizard",
        "url": "/api/classes/wizard"
      },
      "subclass": {
        "index": "evocation",
        "name": "Evocation",
        "url": "/api/subclasses/evocation"
      },
      "url": "/api/subclasses/evocation/levels/14",
      "index": "evocation-14"
    }
  ]



  --
  berserker
  --
  {
    "index": "berserker",
    "class": {
      "index": "barbarian",
      "name": "Barbarian",
      "url": "/api/classes/barbarian"
    },
    "name": "Berserker",
    "subclass_flavor": "Primal Path",
    "desc": [
      "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
    ],
    "subclass_levels": "/api/subclasses/berserker/levels",
    "url": "/api/subclasses/berserker"
  }

--
berserker/levels
--
  [
    {
      "level": 3,
      "feature_choices": [],
      "features": [
        {
          "index": "frenzy",
          "name": "Frenzy",
          "url": "/api/features/frenzy"
        }
      ],
      "class": {
        "index": "barbarian",
        "name": "Barbarian",
        "url": "/api/classes/barbarian"
      },
      "subclass": {
        "index": "berserker",
        "name": "Berserker",
        "url": "/api/subclasses/berserker"
      },
      "url": "/api/subclasses/berserker/levels/3",
      "index": "berserker-3"
    },
    {
      "level": 6,
      "feature_choices": [],
      "features": [
        {
          "index": "mindless-rage",
          "name": "Mindless Rage",
          "url": "/api/features/mindless-rage"
        }
      ],
      "index": "berserker-6",
      "class": {
        "index": "barbarian",
        "name": "Barbarian",
        "url": "/api/classes/barbarian"
      },
      "subclass": {
        "index": "berserker",
        "name": "Berserker",
        "url": "/api/subclasses/berserker"
      },
      "url": "/api/subclasses/berserker/levels/6"
    },
    {
      "level": 10,
      "feature_choices": [],
      "features": [
        {
          "index": "intimidating-presence",
          "name": "Intimidating Presence",
          "url": "/api/features/intimidating-presence"
        }
      ],
      "class": {
        "index": "barbarian",
        "name": "Barbarian",
        "url": "/api/classes/barbarian"
      },
      "subclass": {
        "index": "berserker",
        "name": "Berserker",
        "url": "/api/subclasses/berserker"
      },
      "url": "/api/subclasses/berserker/levels/10",
      "index": "berserker-10"
    },
    {
      "level": 14,
      "feature_choices": [],
      "features": [
        {
          "index": "retaliation",
          "name": "Retaliation",
          "url": "/api/features/retaliation"
        }
      ],
      "class": {
        "index": "barbarian",
        "name": "Barbarian",
        "url": "/api/classes/barbarian"
      },
      "subclass": {
        "index": "berserker",
        "name": "Berserker",
        "url": "/api/subclasses/berserker"
      },
      "url": "/api/subclasses/berserker/levels/14",
      "index": "berserker-14"
    }
  ]