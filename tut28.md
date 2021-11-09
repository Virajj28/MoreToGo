
#getStaticPaths fallback:blocking

similar to fallback:true, but will block until the file is available.

When?
-On a  UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.

-Some crawlers did not support Javascript. The loading page would be rendered and the the full page would be loaded which was causing a problem.

-But nextjs says prefer fallback:true unless not working use fallback:blocking.