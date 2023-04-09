const path = (path: string, sublink: string) => {
  return `${path}${sublink}`;
};

const PATH_PODCASTS = "/system-security-ifc/podcasts";
const PATH_SECURITY = "/system-security-ifc/seguranca";
const PATH_ATAQUES = "/system-security-ifc/ataques-ciberneticos";

export const PATH = {
  root: "/system-security-ifc",

  firewall: "/system-security-ifc/firewall",
  concepts: "/system-security-ifc/conceitos",

  security: {
    root: PATH_SECURITY,
  },

  ataques_ciberneticos: {
    root: PATH_ATAQUES,
  },

  podcasts: {
    root: PATH_PODCASTS,
  },
};
