# libcocos2djs.so

## Architecture
```
			javascript
				|
			cocos2d-js
				|
js-bindings (XMLHttpRequest、 WebSocket、 SocketIO)
				|
			cocosx2d-x
				|
cocos2dx::network (HttpClient、 WebSocket、 SocketIO)  
				|
   			JNI
				|
  			dalvik
```

## Class Implement

```
XMLHttpRequest  <-  cocos2dx::network::HttpClient <- javax.net.ssl.HttpsURLConnection(JNI) / libcurl(Other)
				<-  cocos2dx::network::HttpRequest 
				<-  cocos2dx::network::HttpResponse
WebSocket  <-  cocos2dx::network::Websocket <- libwebsocket
SocketIO  <-  cocos2dx::network::Websocket <- libwebsocket
```