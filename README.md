## Bespoke-UI

A basic demo of the project during the 10-17-18 ReactVegas Meetup

The controls have a little logic to prevent unwanted behavior, such as pinning both to the left and the right while simultaneously having a fixed width. Currently, pinning to an edge takes precedent and will remove the applicable fixed dimension in case this happens. If two opposing edges are already pinned, attempting to fix that dimension will not work.

I needed to do a lot of silly things with flexbox to get the animations and locations of the element to work correctly, and it feels a bit "hacky," but if someone has a more elegent solution, I would love to see it.

Mouse over the preview to see how your selections would change the element on resize.

Working demo here (https://react-vegas-bespoke-ui.netlify.com)
