export class ProductGroup {
    id: number;
    name: string;
  }
  
export class Product {
    ProductId: number;
    Nmae: string;
    Description: string;
    Quantity: number;
    UnitOfMeasure: string;
    GroupId: number;
    Entery_Date: Date;
    Expire: Date;
    Person_Name: string;
    Recieved_ammount: number;
}

export class ReceivedAmount {
    
        productId: number;
        date: Date;
        expireDate: Date;
        price: number;
        vendorName: string;
        locationCode: string;
        unitStock: number;

}


  