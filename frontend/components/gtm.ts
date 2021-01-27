export const GTMPageView = (url: string) => {
  interface PageEventProps {
    event: string
    page: string
  }

  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url,
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent)
  return pageEvent
}
