import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sam's Sound Reference Pages",
  description: "Sound Reference Site",
  srcDir: "src",
  // base: "/sound-reference/",
  // cleanUrls: true,

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "How To Use This Guide", link: "/guide/" },
          // { text: "License", link: "/guide/license" },
        ],
      },
      {
        text: "Networking",
        items: [
          {
            text: "Concepts",
            collapsed: true,
            items: [
              {
                text: "Addresses and Masks",
                link: "/networking/concepts/addresses",
              },
              {
                text: "Addressing and DHCP",
                link: "/networking/concepts/DHCP",
              },
              {
                text: "VLANs",
                link: "/networking/concepts/VLANs",
              },
              {
                text: "LAGs",
                link: "/networking/concepts/LAGs",
              },
            ],
          },
          {
            text: "Product Guides",
            collapsed: true,
            items: [
              {
                text: "Cisco SG",
                link: "/networking/manufacturers/ciscoSG",
              },
              {
                text: "Cisco CBS",
                link: "/networking/manufacturers/ciscoCBS",
              },
              {
                text: "Netgear AVLine",
                link: "/networking/manufacturers/netgearAV",
              },
            ],
          },
          {
            text: "Defaults",
            collapsed: true,
            items: [
              {
                text: "IP Scheme",
                link: "/networking/defaults/IPs",
              },
              {
                text: "VLANs",
                link: "/networking/defaults/VLANs",
              },
            ],
          },
        ],
      },
      {
        text: "Intercom",
        items: [
          {
            text: "Encore",
            link: "/intercom/encore",
          },
          {
            text: "HelixNet",
            link: "/intercom/encore",
          },
          {
            text: "FreeSpeak",
            link: "/intercom/encore",
          },
          {
            text: "Arcadia",
            link: "/intercom/encore",
          },
        ],
      },
      {
        text: "Show Control",
        items: [
          {
            text: "MIDI",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "OSC",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "AppleScript",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "StreamDeck",
            collapsed: true,
            items: [
              {
                text: "Companion",
                link: "/",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/samschloegel/sound-reference",
      },
    ],
    outline: {
      level: "deep",
    },
    search: {
      provider: "local",
    },
  },
});
