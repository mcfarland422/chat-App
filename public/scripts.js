// console.log("Sanity Check");
// setup the route to piggyback on
$(document).ready(()=>{
  var socketUrl = 'http://127.0.0.1:8080';
  //console.log(io);


  var socketio = io.connect(socketUrl);
  var name = prompt("What is your name?");
  //Take the users name and send it to
  //
  // 1 Event (we make this up)
  // 2 Data to send via ws
  socketio.emit('nameToServer', name);
  socketio.on('newUser',(users)=>{
    console.log(`${userName} just joined`);
    var usersHTML = "";
    users.map((user)=>{
      usersHTML += `<div class="col-sm-12">${user.name}</div>`;
    });
    $('#users').html(usersHTML);
  });
  $('#submit-message').submit((event)=>{
    event.preventDefault();
    var newMessage = $('#new-message').val();
    socketio.emit('messageToServer',{
      name: name,
      message: newMessage
    });
  });
});
