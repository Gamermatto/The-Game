let uPhones = document.querySelector('.uPhones-cost');
let parseduPhones = parseFloat(uPhones.innerHTML);

let gpcText = document.getElementById("gpc-text");
let gpsText = document.getElementById("gps-text");

let uPhonesImgContainer = document.querySelector('.uPhones-img-container');

let gpc = 1;

let gps = 0;

const upgrades = [
  {
    name: 'clicker',
    cost: document.querySelector(".clicker-cost"),
    parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
    increase: document.querySelector(".clicker-increase"),
    parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
    level: document.querySelector(".clicker-level"),
    uPhonesMultiplier: 1.025,
    costMultiplier: 1.12,
  },
  {
    name: 'pickaxe',
    cost: document.querySelector(".pickaxe-cost"),
    parsedCost: parseFloat(document.querySelector(".pickaxe-cost").innerHTML),
    increase: document.querySelector(".pickaxe-increase"),
    parsedIncrease: parseFloat(document.querySelector(".pickaxe-increase").innerHTML),
    level: document.querySelector(".pickaxe-level"),
    uPhonesMultiplier: 1.04,
    costMultiplier: 1.115,
  },
  {
    name: 'miner',
    cost: document.querySelector(".miner-cost"),
    parsedCost: parseFloat(document.querySelector(".miner-cost").innerHTML),
    increase: document.querySelector(".miner-increase"),
    parsedIncrease: parseFloat(document.querySelector(".miner-increase").innerHTML),
    level: document.querySelector(".miner-level"),
    uPhonesMultiplier: 1.035,
    costMultiplier: 1.11,
  },
  {
    name: 'factory',
    cost: document.querySelector(".factory-cost"),
    parsedCost: parseFloat(document.querySelector(".factory-cost").innerHTML),
    increase: document.querySelector(".factory-increase"),
    parsedIncrease: parseFloat(document.querySelector(".factory-increase").innerHTML),
    level: document.querySelector(".factory-level"),
    uPhonesMultiplier: 1.04,
    costMultiplier: 1.10,
  },
];

function incrementuPhones(event) {
  uPhones.innerHTML = Math.round(parseduPhones += gpc);

  const x = event.offsetX;
  const y = event.offsetY;

  const div = document.createElement('div');
  div.innerHTML = `+${Math.round(gpc)}`;
  div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`;
  uPhonesImgContainer.appendChild(div);

  div.classList.add('fade-up');

  timeout(div);

}

const timeout = (div) => {
  setTimeout(() => {
    div.remove();
  }, 800);
}

function buyUpgrade(upgrade) {
  const mu = upgrades.find((u) => {
    if (u.name === upgrade) return u
  })

  if (parseduPhones >= mu.parsedCost) {
    uPhones.innerHTML = Math.round(parseduPhones -= mu.parsedCost);

    mu.level.innerHTML ++;

    mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.uPhonesMultiplier).toFixed(2));
    mu.increase.innerHTML = mu.parsedIncrease;

    mu.parsedCost *= mu.costMultiplier;
    mu.cost.innerHTML = Math.round(mu.parsedCost);

    if (mu.name === 'clicker') {
      gpc += mu.parsedIncrease;
    } else {
      gps += mu.parsedIncrease;
    }
  }
}

setInterval(() => {
  parseduPhones += gps / 10;
  uPhones.innerHTML = Math.round(parseduPhones);
  gpcText.innerHTML = Math.round(gpc);
  gpsText.innerHTML = Math.round(gps);
}, 100);
