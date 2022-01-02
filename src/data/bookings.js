import { CARS } from "./cars.js";
import { CARGROUPS } from "./carGroups.js";
import { LOCATIONS } from "./locations.js";
import { CUSTOMERS } from "./customers.js";

/**
 * Schema: ID: {Status,isWalkin, carGroup, CARS.license, Pickup {time, location}, Return {time, location}}, Returned {time, mileage}, price},
 */

export const BOOKINGS = [
  {
    Ref: "814",
    Status: "not begun",
    isWalkin: false,
    carGroup: CARGROUPS[0],
    Customer: CUSTOMERS[0],
    Car: null,
    Pickup: {
      time: new Date(2021, 11, 8, 10),
      location: LOCATIONS[0],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    BillAs: null,
    Return: {
      time: new Date(2021, 11, 9, 10),
      location: LOCATIONS[0],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    Services: { driver: true, mileage: 0 },
    Returned: { time: null, mileage: 0 },
    price: pricing(1),
  },
  {
    Ref: "815",
    Status: "not begun",
    isWalkin: true,
    carGroup: CARGROUPS[2],
    Customer: CUSTOMERS[2],
    Car: null,
    Pickup: {
      time: new Date(2021, 11, 9, 12),
      location: LOCATIONS[0],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    BillAs: CARGROUPS[4],
    Return: {
      time: new Date(2021, 11, 25, 10),
      location: LOCATIONS[1],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    Services: { driver: false, mileage: 0 },
    Returned: { time: null, mileage: 0 },
    price: pricing(2),
  },
  {
    Ref: "816",
    Status: "not begun",
    isWalkin: false,
    carGroup: CARGROUPS[6],
    Customer: CUSTOMERS[1],
    Car: null,
    Pickup: {
      time: new Date(2021, 11, 8, 10),
      location: LOCATIONS[0],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    BillAs: null,
    Return: {
      time: new Date(2021, 11, 9, 10),
      location: LOCATIONS[0],
      fuel: 100,
      mileage: 0,
      comment: "",
    },
    Services: { driver: true, mileage: 0 },
    Returned: { time: null, mileage: 0 },
    price: pricing(1),
  },
];

function pricing(id) {
  let bookingPrice = id;
  //calculate the price here

  //update the actual returned price
  bookingPrice = 1000;
  return bookingPrice;
}
export default BOOKINGS;
