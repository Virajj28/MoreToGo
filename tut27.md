
#getStaticPaths fallback:true

-same as above
-The paths that have not been generated at build time will not result in 404 page. Instead, Next.js will serve a "fallback" version of the page on the first request path HTML and JSON. This inclundes running getStaticProps.
-When that's done, the browser recieves the JSON for the generated path. This will be used to automatically render the page with the required props. From the iser's perspective, the page will be swapped from the fallback page to the full page.
-At the same time, Nest.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.