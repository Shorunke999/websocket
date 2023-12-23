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
    })
    .catch(error => {
      // Handle error here
      console.error('An error occurred:', error);

      // Optionally, you can also check the error status and handle it accordingly
      if (error.response) {
        // The request was made, but the server responded with an error status
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    });
    //echo object 
   const channel = Echo.channel('first_channnel');
   channel.subscribed(()=>{
   console.log('suscribed to channel');
   }).listen('.message_event', (e)=>{
   consloe.log(e);
   const ultag = document.getElementById('ul');
   const li = document.createElement('li');
   const newmessage = e.message;
   li.textContent(newmessage);
   ultag.append(li);
      });//end of echo object.
});   


