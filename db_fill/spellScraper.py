import requests
import psycopg2

apiUrlBase = "dnd5eapi.co/api/"

def getAllSpells():
  r = requests.get(someurlhere).json()

def connectToDb():
  connection = psycopg2.connect(
    host=,
    dbname=postgres,
    user=elchungAdmin,
    password=,
    port=5432)
