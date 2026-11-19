/* Strings used only by privacy.html. Loaded before script.js, which merges
   window.pageTranslations into its own dictionary. */

window.pageTranslations = {
  en: {
    metaTitle: "Privacy policy — The Sweetener Guide",
    metaDescription: "What The Sweetener Guide does and does not collect, in plain language.",
    backToSite: "Back to the front page",
    legalTitle: "Privacy policy",
    legalUpdated: "Last updated 19 November 2026",
    legalSummary:
      "The short version: the app reads the ingredient list on your phone, and we never learn what you scanned. If you say yes to the extra check of the ingredient list, the ingredient list — the photo and the text the app read — is sent to an AI service that reads it again, and the app sends anonymous statistics about how the scan went. Without your yes, nothing about your scans leaves your phone unless you send us feedback yourself. The detail is below.",
    s1Title: "Who is responsible",
    s1Body:
      "The Sweetener Guide is provided by GF Consulting ApS, Lykkesholms Allé 11, 1902 Frederiksberg C, Denmark. We are the data controller for the limited information described in this policy. You can reach us at hello@gfconsulting.dk.",
    s2Title: "What happens on your phone",
    s2Body:
      "When you point the camera at an ingredients list, the text is recognised by your own phone, using the text recognition built into iOS and Android. The image is handled on the device. If you have turned on the extra check of the ingredient list, the ingredient list is also sent to an AI service, as described below. Otherwise the image is not uploaded, not stored by us, and not sent anywhere — unless you choose to send it to us as feedback.",
    s2Body2:
      "The list of sweeteners and sugars the app looks for is built into the app, so looking something up does not require a network request or an internet connection. We keep no history of your scans that could be linked to you.",
    s3Title: "What the app sends",
    s3aTitle: "Updates to the sweetener list",
    s3aBody:
      "The app checks whether a newer version of its list of sweeteners and sugars is available. The list is a single file hosted on GitHub Pages, and we receive no logs of these requests at all.",
    s3aBody2:
      "The request carries no identifier: no account, no device ID, no advertising ID. As the host, GitHub handles the request technically and can see the IP address it came from and the time it arrived, under its own privacy statement. We never see any of it, and there is nothing in the request that says anything about you or what you scanned.",
    s3dTitle: "Extra check of the ingredient list (only with your yes)",
    s3dBody:
      "After your first scan, the app asks whether you would like an extra check of the ingredient list. If you say yes, after each scan the photo of the ingredient list and the text the app read from it are sent to TypeSafe (typesafe.ai) in the USA, an AI service that reads the list again and answers which sweeteners and sugars it names. The answer is used only to find what the app would otherwise have missed. Your name, email address, location and anything else about you are not sent, and the photo is used only to read the label. TypeSafe has undertaken in its agreement with us not to use what it receives to train its models.",
    s3dBody2:
      "The ingredient list goes through our own server at Cloudflare, which checks that the request comes from a genuine copy of the app (using Apple's App Attest) and passes it on. Our server keeps neither the photo nor the text. You can turn the extra check off at any time in Settings → “Extra check of the ingredient list”. Nothing more is sent, and the app works as before.",
    s3eTitle: "Anonymous statistics (only with your yes)",
    s3eBody:
      "With the same yes, the app sends a short, anonymous message about each scan: whether it ended in a result, how long it took, which result it was, whether the extra check found anything, which phone model, app version and language were used, and whether you have a subscription. The message is stored without text, photo, IP address or identifier, and its time is rounded to the hour. We use the statistics to see whether the scanner works well enough, and on which phones. If you say no, it is not sent.",
    s3cTitle: "If you send us feedback",
    s3cBody:
      "The app has a Feedback button for telling us that a scan went wrong. The app never sends a report by itself. Pressing the button opens a draft email in your own mail app, addressed to hello@gfconsulting.dk. You can read the whole draft, change it or delete it, and nothing reaches us unless you press send.",
    s3cBody2:
      "A report contains what you write, the photo of the label, the text the app read from it, the result it reached, the app version, the version of the sweetener list, your phone model and its system version, the app's language, and technical details of how the scan went. Like any email, it also carries your email address and whatever name your mail app sends with it.",
    s3bTitle: "App store statistics",
    s3bBody:
      "Apple and Google give us aggregated statistics about installations and use of the app — for example how many people opened it in a given week. These are sums across everyone, carry no identifier, and cannot be traced back to a person or a phone. This is standard for every app on their stores and we cannot switch it off.",
    s4Title: "What we never collect",
    s4Item1:
      "Your name, email address, or phone number. The app has no account and no sign-up. If you email us, we have what the email contains.",
    s4Item2:
      "Photos, or the text read from them — unless you have turned on the extra check (then they are sent to the AI service, but not kept by us) or send them to us yourself as feedback.",
    s4Item3: "A history of what you have scanned.",
    s4Item4: "Your location.",
    s4Item5: "Your contacts, calendar, or data from Apple Health or Google Fit.",
    s4Item6:
      "Advertising identifiers. There are no adverts and no third-party advertising trackers in the app.",
    s4Body:
      "We do not sell data and we do not share it for marketing. The app contains no adverts, no tracking, no crash reporting and no third-party analytics tools. The only statistics the app sends are the anonymous statistics above, and only with your yes.",
    s5Title: "Our legal basis",
    s5Body:
      "The extra check of the ingredient list and the anonymous statistics rest on your consent (Article 6(1)(a) of the GDPR), which you give when the app asks and can withdraw at any time in Settings. When the app requests the sweetener list, our host handles that request in order to deliver the file, which rests on our legitimate interest in providing the app's content (Article 6(1)(f)). When you send us feedback, we process it to look into the problem and improve the app, which rests on the same legitimate interest.",
    s6Title: "Who else is involved",
    s6Body:
      "GitHub, Inc. hosts the sweetener list file on GitHub Pages. Apple and Google distribute the app and provide the aggregated store statistics described above. With your yes to the extra check, three more are involved: TypeSafe, which reads the ingredient list; Cloudflare, Inc., which runs our server and stores the anonymous statistics; and Apple, whose App Attest confirms that a request comes from the app. Feedback arrives in our mailbox, which is hosted by Simply.com in Denmark.",
    s6bTitle: "Transfers outside the EU",
    s6bBody:
      "GitHub is a US company, so the technical details of a request for the sweetener list — an IP address and the time it arrived — may be handled outside the EU and EEA, under contractual safeguards based on the European Commission's standard contractual clauses. Cloudflare is also a US company; our server and its database are at Cloudflare in the EU, but requests may pass through Cloudflare's network outside the EU, under Cloudflare's data processing terms with the standard contractual clauses. With the extra check, the ingredient list is sent to TypeSafe in the USA under TypeSafe's data processing agreement with us, which includes the European Commission's standard contractual clauses. Apple and Google operate internationally under their own terms. You can get a copy of the standard contractual clauses by writing to hello@gfconsulting.dk.",
    s7Title: "How long anything is kept",
    s7Body:
      "Our server never keeps the photo or the text of the ingredient list. To keep strangers out, it keeps a random key ID for each installation of the app, until it has gone unused for 90 days, and how many scans it made per day, for two days. When an installation first registers, a hashed (unrecognisable) form of its IP address is kept for one hour to limit abuse. The anonymous statistics are kept for 90 days and then summed into weekly figures without individual scans. TypeSafe deletes the photo and the text as soon as it has answered. We hold no logs of requests for the sweetener list, and the aggregated statistics from Apple and Google sit in their consoles under their own rules.",
    s7Body2:
      "Feedback you send is kept in our mailbox for as long as we need it to look into what it reports, and deleted when you ask us to. The photo and the text of the label may be kept longer as test material for the app, without your name or email address.",
    s8Title: "Your rights",
    s8Body:
      "You have the right to ask for access to, correction of, or deletion of personal data we hold about you, and to object to how we process it.",
    s8Body2:
      "You can withdraw your consent to the extra check and the statistics at any time in Settings. The anonymous statistics cannot be linked to you, not even by us, so we cannot find or delete your scans in them; the key ID cannot be linked to a person, and it deletes itself after 90 days unused. Feedback can be found by the email address it came from, so if you have sent any, we can show it to you or delete it. Write to hello@gfconsulting.dk. If you are unhappy with how we handle it, you can complain to Datatilsynet, the Danish Data Protection Agency, at datatilsynet.dk.",
    s9Title: "Children",
    s9Body:
      "The app is not aimed at children under 13, and we do not knowingly collect information from them.",
    s10Title: "Changes to this policy",
    s10Body:
      "If this policy changes, the date at the top will be updated. Any material change will be shown in the app before it takes effect.",
    s11Title: "Contact",
    s11Body:
      "Questions about this policy: hello@gfconsulting.dk. GF Consulting ApS, Lykkesholms Allé 11, 1902 Frederiksberg C, Denmark.",
  },

  da: {
    metaTitle: "Privatlivspolitik — Sødeguiden",
    metaDescription: "Hvad Sødeguiden indsamler og ikke indsamler, i et almindeligt sprog.",
    backToSite: "Tilbage til forsiden",
    legalTitle: "Privatlivspolitik",
    legalUpdated: "Senest opdateret 19. november 2026",
    legalSummary:
      "Kort fortalt: Appen læser ingredienslisten på din telefon, og vi får ikke at vide, hvad du har scannet. Siger du ja til ekstra kontrol af ingredienslisten, sendes ingredienslisten — billedet og den tekst, appen har læst — til en AI-tjeneste, der læser den en gang til, og appen sender anonym statistik om, hvordan scanningen gik. Uden dit ja forlader intet om dine scanninger din telefon, medmindre du selv sender os feedback. Detaljerne står nedenfor.",
    s1Title: "Hvem er ansvarlig",
    s1Body:
      "Sødeguiden udbydes af GF Consulting ApS, Lykkesholms Allé 11, 1902 Frederiksberg C, Danmark. Vi er dataansvarlige for de få oplysninger, der er beskrevet i denne politik. Du kan skrive til os på hello@gfconsulting.dk.",
    s2Title: "Hvad der sker på din telefon",
    s2Body:
      "Når du peger kameraet mod en ingrediensliste, bliver teksten genkendt af din egen telefon med den tekstgenkendelse, der er indbygget i iOS og Android. Billedet behandles på selve enheden. Har du slået ekstra kontrol af ingredienslisten til, sendes ingredienslisten desuden til en AI-tjeneste, som beskrevet nedenfor. Ellers bliver billedet ikke uploadet, ikke gemt hos os og ikke sendt nogen steder hen — medmindre du vælger at sende det til os som feedback.",
    s2Body2:
      "Listen over de sødestoffer og sukkerarter, appen leder efter, ligger i appen, så et opslag kræver hverken en netværksforespørgsel eller en internetforbindelse. Vi gemmer ingen historik over dine scanninger, som kan knyttes til dig.",
    s3Title: "Hvad appen sender",
    s3aTitle: "Opdateringer af sødestoflisten",
    s3aBody:
      "Appen tjekker, om der findes en nyere udgave af dens liste over sødestoffer og sukkerarter. Listen er en enkelt fil, der ligger på GitHub Pages, og vi modtager slet ingen logfiler over disse forespørgsler.",
    s3aBody2:
      "Forespørgslen indeholder ingen identifikator: ingen konto, intet enheds-id, intet annonce-id. Som vært håndterer GitHub forespørgslen teknisk og kan se, hvilken IP-adresse den kom fra, og hvornår den kom, efter deres egen privatlivspolitik. Vi ser det aldrig, og der er intet i forespørgslen, der siger noget om dig eller om, hvad du har scannet.",
    s3dTitle: "Ekstra kontrol af ingredienslisten (kun med dit ja)",
    s3dBody:
      "Efter din første scanning spørger appen, om du vil have ekstra kontrol af ingredienslisten. Siger du ja, sendes billedet af ingredienslisten og den tekst, appen har læst fra det, efter hver scanning til TypeSafe (typesafe.ai) i USA, en AI-tjeneste, der læser listen en gang til og svarer, hvilke sødestoffer og sukkerarter den nævner. Svaret bruges kun til at finde det, appen ellers ville have overset. Der sendes ikke dit navn, din e-mailadresse, din placering eller andet om dig, og billedet bruges kun til at læse etiketten. TypeSafe har i sin aftale med os forpligtet sig til ikke at bruge det, den modtager, til at træne sine modeller.",
    s3dBody2:
      "Ingredienslisten sendes gennem vores egen server hos Cloudflare, som tjekker, at forespørgslen kommer fra en ægte udgave af appen (med Apples App Attest), og sender den videre. Vores server gemmer hverken billedet eller teksten. Du kan slå ekstra kontrol fra når som helst under Indstillinger → »Ekstra kontrol af ingredienslisten«. Så sendes der intet mere, og appen virker som før.",
    s3eTitle: "Anonym statistik (kun med dit ja)",
    s3eBody:
      "Med det samme ja sender appen en kort, anonym besked om hver scanning: om den endte med et resultat, hvor lang tid det tog, hvilket resultat det blev, om den ekstra kontrol fandt noget, og hvilken telefonmodel, appversion og sprogindstilling der blev brugt, og om du har et abonnement. Beskeden gemmes uden tekst, billede, IP-adresse eller id, og tidspunktet rundes af til hele timer. Vi bruger statistikken til at se, om scanneren virker godt nok, på hvilke telefoner. Siger du nej, sendes den ikke.",
    s3cTitle: "Hvis du sender os feedback",
    s3cBody:
      "Appen har en Feedback-knap, så du kan fortælle os, at en scanning gik galt. Appen sender aldrig en rapport af sig selv. Knappen åbner en kladde til en e-mail i din egen mailapp, adresseret til hello@gfconsulting.dk. Du kan læse hele kladden, rette i den eller slette den, og intet når frem til os, medmindre du trykker send.",
    s3cBody2:
      "En rapport indeholder det, du skriver, billedet af etiketten, den tekst appen har aflæst, det resultat den kom frem til, appens version, sødestoflistens version, din telefonmodel og dens systemversion, appens sprog og tekniske detaljer om, hvordan scanningen forløb. Som enhver e-mail indeholder den også din e-mailadresse og det navn, din mailapp sender med.",
    s3bTitle: "Statistik fra app-butikkerne",
    s3bBody:
      "Apple og Google giver os sammenlagt statistik over installationer og brug af appen — for eksempel hvor mange der har åbnet den i en given uge. Det er summer på tværs af alle, uden nogen identifikator, og de kan ikke føres tilbage til en person eller en telefon. Det gælder alle apps i deres butikker, og vi kan ikke slå det fra.",
    s4Title: "Hvad vi aldrig indsamler",
    s4Item1:
      "Dit navn, din e-mailadresse eller dit telefonnummer. Appen har hverken konto eller oprettelse. Skriver du til os, har vi det, din e-mail indeholder.",
    s4Item2:
      "Billeder eller den tekst, der er aflæst fra dem — medmindre du har slået ekstra kontrol til (så sendes de til AI-tjenesten, men gemmes ikke hos os) eller selv sender dem til os som feedback.",
    s4Item3: "En historik over, hvad du har scannet.",
    s4Item4: "Din placering.",
    s4Item5: "Dine kontakter, din kalender eller data fra Apple Health eller Google Fit.",
    s4Item6: "Annonce-id'er. Der er hverken reklamer eller sporing fra annoncenetværk i appen.",
    s4Body:
      "Vi sælger ikke data, og vi deler dem ikke til markedsføring. Appen indeholder hverken reklamer, sporing, fejlrapportering eller tredjeparts analyseværktøjer. Den eneste statistik, appen sender, er den anonyme statistik ovenfor, og kun med dit ja.",
    s5Title: "Vores behandlingsgrundlag",
    s5Body:
      "Ekstra kontrol af ingredienslisten og den anonyme statistik bygger på dit samtykke (databeskyttelsesforordningens artikel 6, stk. 1, litra a), som du giver, når appen spørger, og kan trække tilbage når som helst under Indstillinger. Når appen henter sødestoflisten, håndterer vores vært forespørgslen for at levere filen, og det hviler på vores legitime interesse i at stille appens indhold til rådighed (artikel 6, stk. 1, litra f). Når du sender os feedback, behandler vi den for at undersøge problemet og forbedre appen, og det hviler på den samme legitime interesse.",
    s6Title: "Hvem andre er involveret",
    s6Body:
      "GitHub, Inc. hoster filen med sødestoflisten på GitHub Pages. Apple og Google distribuerer appen og leverer den sammenlagte butiksstatistik, der er beskrevet ovenfor. Med dit ja til ekstra kontrol er tre mere involveret: TypeSafe, som læser ingredienslisten; Cloudflare, Inc., som driver vores server og opbevarer den anonyme statistik; og Apple, hvis App Attest bekræfter, at forespørgslen kommer fra appen. Feedback lander i vores postkasse, som hostes af Simply.com i Danmark.",
    s6bTitle: "Overførsler uden for EU",
    s6bBody:
      "GitHub er en amerikansk virksomhed, så de tekniske detaljer ved en forespørgsel efter sødestoflisten — en IP-adresse og et tidspunkt — kan blive håndteret uden for EU og EØS med kontraktlige garantier på grundlag af Europa-Kommissionens standardkontraktbestemmelser. Cloudflare er også en amerikansk virksomhed; vores server og dens database ligger hos Cloudflare i EU, men forespørgsler kan passere Cloudflares netværk uden for EU, under Cloudflares databehandlervilkår med standardkontraktbestemmelserne. Med ekstra kontrol sendes ingredienslisten til TypeSafe i USA under TypeSafes databehandleraftale med os, som indeholder Europa-Kommissionens standardkontraktbestemmelser. Apple og Google opererer internationalt efter deres egne vilkår. Du kan få en kopi af standardkontraktbestemmelserne ved at skrive til hello@gfconsulting.dk.",
    s7Title: "Hvor længe noget gemmes",
    s7Body:
      "Vores server gemmer aldrig billedet eller teksten fra ingredienslisten. For at holde uvedkommende ude gemmer den et tilfældigt nøgle-id for hver installation af appen, til det ikke har været brugt i 90 dage, og hvor mange scanninger det har lavet pr. dag, i to dage. Når en installation melder sig første gang, gemmes en hashet (uigenkendelig) udgave af IP-adressen i en time for at begrænse misbrug. Den anonyme statistik gemmes i 90 dage og lægges derefter sammen til ugetal uden enkeltscanninger. TypeSafe sletter billedet og teksten, så snart den har svaret. Vi har ingen logfiler over forespørgsler efter sødestoflisten, og den sammenlagte statistik fra Apple og Google ligger i deres konsoller efter deres egne regler.",
    s7Body2:
      "Feedback, du sender, gemmes i vores postkasse, så længe vi har brug for den til at undersøge det, den handler om, og slettes, når du beder os om det. Billedet og teksten fra etiketten kan blive gemt længere som testmateriale til appen, uden dit navn eller din e-mailadresse.",
    s8Title: "Dine rettigheder",
    s8Body:
      "Du har ret til at bede om indsigt i, rettelse af eller sletning af personoplysninger, vi har om dig, og til at gøre indsigelse mod vores behandling.",
    s8Body2:
      "Du kan trække dit samtykke til ekstra kontrol og statistik tilbage når som helst under Indstillinger. Den anonyme statistik kan ikke knyttes til dig, heller ikke af os, så vi kan ikke finde eller slette netop dine scanninger i den; nøgle-id'et kan ikke knyttes til en person, og det slettes af sig selv efter 90 dage uden brug. Feedback kan findes ud fra den e-mailadresse, den kom fra, så har du sendt noget, kan vi vise dig det eller slette det. Skriv til hello@gfconsulting.dk. Er du utilfreds med vores håndtering, kan du klage til Datatilsynet på datatilsynet.dk.",
    s9Title: "Børn",
    s9Body:
      "Appen henvender sig ikke til børn under 13 år, og vi indsamler ikke bevidst oplysninger fra dem.",
    s10Title: "Ændringer i denne politik",
    s10Body:
      "Ændres denne politik, bliver datoen øverst opdateret. Væsentlige ændringer bliver vist i appen, før de træder i kraft.",
    s11Title: "Kontakt",
    s11Body:
      "Spørgsmål til denne politik: hello@gfconsulting.dk. GF Consulting ApS, Lykkesholms Allé 11, 1902 Frederiksberg C, Danmark.",
  },
};
