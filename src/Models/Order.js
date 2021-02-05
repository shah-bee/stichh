import Item from './Item'
import moment from 'moment'

export const Order = {
    customerId: '',
    orderId: '', //Think something unique about it.
    createdDate: '',
    deliveryDate: moment().format('MM/DD/YYYY'),
    items: [],
    stichType: ''
    //status: '' For Details purpose // Inprogress, completed, ironing, buttons, overlock
}

export const OrderStatusEnum = {
    'InProgress': 1,
    'Completed': 2,
    'Cancelled': 3
}