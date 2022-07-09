# Best day 2 BBQ

React applicatie die helpt om te bepalen of het een goede dag is om te barbequën!
___

## Het project

### Best Day 2 Barbeque

De Best day 2 Barbeque applicatie geeft een score voor te barbecuen die is gebaseerd op de weersomstandigheden. Ook is
er de mogelijkheid om recepten te bekijken.

- De applicatie heeft een registreer en inlogfunctie.
- De applicatie heeft een zoekfunctie waarbij gezocht kan worden op locatie (stads/dorpsnaam) en zet deze om in Lat(
  itude) en een Lon(gitude).
- De applicatie gebruikt de Lat(itude) en een Lon(gitude om een weerdata te ontvangen en zet deze om in een
  “Barbeque-score”.
- De applicatie heeft een receptenpagina waarbij recepten bekeken kunnen worden die doorlinken naar het originele
  recept.
- De applicatie heeft een contactpagina waarbij gebruikers (zogenaamd) een bericht kunnen versturen naar de backend.

De applicatie is gemaakt met [React](https://reactjs.org/) en maakt hierbij gebruik van
de [Openweather API](https://openweathermap.org/api). De applicatie communiceert met
de [Novi Educational Backend](https://github.com/hogeschoolnovi/novi-educational-backend-documentation) en verwacht van
de gebruiker een gebruikersnaam, email en wachtwoord.

---

## Applicatie starten

### voorbereiding

- Om het project binnen te halen dien je het te clonen. Dit kan vanaf hier:
  [https://github.com/TommyBerkmortel/eindopdracht-frontend](https://github.com/TommyBerkmortel/eindopdracht-frontend)


- De Open Weather API dient te worden voorzien van sleutel. Deze sleutel krijg je bij het registreren op de website van:
  [https://openweathermap.org/api](https://openweathermap.org/api)

### Installatie

Voer de onderstaande stappen uit om alle benodigde elementen voor dit project te installeren.

1. Om dit project te kunnen starten moet u [npm](https://www.npmjs.com/) installeren. Dit kan door onderstaande command in
   uw terminal in te voeren:

   #### `npm install npm@latest -g`

2. Maak een .env bestand aan in de "eindopdracht-bd2b" folder en plaats onderstaande tekst met uw Open Weather API sleutel i.p.v. de *******
   
   #### `REACT_APP_API_KEY=*********`

4. Installeer alle benodigde NPM packeges. Dit kan door onderstaande command in
   uw terminal in te voeren: 

   #### `npm install npm@latest -g`


### start

- Als de installatie klaar is kan de applicatie opgestart worden. Dit kan door onderstaande command in
  uw terminal in te voeren:

  #### `npm start`

De applicatie zal nu geopend worden in uw browser op adres: [http://localhost:3000](http://localhost:3000)

___
