const serviceSection = document.getElementById("service");

// HEADING HERE 

const heading = document.createElement("h1");
serviceSection.appendChild(heading);
heading.innerText = "Service";
heading.style.textAlign = "center";
heading.style.color = "red";

// HEADING CLOSE

const serviceContener = document.createElement("div");
serviceSection.appendChild(serviceContener);

const serviceBox = document.createElement("div");
serviceContener.appendChild(serviceBox);
serviceBox.style.display = "flex";
serviceBox.style.justifyContent = "center";
serviceBox.style.alignItems = "center";
serviceBox.style.gap = "30px";

const serviceCard = document.createElement("div");
serviceBox.appendChild(serviceCard);
serviceCard.style.boxShadow = "0px 0px 10px gray";
serviceCard.style.height = "200px";
serviceCard.style.width = "300px";
serviceCard.style.padding = "20px";
serviceCard.style.borderRadius = "10px";

const cardHead = document.createElement("h2");
serviceCard.appendChild(cardHead);
cardHead.innerText = "This Is Box One";

const cardParagraph = document.createElement("p");
serviceCard.appendChild(cardParagraph);
cardParagraph.innerText = "This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. ";

const serviceCard2 = document.createElement("div");
serviceBox.appendChild(serviceCard2);
serviceCard2.style.boxShadow = "0px 0px 10px gray";
serviceCard2.style.height = "200px";
serviceCard2.style.width = "300px";
serviceCard2.style.padding = "20px";
serviceCard2.style.borderRadius = "10px";

const cardHead2 = document.createElement("h2");
serviceCard2.appendChild(cardHead2);
cardHead2.innerText = "This Is Box Two";

const cardParagraph2 = document.createElement("p");
serviceCard2.appendChild(cardParagraph2);
cardParagraph2.innerText = "This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. ";

const serviceCard3 = document.createElement("div");
serviceBox.appendChild(serviceCard3);
serviceCard3.style.boxShadow = "0px 0px 10px gray";
serviceCard3.style.height = "200px";
serviceCard3.style.width = "300px";
serviceCard3.style.padding = "20px";
serviceCard3.style.borderRadius = "10px";

const cardHead3 = document.createElement("h2");
serviceCard3.appendChild(cardHead3);
cardHead3.innerText = "This Is Box Three";

const cardParagraph3 = document.createElement("p");
serviceCard3.appendChild(cardParagraph3);
cardParagraph3.innerText = "This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. This Is Service Section , I'm Shohag, I'm from Kushtia .I'm 22 years old. ";