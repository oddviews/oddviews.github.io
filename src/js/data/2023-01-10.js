dataSetVersion = "2023-01-10"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "wanna get even more specific?",
    key: "series",
    checked: false,
    sub: [
      { name: "active", key: "active" },
      { name: "boys only",  key: "boy" },
      { name: "girls only", key: "girl" },
      { name: "graduated", key: "graduated"}, 
    ]
  },
  {
    name: "filter by wave?",
    key: "wave",
    checked: false,
    sub: [
      { name: "lazulight", key: "lazulight" },
      { name: "obsydia",  key: "obsydia" },
      { name: "ethyria", key: "ethyria" },
      { name: "luxiem", key: "luxiem"}, 
      { name: "noctyx", key: "noctyx"},
      { name: "iluna", key: "iluna"},
      { name: "xsoleil", key: "xsoleil"},
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "finana ryugu",
    img: "9xRDa20.png",
    opts: {
      series: [ "active", "girl", ],
      wave: ["lazulight"],
    }
  },
  {
    name: "aia amare",
    img: "OzlRyUs.png",
    opts: {
      series: [ "active", "girl", ],
      wave: ["iluna"],
    }
  },
  {
    name: "alban knox",
    img: "dFY7RBx.png",
    opts: {
      series: [ "active", "boy", ],
      wave: ["noctyx"],
    }
  },
  {
    name: "aster arcadia",
    img: "3Q3EgAG.png",
    opts: {
      series: [ "active", "boy", ],
      wave: ["iluna"],
    }
  },
  {
    name: "doppio dropscythe",
    img: "OBFiGEn.png",
    opts: {
      series: [ "active", "boy", ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "elira pendora",
    img: "0ymZURd.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["lazulight"],
    }
  },
  {
    name: "enna alouette",
    img: "Qb0IxcB.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["ethyria"],
    }
  },
  {
    name: "fulgur ovid",
    img: "VWHLVAW.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["noctyx"],
    }
  },
  {
    name: "hex haywire",
    img: "NF4KIMY.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "ike eveland",
    img: "dU1Ln8K.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["luxiem"],
    }
  },
  {
    name: "kotoka torahime",
    img: "hOe28iN.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "kyo kaneko",
    img: "cOvdcMq.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["iluna"],
    }
  },
  {
    name: "luca kaneshiro",
    img: "jjIqsYN.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["luxiem"],
    }
  },
  {
    name: "maria marionette",
    img: "PRAjMrR.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["iluna"],
    }
  },
  {
    name: "meloco kyoran",
    img: "FkuiocI.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "millie parfait",
    img: "vGdVCny.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["ethyria"],
    }
  },
  {
    name: "mysta rias",
    img: "Lbi0bqx.png",
    opts: {
      series: [ "active", "boy"],
      wave: ["luxiem"],
    }
  },
  {
    name: "nina kosaka",
    img: "OL6TkgG.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["ethyria"],
    }
  },
  {
    name: "petra gurin",
    img: "4V9BMmE.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["obsydia"],
    }
  },
  {
    name: "pomu rainpuff",
    img: "fOPOiSa.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["lazulight"],
    }
  },
  {
    name: "reimu endou",
    img: "pZrjAPh.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["ethyria"],
    }
  },
  {
    name: "ren zotto",
    img: "KMIeAmN.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["iluna"],
    }
  },
  {
    name: "rosemi lovelock",
    img: "mdMfEL6.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["obsydia"],
    }
  },
  {
    name: "scarle yonaguni",
    img: "g0DfNWX.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["iluna"],
    }
  },
  {
    name: "selen tatsuki",
    img: "ISDNeoP.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["obsydia"],
    }
  },
  {
    name: "shu yamino",
    img: "zRyGXxb.png",
    opts: {
      series: [ "active", "boy"],
      wave: ["luxiem"],
    }
  },
  {
    name: "sonny brisko",
    img: "p9a48P0.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["noctyx"],
    }
  },
  {
    name: "uki violeta",
    img: "xz0IyNq.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["noctyx"],
    }
  },
  {
    name: "ver vermillion",
    img: "Duooxrg.png",
    opts: {
      series: [ "active", "boy" ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "vox akuma",
    img: "15WR2Bx.png",
    opts: {
      series: [ "active", "boy"],
      wave: ["luxiem"],
    }
  },
  {
    name: "zaion lanza",
    img: "MokF9Ui.png",
    opts: {
      series: [ "active", "girl" ],
      wave: ["xsoleil"],
    }
  },
  {
    name: "yugo asuma",
    img: "yKSCbEc.png",
    opts: {
      series: [ "graduated", "boy" ],
      wave: ["noctyx"],
    }
  },

  
];
