import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sound Reference",
  description: "Sound Reference",
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
          { text: "How To", link: "/guide/" },
          { text: "License", link: "/guide/license" },
        ],
      },
      {
        text: "Networking",
        items: [
          {
            text: "Networking Basics",
            collapsed: false,
            items: [
              {
                text: "Addresses and Masks",
                link: "/networking/basics/addresses",
              },
              {
                text: "Addressing and DHCP",
                link: "/networking/basics/DHCP",
              },
              {
                text: "VLANs",
                link: "/networking/basics/VLANs",
              },
            ],
          },
          {
            text: "Product Guides",
            collapsed: false,
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
            collapsed: false,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "OSC",
            collapsed: false,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "AppleScript",
            collapsed: false,
            items: [
              {
                text: "Index",
                link: "/intercom/encore",
              },
            ],
          },
          {
            text: "StreamDeck",
            collapsed: false,
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
