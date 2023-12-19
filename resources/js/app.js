import './bootstrap';
    /*   console.error('Axios Error:', error);
       if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
          console.error('Response Headers:', error.response.headers);
       } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
       } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
       }
   */
 
;
///getting input from ui and sending it to our endpoint...if-when we send data to endpoint, our event should be triggered at the backend to the the channel
const channel = Echo.channel('first_channnel');
channel.subsribed(()=>{console.log('suscribed to channel');})
.listen('event_name', (e)=>{
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
});//event is not the same as channel...events are broadcasted through channel