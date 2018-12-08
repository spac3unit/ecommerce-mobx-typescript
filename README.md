# Ecommerce Shop

- Front-end: React && Mobx && Typescript
- Back-end: [Strapi](https://github.com/strapi/strapi)

## Actions

- `setItem` - Sets the quantity of an item in the basket.
- `removeItem` - Removes an item from the basket.
- `setAddress` - Sets the address, specifically the country.
- `setDelivery` - Sets the delivery method to be used to deliver the order.
- `loadProducts` - Loads products.
- `loadCountries` - Loads countries.
- `loadDeliveryMethods` - Loads delivery methods.
- `setPaymentOptions` - Sets the payment options and purchase hook.
- `purchase` - Processes order.
- `completed` - Called when payment has been successully processed.
- `refreshCheckout` - (Used internally).
- `setErrors` - Can be used to set errors manually.

## Stores

- `AddressStore` - The current address, specifically the country.
- `BasketStore` - The items currently in the basket.
- `CountriesStore` - The list of all countries.
- `DeliveryMethodsStore` - The available delivery methods for the current address.
- `DeliveryStore` - The currently selected delivery method and it's associated cost.
- `OrderStore` - The current state of the order with totals, adjustments and errors.
- `PaymentOptionsStore` - The payment options.
- `ProductsStore` - The list of all products.
- `CheckoutStore` - (Used internally).
