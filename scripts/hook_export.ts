Java.perform(function () {
  var lib = "libcocos2djs.so";

  var _lws_log = "_lws_log";
  var lwsl_emit_stderr = "lwsl_emit_stderr";

  Interceptor.attach(Module.findExportByName(lib, _lws_log), {
    onEnter: function (args) {
      args[0].writeInt(1);
    },
  });

  Interceptor.attach(Module.findExportByName(lib, lwsl_emit_stderr), {
    onEnter: function (args) {
      console.log("[LOG]: " + args[1].readCString());
    },
  });
});
