import { LOCATIONS } from "./locations";

import Audi from "../Images/audi-a6.jpg";
import Fiat500 from "../Images/fiat-500.jpg";
import FiatBLK from "../Images/fiat-punto-blk.jpg";
import FiatSLV from "../Images/fiat-punto-slv.jpg";
import Ford from "../Images/ford-mondeo.jpg";
import HondaRED from "../Images/honda-crv-red.jpg";
import HondaSLV from "../Images/honda-crv-slv.jpg";
import Renault from "../Images/renault-captur.jpg";
import SkodaRED from "../Images/skoda-fabia-red.jpg";
import SkodaSLV from "../Images/skoda-fabia-slv.jpg";
import VW from "../Images/vw-passat.jpg";
import { CARGROUPS } from "./carGroups";
/* Schema:
license plate: {License:"e plate", Model,carGroup,Color,fuelType,fuelStatus,Locatoin,Doors,Status,RelStatus,Image}
 */

export let CARS = [
  {
    License: "FC12345",
    Model: "Fiat Punto",
    carGroup: CARGROUPS[0],
    Color: "BLU",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 2,
    Status: "Ready",
    relStatus: "Released",
    Image: FiatSLV,
  },
  {
    License: "FM23456",
    Model: "Fiat Punto",
    carGroup: CARGROUPS[0],
    Color: "BLK",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 2,
    Status: "Ready",
    relStatus: "Released",
    Image: FiatBLK,
  },
  {
    License: "HM23456",
    Model: "Skoda Fabia",
    carGroup: CARGROUPS[1],
    Color: "RED",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[1],
    Doors: 4,
    Status: "Ready",
    relStatus: "Released",
    Image: SkodaRED,
  },
  {
    License: "HM12345",
    Model: "Ford Mondeo",
    carGroup: CARGROUPS[1],
    Color: "BLK",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[1],
    Doors: 4,
    Status: "Ready",
    relStatus: "Released",
    Image: Ford,
  },
  {
    License: "IH12345",
    Model: "Skoda Fabia",
    carGroup: CARGROUPS[1],
    Color: "BLU",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[2],
    Doors: 4,
    Status: "Ready",
    relStatus: "Released",
    Image: SkodaSLV,
  },
  {
    License: "IH94302",
    Model: "Renault Captur",
    carGroup: CARGROUPS[2],
    Color: "BLU",
    fuelType: "G",
    fuelStatus: 75,
    Location: LOCATIONS[3],
    Doors: 4,
    Status: "Unavailable",
    relStatus: "Released",
    Image: Renault,
  },
  {
    License: "IH23456",
    Model: "VW Passat",
    carGroup: CARGROUPS[4],
    Color: "SLV",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 5,
    Status: "Returned",
    relStatus: "Released",
    Image: VW,
  },
  {
    License: "FC56789",
    Model: "Audi A6",
    carGroup: CARGROUPS[5],
    Color: "SLV",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[3],
    Doors: 5,
    Status: "Ready",
    relStatus: "Released",
    Image: Audi,
  },
  {
    License: "JB12789",
    Model: "Honda CR V",
    carGroup: CARGROUPS[6],
    Color: "RED",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 5,
    Status: "Unavailable",
    relStatus: "Released",
    Image: HondaRED,
  },
  {
    License: "JF94837",
    Model: "Honda CR V",
    carGroup: CARGROUPS[6],
    Color: "SLV",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 5,
    Status: "Unavailable",
    relStatus: "Released",
    Image: HondaSLV,
  },
  {
    License: "JF19386",
    Model: "Fiat 500",
    carGroup: CARGROUPS[7],
    Color: "SLV",
    fuelType: "P",
    fuelStatus: 100,
    Location: LOCATIONS[0],
    Doors: 5,
    Status: "Unavailable",
    relStatus: "Released",
    Image: Fiat500,
  },
];
