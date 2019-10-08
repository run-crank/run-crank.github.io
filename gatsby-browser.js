export const onRouteUpdate = ({ location }) => {
  if (typeof gtag !== `function`) {
    return null
  }

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    window.gtag('config', 'UA-75228722-5', {
      // Standardize page path on just the path part for better pageview
      // tracking that aggregates all query params under a single page/path.
      page_path: location ? location.pathname : undefined,
    });
  }

  setTimeout(sendPageView, 32)

  return null
}
