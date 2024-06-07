#define __android_x86_64_

namespace std
{
	class string
	{
		union
		{
			char flag;
			size_t capacity;
		}ref;

		size_t size;
		char* buffer;
	};
}

namespace cocos2djs
{
	class XMLHttpRequest
	{
		char block[0x1B0];
		std::string URL;					// +0x1b0
		char flag;
		char method[7]; 					// +0x1c8
		cocos2d::Data::Data __data; 		// +0x240
		std::std::vector<char> postData; 	// +0x250
		// ...
	};

	class HttpResponse
	{
		void* block[2];
		char* responseData; 	// +32
		void* block2[2];
		char* responseHeader;	// +56
		// ...
	}


	class Websocket
	{
		char block[56];
		std::string host;
		char block2[232];
		std::string certPath;
		// ...
	}
}

