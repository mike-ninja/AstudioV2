export function navScreenPosition() {
  const windowHeight = window.innerHeight ||
    document.documentElement.clientHeight;
  const scrollPosition = (window.pageYOffset ||
    document.documentElement.scrollTop) + windowHeight / 2;

  const top = document.getElementById("home");
  const about = document.getElementById("about");
  const services = document.getElementById("services");
  const calltoaction = document.getElementById("calltoaction");
  const instagram = document.getElementById("instagram");
  const contact = document.getElementById("contact");

  if (top && about && services && calltoaction && contact && instagram) {
    const topRange = {
      start: top.offsetTop,
      end: about.offsetTop - 1,
    };
    const aboutRange = {
      start: about.offsetTop,
      end: services.offsetTop - 1,
    };
    const servicesRange = {
      start: services.offsetTop,
      end: calltoaction.offsetTop - 1,
    };
    const calltoactionRange = {
      start: calltoaction.offsetTop,
      end: instagram.offsetTop - 1,
    };
    const instagramRange = {
      start: instagram.offsetTop,
      end: contact.offsetTop - 1,
    };
    const contactRange = {
      start: contact.offsetTop,
      end: contact.offsetTop + contact.offsetHeight,
    };

    if (
      scrollPosition >= topRange.start &&
      scrollPosition <= topRange.end
    ) {
      return ("#home");
    } else if (
      scrollPosition >= aboutRange.start &&
      scrollPosition <= aboutRange.end
    ) {
      return ("#about");
    } else if (
      scrollPosition >= servicesRange.start &&
      scrollPosition <= servicesRange.end
    ) {
      return ("#services");
    } else if (
      scrollPosition >= calltoactionRange.start &&
      scrollPosition <= calltoactionRange.end
    ) {
      return ("#calltoaction");
    } else if (
      scrollPosition >= instagramRange.start &&
      scrollPosition <= instagramRange.end
    ) {
      return ("#instagram");
    } else if (
      scrollPosition >= contactRange.start &&
      scrollPosition <= contactRange.end
    ) {
      return ("#contact");
    }
  }
  return ("#contact");
  // return (null);
}
