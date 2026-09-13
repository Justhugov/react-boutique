export default class CheckCard {
    constructor(card) {
        this.num = card.num;
        this.name = card.name;
        this.expiration = card.expiration;
        this.cvv = card.cvv;
        this.errors = [];
    }

    emptyName() {
        if (this.name == "") {
            this.errors.push({ id: 1, text: "Veuillez renseigner un nom" })
        }
    }

    incompleteNum() {
        if (this.num.length == 19) {
            this.isACorrectNumber();
        }
        else {
            this.errors.push({ id: 2, text: "La numéro de carte est imcomplet" })
        }
    }

    isACorrectNumber() {
        let somme = 0;
        this.num.split(" ")
            .forEach((bloc) => {
                bloc.split("")
                    .forEach((nb, index) => (index % 2) == 0 ?
                        (nb * 2).toString().split("").forEach(n => somme += Number.parseInt(n))
                        :
                        somme += Number.parseInt(nb)
                    )
            });
        if (somme % 10 != 0){
            this.errors.push({ id: 5, text: "Le numéro de carte est incorrect car il ne passe pas le code détecteur d'erreur vu en CDC" })
        }
    }


    incompleteExpiration() {
        if (this.expiration.length == 5) {
            this.isExpirate();
        }
        else{
            this.errors.push({ id: 3, text: "La date d'expiration est incomplète" })
        }
    }

    isExpirate(){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() ;
        const currentMonth = currentDate.getMonth();
        const month = Number.parseInt(this.expiration.split("/")[0]) -1;
        const year = Number.parseInt(this.expiration.split("/")[1]) + 2000;
        if (year <currentYear || (year == currentYear && month < currentMonth) ){
            this.errors.push({ id: 6, text: "La carte est expirée" })
        }
    }


    incompleteCvv() {
        if (this.cvv.length != 3) {
            this.errors.push({ id: 4, text: "Le cryptogramme de sécurité doit contenir 3 chiffres" })
        }
    }

    checkAll() {
        this.emptyName();
        this.incompleteNum();
        this.incompleteExpiration();
        this.incompleteCvv();
    }

    get allError() {
        this.checkAll();
        return this.errors
    }

}