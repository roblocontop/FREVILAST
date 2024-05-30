**FREVI**

*- Den __beste__ fraværsassistenten*

Da jeg, sammen med mine medelever på 2IMST-IT Elvebakken vgs, grublet over hva den mest irriterende hindringen for en god dag hos Oslos tenåringer er, så hadde vi *alle* samme svar: Visma.

Det var da vi skapte Frevi. For hva er det verste aspektet med Visma? Jo, nemlig _fraværet_. For fravær er plagsomt for mange, både for elever å holde styr på og for lærerere å sette inn. Dette fikser Frevi. Her kan man se både mengden udokumentert fravær og hvor mange timer fravær man mangler før man stryker. I tillegg oppfordres man til å unngå udokementert fravær gjennom vårt streak-system som etter visse antall dager skaffer deg premier. Kort forklart så er Frevi:

- *Ryddig og minimalistisk UI*
- *Gøyalt fravær streak-system*
- *100x bedre enn Visma*

<img width="251" alt="image" src="https://github.com/roblocontop/FREVILAST/assets/144450422/2327b88b-c83e-4275-a176-862376d60c4c"> <img width="176" alt="image" src="https://github.com/roblocontop/FREVILAST/assets/144450422/1f100714-f162-4bf8-b4fb-6cd69137b905"> <img width="554" alt="image" src="https://github.com/roblocontop/FREVILAST/assets/144450422/6399ea67-119a-41d3-a9ba-fdf482bc1561">

Designet i bildene som er vist ovenfor har jeg ikke fått til å gjøre i koden helt enda. Mens jeg skriver denne ReadMe filen så er koden i Github repository-en bare en veldig tidlig utgave av Frevi. Du er velkommen til å åpne koden selv og registrere deg. Straks vil den også bli kopiert opp i VM-en min, da er du igjen velkommen til å bare åpne den rett i browseren din. Jeg brukte React Native til å programmere UI-en, et av de mest populære JS biliotekene der ute. Hvis du kan React JS så vil det være lett å lære deg React Native, det er ikke alt for mange forskjeller. De bruker samme React Core så alle React Hooks du er kjent med vil være tilgjengelig i React Native. Forskjellene er for eksempel at når man lager en app navigerer du ikke mellom skjermer med URL lenger, men vi bruker heller React Native sin innebygde 'navigation'. En annen ting du burde merke deg er at du ikke lenger alltid vil teste i browseren, men heller på mobilen. Da bruker vi Expo til å kjøre koden og du velger selv å åpne den på mobil med QR kode eller å åpne den i en simulator. 

> Du kan selvfølgelig åpne koden selv og registrere deg allerede nå, men blir kanskje bedre å vente til den kobles opp til min VM!🤗

Akkurat nå er det bare to skjermer i appen min som du kan navigere mellom, LoginScreen og HomeScreen. På vår LoginScreen vil du se to knapper, login og register. Med Firebase blir akkurat disse to tingene veldig lett å gjøre. Firebase gjør det nemlig super lett å holde styr på all user-dataen, de har bra authentication, en sikker og enkel måte fpr brukere å logge inn på, alt er veldig automatisk, og de har innebygde funksjoner som f.eks signInWtihEmailAndPassword. 


