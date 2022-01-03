import Arrow from "../assets/img/dc-arrow.jpg";
import Batman from "../assets/img/dc-batman.jpg";
import Black from "../assets/img/dc-black.jpg";
import Blue from "../assets/img/dc-blue.jpg";
import Flash from "../assets/img/dc-flash.jpg";
import Superman from "../assets/img/dc-superman.jpg";
import Green from "../assets/img/dc-green.jpg";
import WW from "../assets/img/dc-wonder.jpg";
import Martian from "../assets/img/dc-martian.jpg";
import Robin from "../assets/img/dc-robin.jpg";

import Captain from "../assets/img/marvel-captain.jpg";
import Cyclops from "../assets/img/marvel-cyclops.jpg";
import Daredevil from "../assets/img/marvel-daredevil.jpg";
import Hawkeye from "../assets/img/marvel-hawkeye.jpg";
import Hulk from "../assets/img/marvel-hulk.jpg";
import Iron from "../assets/img/marvel-iron.jpg";
import Silver from "../assets/img/marvel-silver.jpg";
import Spider from "../assets/img/marvel-spider.jpg";
import Thor from "../assets/img/marvel-thor.jpg";
import Wolverine from "../assets/img/marvel-wolverine.jpg";

export const getImg = (heroId) =>
  ({
    "dc-arrow": Arrow,
    "dc-batman": Batman,
    "dc-black": Black,
    "dc-blue": Blue,
    "dc-flash": Flash,
    "dc-superman": Superman,
    "dc-green": Green,
    "dc-wonder": WW,
    "dc-martian": Martian,
    "dc-robin": Robin,
    "marvel-captain": Captain,
    "marvel-cyclops": Cyclops,
    "marvel-daredevil": Daredevil,
    "marvel-hawkeye": Hawkeye,
    "marvel-hulk": Hulk,
    "marvel-iron": Iron,
    "marvel-silver": Silver,
    "marvel-spider": Spider,
    "marvel-thor": Thor,
    "marvel-wolverine": Wolverine,
  }[heroId ?? "dc-arrow"]);
