user = "cichoszkasia";
domena = "gmail.com";
tematListu = "?Subject=Z portalu";

malpa = "@";
adres = user+malpa+domena;
ahref = "mailto:"+adres+tematListu;

aEmailTekst = document.createElement("a");
aEmailTekst.href = ahref;
aEmailTekst.id = "mojEmail1";
kotwicaEmailTekst = document.getElementByld("emailTekst");
kotwicaEmailTekst.appendChild
tekstAdres = document.createTextNode(adres);
miejsceNapisuDoAEmailTekst.appendChild(tekstAdres);