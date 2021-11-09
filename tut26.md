
#getStaticPaths fallback:false

- The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
- If fallback is set to false, then any paths not returned by getStaticPaths will result in 404 page.

#When ?

-The false value is most suitable if you have an application with a small number of path to pre-render.
-When new pages are not added often.
-A blog site with a few articles is a good example for fallback set to false.
