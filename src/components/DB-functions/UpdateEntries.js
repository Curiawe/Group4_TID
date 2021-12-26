import FetchFunctions from "./FetchFunctions"

const updateEntries = {

    updateCustomer : (ref, name, address, phone, email, born, id, issued, expires) => {
        let customer = FetchFunctions.fetchBookingFromRef(ref).Customer;
        console.log("Customer Found: " + customer.name)
        customer.name = name;
        customer.address = address;
        customer.phone = phone;
        customer.email = email;
        customer.born = born;
        customer.license.id = id;
        customer.license.issued= issued;
        customer.license.expires=expires;
        customer.license.valid=(new Date() < expires)
    },

    udpateCarStatus : (license, status) => {
        let car = FetchFunctions.fetchCarFromLicense(license) // now we have CAR
        car.Status = status
    },

    updateBookingForPickup : (ref, car, billAs, mileage, fuel, comment) => {
        let booking = FetchFunctions.fetchBookingFromRef(ref) // now we have BOOKING
        booking.car = car
        booking.BillAs = billAs
        booking.Pickup.mileage = mileage
        booking.status = "Picked up"

        if (car) {
            car.fuelStatus = fuel
        }
        booking.Car.fuelStatus = fuel
        booking.Comment = comment
    }


}

export default updateEntries