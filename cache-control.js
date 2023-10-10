// Check if the browser supports the Cache API
if ("caches" in window) {
  // Create a new Cache object
  caches.open("my-cache").then(function (cache) {
    // Define the URL of the resource you want to control caching for
    var resourceUrl = "/path/to/about.html";

    // Fetch the resource from the cache
    cache.match(resourceUrl).then(function (response) {
      // If the resource is in the cache, serve it with custom cache control headers
      if (response) {
        var customHeaders = new Headers({
          "Cache-Control": "no-cache, no-store, must-revalidate",
        });

        var customResponse = new Response(response.body, {
          headers: customHeaders,
        });

        // Serve the resource with custom headers
        return customResponse;
      }
    });
  });
}
