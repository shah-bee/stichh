import Item from './Item'

export const Order = {
    CustomerId: customerId,
    OrderId: '', //Think something unique about it.
    CreatedDate: new Date(),
    DeliveryDate: new Date(),
    Items: [],
    status: {} // Inprogress, completed, ironing, buttons, overlock
}