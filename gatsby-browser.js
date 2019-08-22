export const onRouteUpdate = ({ location }) => {
  if (typeof gtag !== `function`) {
    return null
  }

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined
    window.gtag('config', 'UA-75228722-5', {
      page_path: pagePath,
    });
  }

  setTimeout(sendPageView, 32)

  return null
}
