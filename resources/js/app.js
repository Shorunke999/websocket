import './bootstrap';
///getting input from ui and sending it to our endpoint...if-when we send data to endpoint, our event should be triggered at the backend to the the channel
const channel = Echo.channel('first_channnel');
channel.subscribed(()=>{
   console.log('suscribed to channel');
}).listen('event_name', (e)=>{
   consloe.log(e);
   const form = document.getElementById('form');
   const input = document.getElementById('input');
   form.addEventListener('submit',(e)=>{
       e.preventDefault();
       const as =  input.value;
       console.log(as);
       axios.post('/message', { message: as })
       .then(response => {
          console.log('message handled');
       });
   const ultag = document.getElementById('ul');
   const li = document.createElement('li');
   const newmessage = e.message;
   li.textContent('newmessage');
   ultag.append(li);
   });
});//