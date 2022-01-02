import FetchFunctions from "./FetchFunctions";

const updateEntries = {
  updateCustomer: (
    ref,
    name,
    address,
    phone,
    email,
    born,
    id,
    issued,
    expires
  ) => {
    let customer = FetchFunctions.fetchBookingFromRef(ref).Customer;
    console.log("Customer Found: " + customer.name);
    customer.name = name;
    customer.address = address;
    customer.phone = phone;
    customer.email = email;
    customer.born = born;
    customer.license.id = id;
    customer.license.issued = issued;
    customer.license.expires = expires;
    customer.license.valid = new Date() < expires;
  },

  udpateCarStatus: (license, status) => {
    let car = FetchFunctions.fetchCarFromLicense(license); // now we have CAR
    car.Status = status;
  },

  updateBooking: (
    ref,
    status,
    walkin,
    carGroup,
    name,
    address,
    phone,
    email,
    birthday,
    licenseID,
    licenseIssueDate,
    licenseExpirationDate,
    isValid,
    car,
    pickupDate,
    pickupLocation,
    pickupFuel,
    pickupMileage,
    pickupComment,
    returnDate,
    returnLocation,
    returnFuel,
    returnMileage,
    returnComment,
    extraDriver,
    extraMileage,
    returnedTime,
    returnedMileage,
    price
  ) => {
    let booking = FetchFunctions.fetchBookingFromRef(ref);
    booking.Status = status;
    booking.isWalkin = walkin;
    booking.carGroup = carGroup;
    booking.Customer.name = name;
    booking.Customer.address = address;
    booking.Customer.phone = phone;
    booking.Customer.email = email;
    booking.Customer.born = birthday;
    booking.Customer.license.id = licenseID;
    booking.Customer.license.issued = licenseIssueDate;
    booking.Customer.license.expires = licenseExpirationDate;
    booking.Customer.license.valid = isValid;
    booking.Car = car;
    booking.Pickup.time = new Date(pickupDate);
    booking.Pickup.Location = pickupLocation;
    booking.Pickup.fuel = pickupFuel;
    booking.Pickup.mileage = pickupMileage;
    booking.Pickup.comment = pickupComment;
    booking.Return.time = new Date(returnDate);
    booking.Return.Location = returnLocation;
    booking.Return.fuel = returnFuel;
    booking.Return.mileage = returnMileage;
    booking.Return.comment = returnComment;
    booking.Services.driver = extraDriver;
    booking.Services.mileage = extraMileage;
    booking.Returned.time = new Date(returnedTime);
    booking.Returned.mileage = returnedMileage;
    booking.price = price;
  },
};

export default updateEntries;
