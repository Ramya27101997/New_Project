import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Order } from './order';

export class OrderData implements InMemoryDbService {

    createDb() {
      const orders: Order[] = [{
        name: 'Ramya',
        id: 1,
        dueDate: new Date("Fri Dec 08 2021"),
        quantity: 2,
        address: 'Hal colony 500055',
        phone: '9875432563',
        total: 450,
    },
    {
        name: 'Kavya',
        id: 2,
        dueDate: new Date("Wed Oct 08 2021"),
        quantity: 2,
        address: 'Sai colony 500054',
        phone: '9875478563',
        total: 500,
    },
    ];
      return { orders };
    }
}
