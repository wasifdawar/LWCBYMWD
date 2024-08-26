import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullName = "Wasif Dawar"
    course = "LWC";

    handleChange(event)
    {
        this.course = event.target.value;
    }

    @track address = {

        city:'Karachi',
        postalCode: '74900',
        country:'Pakistan'
    }

    handleTrack(event)
    {
      thia.address.city = event.target.value;
    }
}