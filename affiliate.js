document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    const url = new URL(link.href);
    if (
      (url.hostname.includes("amazon") || url.hostname.includes("amzn.to")) &&
      !url.href.includes("tag=tony6401-21")
    ) {
      if (url.search && url.search !== "?") {
        url.search += "&tag=tony6401-21";
      } else {
        url.search = "?tag=tony6401-21";
      }
      link.href = url.toString();
    }
  });
});
