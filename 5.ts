
interface Person {
   name: string;
   age: number;
 }
 
 interface Address {
   city: string;
   street: string;
   zipCode: string;
 }
 
 interface Email {
 email: string;
 }
 
 interface Phone {
   phoneNumber: string;
   }
 
 type ContactInfo = Person & Address & Email & Phone;
 
 const personWithAddress: ContactInfo = {
   name: "Milliy Bro",
   age: 20,
   city: "Tashkent",
   street: "Qatartol",
   zipCode: "10001",
   email: "shohrux-rustamov@mail.ru",
   phoneNumber : "+998904969007"
 };
 
 console.log(personWithAddress);
 