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
      console.log('message handled')});
    //echo object 
   const channel = Echo.channel('first_channnel');
   channel.subscribed(()=>{
   console.log('suscribed to channel');
   }).listen('.message_event', (event)=>{
   consloe.log(event);
   const ultag = document.getElementById('ul');
   const li = document.createElement('li');
   const newmessage = event.message;
   li.textContent('newmessage');
   ultag.append(li);
      });//end of echo object

});   


