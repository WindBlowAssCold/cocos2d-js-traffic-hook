# libcocos2djs.so 

(_Android_x86_64_)

## Architecture
```
javascript
	|
cocos2d-js
	|
js-bindings (XMLHttpRequest、 WebSocket、 SocketIO)
	|
cocos2dx
	|
cocos2dx::network (HttpClient、 WebSocket、 SocketIO)  
	|
Java Native Interface (JNI)
	|
Adnroid (Dalvik)
```

## Class Implement

There is usually three methods to send request: XMLHttpRequest, WebSocket, SocketIO

```
XMLHttpRequest  <-  cocos2dx::network::HttpClient <- javax.net.ssl.HttpsURLConnection(JNI) / libcurl(Other)
		<-  cocos2dx::network::HttpRequest 
		<-  cocos2dx::network::HttpResponse

WebSocket	<-  cocos2dx::network::Websocket <- libwebsocket

SocketIO	<-  cocos2dx::network::Websocket <- libwebsocket
```
## Scripts

1. hook_offset.ts -- hook for certain address with offset.
2. hook_export.ts -- hook for export functions.
3. hook_send.ts -- hook for send funcitons.


## Class Memory Layout
Ambiguous memory layout defines in cocos2djs.h 
