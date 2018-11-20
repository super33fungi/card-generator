const template = document.getElementById("card-body").innerHTML;
const compiled = Handlebars.compile(template);

const demo = {
        "title" : "Forest Wildflower",
        "image" : "./carnivorous-plant.png",
        "type" : "Creature",
        "text" : "Vulnerable to Frost"
};


function generate(input){
    let cardlist = JSON.parse(input.value);
    let cards = [];
    
    cardlist.forEach(card => {
        if(card.hasOwnProperty("rarity")){
            switch(card.rarity){
                case "Common":
                    card.border = "black";
                    break;
                case "Uncommon":
                    card.border = "darkgrey";
                    break;
                case "Rare":
                    card.border = "goldenrod";
                    break;
                default:
                    card.border = "black";
            };
        }
        if(card.hasOwnProperty("count")){
            for(let y = 0; y < card.count; y++){
                cards.push(card);
            }
        }
        else{
            cards.push(card);
        }
    });
    let context = {
        cards : cards
    };
    console.log("cards", cards);
    document.getElementById("cards").innerHTML = compiled(context);
};

