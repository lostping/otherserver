// get the target language from browser (i.e. DE-de, EN-us)
var lng_code = navigator.language /* Mozilla */ || navigator.userLanguage /* IE */;


var i18n = new Array();
i18n["default"]    =   "Server not in hostlist";
i18n["en"]    =   "Server not in hostlist";
i18n["de"]      =   "Server nicht in Hostliste";
i18n["de-DE"]      =   "Server nicht in Hostliste";
i18n["pt-PT"]      =   "Servidor nã está na lista de hosts";
i18n["nl-NL"]      =   "Server is niet in de lijst met hosts";
i18n["fr-FR"]      =   "Serveur n'est pas dans la liste d'hôtes";