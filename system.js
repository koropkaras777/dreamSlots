let categories = [ "Popular Slots", "Pragmatic Play", "PLAY'n GO", "YGGDRASIL", "Endorphina", "Push Gaming", "Relax Gaming", "HACKSAW GAMING", "NOLIMIT CITY"];

let slots = [
    { name: "Sweet Bonanza", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/sweet-bonanza-slot/", image: "images/ppsb.jpg", popular: true },
    { name: "Sweet Bonanza Xmas", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/sweet-bonanza-xmas-slot/", image: "images/ppsbx.webp", popular: false },
    { name: "Starlight Princess", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/starlight-princess/", image: "images/ppsp.jpg", popular: false },
    { name: "Starlight Christmas", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/starlight-christmas/", image: "images/ppspx.webp", popular: false },
    { name: "Gates of Olympus", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/gates-of-olympus/", image: "images/ppgoo.jpg", popular: true },
    { name: "Hot Fiesta", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/hot-fiesta/", image: "images/pphf.webp", popular: true },
    { name: "The Dog House", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/the-dog-house-slot/", image: "images/ppdg.jpg", popular: true },
    { name: "The Dog House Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/the-dog-house-megaways-slot/", image: "images/ppdgm.jpg", popular: false },
    { name: "Wild West Gold", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/wild-west-gold-slot/", image: "images/ppwwg.webp", popular: false },
    { name: "Wild West Gold Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/wild-west-gold-megaways/", image: "images/ppwwgm.webp", popular: false },
    { name: "Sugar Rush", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/sugar-rush/", image: "images/ppsr.webp", popular: false },
    { name: "Fruit Party", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/fruit-party-slot/", image: "images/ppfp.jpg", popular: false },
    { name: "Fruit Party 2", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/fruit-party-2/", image: "images/ppfp2.png", popular: false },
    { name: "Big Bass Bonanza", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/big-bass-bonanza/", image: "images/ppbbb.webp", popular: true },
    { name: "Big Bass Bonanza Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/big-bass-bonanza-megaways/", image: "images/ppbbbm.webp", popular: false },
    { name: "Big Bass Splash", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/big-bass-splash/", image: "images/ppbbs.jpg", popular: true },
    { name: "Christmas Big Bass Bonanza", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/christmas-big-bass-bonanza/", image: "images/ppcbbb.webp", popular: false },
    { name: "Big Bass - Keeping it Reel", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/big-bass-keeping-it-reel/", image: "images/ppbbbkir.webp", popular: false },
    { name: "Bigger Bass Bonanza", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/bigger-bass-bonanza/", image: "images/ppbibb.jpg", popular: true },
    { name: "Bigger Bass Blizzard", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/bigger-bass-blizzard-christmas-catch/", image: "images/ppbibbcc.jpg", popular: false },
    { name: "Zombie Carnival", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/zombie-carnival/", image: "images/ppzc.jpg", popular: false },
    { name: "Cleocatra", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/cleocatra/", image: "images/ppcc.webp", popular: false },
    { name: "Juicy Fruits", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/juicy-fruits/", image: "images/ppjf.webp", popular: false },
    { name: "Floating Dragon Hold and Spin", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/floating-dragon-hold-and-spin/", image: "images/ppfdhs.webp", popular: false },
    { name: "Floating Dragon Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/floating-dragon-megaways/", image: "images/ppfdmhs.jpg", popular: false },
    { name: "Pinup Girls", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/pinup-girls/", image: "images/pppg.jpg", popular: false },
    { name: "Snakes & Ladders - Snake Eyes", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/snakes-ladders-snake-eyes/", image: "images/ppslse.webp", popular: true },
    { name: "Santa's Great Gifts", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/santas-great-gifts/", image: "images/ppsgg.jpg", popular: false },
    { name: "Release the Kraken", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/release-the-kraken-slot/", image: "images/pprtk.webp", popular: false },
    { name: "Release the Kraken 2", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/release-the-kraken-2/", image: "images/pprtk2.webp", popular: false },
    { name: "John Hunter and the Book of Tut Respin", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/john-hunter-and-the-book-of-tut-respin/", image: "images/ppjhbotr.jpg", popular: false },
    { name: "Pirate Golden Age", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/pirate-golden-age/", image: "images/pppga.webp", popular: false },
    { name: "Book of Golden Sands", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/book-of-golden-sands/", image: "images/ppbogs.webp", popular: false },
    { name: "Wild Hop&Drop", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/wild-hopdrop/", image: "images/ppwhd.webp", popular: false },
    { name: "PIZZA! PIZZA? PIZZA!", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/pizza-pizza-pizza/", image: "images/ppppp.webp", popular: false },
    { name: "Fortune of Giza", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/fortune-of-giza/", image: "images/ppfog.jpg", popular: false },
    { name: "5 Lions", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/5-lions-slot/", image: "images/pp5l.webp", popular: false },
    { name: "5 Lions Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/5-lions-megaways/", image: "images/pp5lm.webp", popular: false },
    { name: "Buffalo King", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/buffalo-king-slot/", image: "images/ppbk.webp", popular: false },
    { name: "Buffalo King Megaways", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/buffalo-king-megaways/", image: "images/ppbkm.webp", popular: false },
    { name: "Wild Beach Party", provider: "Pragmatic Play", link: "https://www.pragmaticplay.com/en/games/wild-beach-party/", image: "images/ppwbp.webp", popular: false },
    
    { name: "KISS Reels of Rock", provider: "PLAY'n GO", link: "https://www.playngo.com/games/kiss", image: "images/pgk.webp", popular: true },
    { name: "Clash of Camelot", provider: "PLAY'n GO", link: "https://www.playngo.com/games/clash-of-camelot", image: "images/pgcoc.webp", popular: true },
    { name: "The Green Knight", provider: "PLAY'n GO", link: "https://www.playngo.com/games/the-green-knight", image: "images/pgthk.webp", popular: false },
    { name: "Helloween", provider: "PLAY'n GO", link: "https://www.playngo.com/games/helloween", image: "images/pgh.webp", popular: false },
    { name: "Rich Wilde and the Book of Dead", provider: "PLAY'n GO", link: "https://www.playngo.com/games/book-of-dead", image: "images/pgrwbod.webp", popular: true },
    { name: "Mega Don", provider: "PLAY'n GO", link: "https://www.playngo.com/games/mega-don", image: "images/pgmd.jpg", popular: false },
    { name: "Wild Trigger", provider: "PLAY'n GO", link: "https://www.playngo.com/games/wild-trigger", image: "images/pgwt.webp", popular: true },
    { name: "Charlie Chance in Hell to Pay", provider: "PLAY'n GO", link: "https://www.playngo.com/games/charlie-chance-in-hell-to-pay", image: "images/pgcchtp.webp", popular: false },
    { name: "HammerFall", provider: "PLAY'n GO", link: "https://www.playngo.com/games/hammerfall", image: "images/pghf.webp", popular: false },
    { name: "Rabbit Hole Riches", provider: "PLAY'n GO", link: "https://www.playngo.com/games/rabbit-hole-riches", image: "images/pgrhr.webp", popular: false },
    { name: "Mission Cash", provider: "PLAY'n GO", link: "https://www.playngo.com/games/mission-cash", image: "images/pgmc.webp", popular: false },
    { name: "Game of Gladiators", provider: "PLAY'n GO", link: "https://www.playngo.com/games/game-of-gladiators", image: "images/pggog.webp", popular: false },

    { name: "Florageddon!", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/florageddon", image: "images/ygf.webp", popular: false },
    { name: "Vikings Go To Valhalla", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/vikings-go-to-valhalla", image: "images/ygvgtv.webp", popular: false },
    { name: "Golden Fish Tank 2", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/golden-fish-tank-2-gigablox", image: "images/yggft2.webp", popular: false },
    { name: "Raptor", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/raptor-doublemax", image: "images/ygr.jpg", popular: false },
    { name: "Gator Gold", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/gator-gold-gigablox", image: "images/yggg.webp", popular: false },
    { name: "Hades", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/hades", image: "images/ygh.webp", popular: false },
    { name: "The One Armed Bandit", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/one-armed-bandit", image: "images/ygoab.webp", popular: true },
    { name: "Champions of Rome", provider: "YGGDRASIL", link: "https://www.yggdrasilgaming.com/games/champions_of_rome", image: "images/ygcor.jpg", popular: true },

    { name: "Rooster Fury", provider: "Endorphina", link: "https://endorphina.com/games/rooster-fury/play", image: "images/erf.webp", popular: true },
    { name: "In Jazz", provider: "Endorphina", link: "https://endorphina.com/games/in-jazz/play", image: "images/eij.webp", popular: true },
    { name: "Minotauros", provider: "Endorphina", link: "https://endorphina.com/games/minotauros/play", image: "images/em.webp", popular: false },
    { name: "Geisha", provider: "Endorphina", link: "https://endorphina.com/games/geisha/play", image: "images/eg.webp", popular: false },
    { name: "Twerk", provider: "Endorphina", link: "https://endorphina.com/games/twerk/play", image: "images/et.webp", popular: false },
    { name: "Cyber Wolf", provider: "Endorphina", link: "https://endorphina.com/games/cyber-wolf/play", image: "images/ecw.webp", popular: false },

    { name: "Fat Santa", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/fat-santa.html", image: "images/pufs.jpg", popular: false },
    { name: "Fire Hopper", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/fire-hopper.html", image: "images/pufh.webp", popular: false },
    { name: "Dinopolis", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/dinopolis.html", image: "images/pud.jpg", popular: true },
    { name: "Razor Shark", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/razor-shark.html", image: "images/purs.jpg", popular: false },
    { name: "Big Bamboo", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/big-bamboo.html", image: "images/pubb.webp", popular: true },
    { name: "Mad Cars", provider: "Push Gaming", link: "https://www.pushgaming.com/games/play/mad-cars.html", image: "images/pumc.webp", popular: false },

    { name: "Great Pigsby Megaways", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/greatpigsbymegaways", image: "images/rgpm.webp", popular: false },
    { name: "Snake Arena Dream Drop", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/snakearenadd", image: "images/rsadd.png", popular: false },
    { name: "TNT Tumble", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/tnttumble", image: "images/rtt.jpg", popular: false },
    { name: "Money Train", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/moneytrain", image: "images/rmt.jpg", popular: false },
    { name: "Money Train 2", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/moneytrain2", image: "images/rmt2.jpg", popular: true },
    { name: "Money Train 3", provider: "Relax Gaming", link: "https://relax-gaming.com/products/casino/moneytrain3", image: "images/rmt3.webp", popular: false },

    { name: "Cubes", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/cubes/", image: "images/hc.webp", popular: false },
    { name: "Cubes 2", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/cubes-2/", image: "images/hc2.webp", popular: false },
    { name: "Chaos Crew", provider: "HACKSAW GAMING", link: "https://www.hacksawgaming.com/games/chaos-crew", image: "images/hcc.jpg", popular: false },
    { name: "Stack 'Em", provider: "HACKSAW GAMING", link: "https://kasinoguru-ua.com/stack-em-slot-hraty-bezkoshtovno", image: "images/hse.webp", popular: false },
    { name: "Wanted Dead or a Wild", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/wanted-dead-or-a-wild/", image: "images/hwdow.webp", popular: true },
    { name: "King Carrot", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/king-carrot/", image: "images/hkc.webp", popular: false },
    { name: "Outlaws Inc", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/outlaws-inc/", image: "images/hoi.jpg", popular: false },
    { name: "Dork Unit", provider: "HACKSAW GAMING", link: "https://www.slotstemple.com/free-slots/dork-unit/", image: "images/hdu.jpg", popular: true },

    { name: "DAS XBOOT", provider: "NOLIMIT CITY", link: "https://www.nolimitcity.com/games/das-xboot/", image: "images/nldx.webp", popular: false },
    { name: "Manhattan Goes Wild", provider: "NOLIMIT CITY", link: "https://www.nolimitcity.com/games/manhattan-goes-wild/", image: "images/nlmw.webp", popular: false },
    { name: "Book of Shadows", provider: "NOLIMIT CITY", link: "https://www.nolimitcity.com/games/book-of-shadows/", image: "images/nlbos.jpg", popular: true },
    { name: "Tombstone R.I.P", provider: "NOLIMIT CITY", link: "https://www.nolimitcity.com/games/tombstone-rip/", image: "images/nltr.webp", popular: false },
];

let middle = document.getElementsByClassName("middle")[0];

let renderMiddle = () => {
    for(let i = 0; i < categories.length; i++) {
        let category = document.createElement("div");
        let categoryTitle = document.createElement("p");
        let categoryBox = document.createElement("div");
    
        category.className = "category";
        categoryTitle.className = "category-title";
        categoryTitle.innerHTML = categories[i];
        categoryBox.className = "category-box";
    
        category.appendChild(categoryTitle);
    
        for(let j = 0; j < slots.length; j++) {
            if(slots[j].popular == true && i == 0) {
                renderSlotCard(j, categoryBox);
            }
    
            if(slots[j].provider == categories[i]) {
                renderSlotCard(j, categoryBox);
            }
        }
    
        category.appendChild(categoryBox);
        middle.appendChild(category);
    }
}

let renderSlotCard = (index, categoryBox) => {
    let slotCard = document.createElement("div");
    let slotFormDiv = document.createElement("div");
    let slotName = document.createElement("p");
    let slotForm = document.createElement("form");
    let slotInput = document.createElement("input");

    slotCard.className = "slot-card";
    slotCard.style.backgroundImage = 'url('+slots[index].image+')';
    slotCard.style.backgroundSize = "cover";
    slotFormDiv.className = "slot-form";
    slotForm.action = slots[index].link;
    slotName.className = "slot-name";
    slotName.title = slots[index].name;
    slotName.innerHTML = slots[index].name;
    slotInput.className = "button-play";
    slotInput.type = "submit";
    slotInput.value = "Play";
    
    slotForm.appendChild(slotInput);
    slotFormDiv.appendChild(slotForm);
    slotCard.appendChild(slotFormDiv);
    slotCard.appendChild(slotName);
    categoryBox.appendChild(slotCard);
}

renderMiddle();