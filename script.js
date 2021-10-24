document.body.addEventListener('click', event => {event.preventDefault();})

let tab = ["programmeur","quantitative","becode","dictionnaire","javascript","html","css","nodejs","logiciel","électronique","ordinateur","information","informaticien","automatique","bug","hacker","piratage","infographie","technologie","application","télécommunication","outil","périphérique","bit","bureautique","fichier","internet","algorithme","interface","multimédia","système","numérique","télématique","hardware","IBM","code","imprimante","réseau","cybernétique","document","consultant","geek","ingénierie","ingénieur","traitement","bogue","calcul","langage","support","binaire","exploitation","analyste","utilisateur","données","technique","microprocesseur","robotique","supervision","clavier","software","disquette","enseignement","Ethernet","sécurité","bull","équipement","faille","Microsoft","modélisation","Apple","cloud","domaine","génie","info","microordinateur","transistor","Windows","automate","CNIL","intelligence","octet","processeur","programme","virus","applicatif","communication","composant","configuration","exploitation","SSII","tic","web","compilateur","disponibilité","intelligenceartificielle","microinformatique","parefeu","portable","prestataire","accès","codage","informatiser","mécatronique","pirate","progiciel","automatisation","conception","datagramme","fonctionnement","gestion","hacking","infrastructure","machine","maintenance","programmer","protocole","téléinformatique","télétraitement","version","algorithmique","ASCII","assembleur","automatisme",];

let start_button = document.getElementById("button-start"); 
let restart_button = document.getElementById("button-restart");
let initialize = 0;

start_button.addEventListener('click', event => {
    if (initialize == 0) {
        initialize++;
        initializehangman();
    }
});
restart_button.addEventListener('click', event => {
    initializehangman();
});

let word_tofind;

function initializehangman () {
    let random = Math.floor(Math.random() * (tab.length - 1) + 1);
    word_tofind = tab[random - 1]; 
    errors = 0;
    status = 1;
    good_answer = 0;

    document.getElementById('alert').style.display = "none";
    for (let index = 1; index <= 6; index++) {
        document.getElementById("svg" + index).style.display = "none";    
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('button-red');
        elements[i].classList.remove('button-green');
    }
    document.getElementById("traits").innerHTML = "";
    for (let index = 0; index < word_tofind.length; index++) {
        document.getElementById('traits').appendChild(document.createElement('h3'));
    } 
}

var elements = document.getElementsByClassName("button-letter");

let errors = 0;
let good_answer = 0;
let status = 0;

var myFunction = function() {
    var attribute = this.getAttribute("id");
    if (!(this.classList.contains('button-red') || this.classList.contains('button-green'))) {
        if (status === 1) {
            if (check_letter(attribute) === 0) {
                this.classList.add("button-red");
                errors++;
                if (errors <= 6) {
                    document.getElementById("svg" + errors).style.display = "flex";   
                }
                if (errors >= 6) {
                    document.getElementById('alert').style.display = "flex";
                    document.getElementById('text').innerHTML = "Tu as perdu!";
                    status = 0;
                }      
            }
            else { 
                this.classList.add('button-green');
                for (let index = 0; index < word_tofind.length; index++) {
                    if (word_tofind[index] === attribute) {
                        document.getElementsByTagName('h3')[index].innerHTML = attribute;
                        good_answer++;
                    }  
                }
                if (word_tofind.length === good_answer) {
                    document.getElementById('alert').style.display = "flex";
                    document.getElementById('text').innerHTML = "Tu as gagné!";
                    status = 0;
                }
            }
        }
    }
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
function check_letter(attribute) {
    for (let index = 0; index < word_tofind.length; index++) {
        if (word_tofind[index] === attribute) {
            return(1);
        }    
    }
    return(0);
}
