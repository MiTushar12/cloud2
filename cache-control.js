
if ("caches" in window) {
  
  caches.open("my-cache").then(function (cache) {
   
    var resourceUrl = "/path/to/about.html";

    cache.match(resourceUrl).then(function (response) {
    
      if (response) {
        var customHeaders = new Headers({
          "Cache-Control": "no-cache, no-store, must-revalidate",
        });

        var customResponse = new Response(response.body, {
          headers: customHeaders,
        });

        
        return customResponse;
      }
    });
  });
}
