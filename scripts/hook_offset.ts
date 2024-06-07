Java.perform(function () {
  var lib = "libcocos2djs.so";
  var offset = 0xf3c22;

  var hookAddr = Module.findBaseAddress(lib).add(offset);

  Interceptor.attach(hookAddr, {
    onEnter: async (args) => {
      const addr = args[1];
      const addrlen = args[2];

      const sockaddr = addr.readByteArray(addrlen.toInt32());
      const AF_INET = 2;
      if (sockaddr[1] === AF_INET) {
        const port = (sockaddr[2] << 8) | sockaddr[3];
        console.log(
          `IPv4 address: ${sockaddr[4]}.${sockaddr[5]}.${sockaddr[6]}.${sockaddr[7]}, Port: ${port}`
        );
      }

      this.continue();
    },
  });
});
