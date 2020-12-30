import requests
import psycopg2

apiUrlBase = "http://www.dnd5eapi.co/"

def getAllSpells():
  return requests.get(apiUrlBase + "api/spells/").json()[result]
  # spells is array of {index, name, url}

def getSpell(url):
  print("Getting all spells")
  return requests.get(apiUrlBase + url).json()
  # has index, name, desc, range, components, material, ritual,
  # duration, concentration, casting_time, level, damage, area_of_effect,
  # school, classes, subclasses, url

def main():
  conn = psycopg2.connect(
    host="dnddb.c6ffvdcps8bm.us-east-2.rds.amazonaws.com",
    dbname="postgres",
    user="elchungAdmin",
    password="ae1NygLOl1eKbNFTxzuj",
    port=5432
  )

  cur = conn.cursor()
  for spellIndex in getAllSpells():
    print("Getting data for " + spellIndex["name"])
    spell = getSpell(spellIndex["url"])
    cur.execute(f"""
      WITH spellDamageAtLevelQuery as (
        INSERT INTO spell_damage_at_level_entity (
          2, 3, 4, 5, 6, 7, 8, 9
        ) VALUES (
          {spell["damage"]["damage_at_slot_level"]["2"]},
          {spell["damage"]["damage_at_slot_level"]["3"]},
          {spell["damage"]["damage_at_slot_level"]["4"]},
          {spell["damage"]["damage_at_slot_level"]["5"]},
          {spell["damage"]["damage_at_slot_level"]["6"]},
          {spell["damage"]["damage_at_slot_level"]["7"]},
          {spell["damage"]["damage_at_slot_level"]["8"]},
          {spell["damage"]["damage_at_slot_level"]["9"]},
        ) RETURNING id
      ), spellDamageQuery as (
        INSERT INTO spell_damage_entity (
          type
        ) VALUES  (

        ) returning id
      ), UPDATE spell_damage_at_level_entity (
        SET parentSpellDamageId, spellDamageAtLevelQuery.id
      )
    """)

  conn.commit()
  cur.close()
  conn.close()
