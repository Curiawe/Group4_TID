import BOOKINGS from "../../data/bookings"
import { CARS } from "../../data/cars"

/**
 * This constant contains several functions that fetch specific elements from the Database and return them.
 * 
 */
const FetchFunctions = {

    /**
     * 
     * @param {*} ref the booking reference of a given booking
     * @returns {BOOKINGS} matching Booking element from the database
     */
    fetchBookingFromRef: (ref) => {
        let foundBooking = null
        BOOKINGS.find((bkng) => {
           if (ref === bkng.Ref) {
               foundBooking = bkng
           }
        })
        return foundBooking
    },

    fetchCustomerFromBookingRef : (booking) => {
        try {
        let Bkng = FetchFunctions.fetchBookingFromRef(booking)
        console.log("I found the booking " + Bkng.Ref)
        console.log("Returning Customer: " + Bkng.Customer.name)
        return (Bkng.Customer)   
        } catch (error) {
        return new Error(error)
        }
    },

    fetchCarFromLicense : (license) => {
        let car = CARS.find((c) => {
            if (c.License === license) {
                return c
                }
            }
        )
        return car
    },


}

export default FetchFunctions