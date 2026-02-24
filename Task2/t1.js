//Create a function delayedMessage(message, delay) that uses setTimeout and demonstrates synchronous vs asynchronous behavior

function delayedMessage(message,delay)  {
   console.log("Start (synchronous)");

   setTimeout(()=>{
      console.log("Delayed:", message);
   },delay);

   console.log("End (synchronous)");
}
delayedMessage("Asynchronous message",2000);
         