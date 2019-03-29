import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductService {

    getAllProducts(): Array<Product> {
        return [
            { id: 1, name: 'DC default', price: 55.4, size: 'G', registrationDate: new Date },
            { id: 2, name: 'És shoes', price: 80, size: '9.5', registrationDate: new Date  },
            { id: 3, name: 'Flip deck', price: 33.1, size: '8.125', registrationDate: new Date  },
            { id: 4, name: 'DC shoes', price: 99.4, size: '9.5', registrationDate: new Date  },
            { id: 5, name: 'Volcom T-shirt', price: 12.4, size: 'G', registrationDate: new Date  },
            { id: 6, name: 'Evoke eyewear', price: 52.6, size: 'Default', registrationDate: new Date  },
            { id: 7, name: 'Globe shoes', price: 75.4, size: '9.5', registrationDate: new Date  },
            { id: 8, name: 'Neff T-shirt', price: 15.4, size: 'G', registrationDate: new Date  },
            { id: 9, name: 'New Era hat', price: 25.4, size: '8', registrationDate: new Date  },
            { id: 10, name: 'Elemend deck', price: 55.1, size: '8.125', registrationDate: new Date  }
        ];
    }
}
