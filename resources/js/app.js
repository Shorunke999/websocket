import './bootstrap';
///getting input from ui and sending it to our endpoint...if-when we send data to endpoint, our event should be triggered at the backend to the the channel
const form = document.getElementById('form');
const input = document.getElementById('input');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const as =  input.value;
   console.log(as);
   axios.post('/message', { message: as })
   .then(response => {
      console.log('message handled');
      // Handle successful response here, if needed
    });
    //echo object 
   const channel = Echo.channel('first_channel');
   channel.subscribed(()=>{
   console.log('suscribed to channel');
   }).listen('messag_event', (e)=>{
   console.log(e);
   const ultag = document.getElementById('ul');
   const Li = document.createElement('li');
   const newmessage = e.message;
   Li.textContent = newmessage;
   ultag.append(Li);
      });//end of echo object.
});   


