import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sam's Sound Reference",
  description: "Sound Reference Site",
  base: "/sound-reference/",
  srcDir: "src",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Networking", link: "/networking/" },
      { text: "Intercom", link: "/intercom/" },
      { text: "Show Control", link: "/show-control/" },
    ],
    sidebar: [
      {
        text: "Guide",
        link: "/guide/",
        items: [
          // { text: "License", link: "/" }
        ],
      },
      {
        text: "Networking",
        link: "/networking/",
        collapsed: false,
        items: [
          {
            text: "Concepts",
            collapsed: false,
            items: [
              {
                text: "Understanding Addresses",
                link: "/networking/concepts/addresses",
              },
              {
                text: "Assigning Addresses",
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
              {
                text: "PoE",
                link: "/networking/concepts/poe",
              },
            ],
          },
          {
            text: "Product Guides",
            collapsed: false,
            items: [
              {
                text: "Cisco Intro",
                link: "/networking/manufacturers/cisco-intro",
              },
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
            collapsed: false,
            items: [
              {
                text: "VLANs",
                link: "/networking/defaults/VLANs",
              },
              {
                text: "IPs",
                link: "/networking/defaults/IPs",
              },
            ],
          },
        ],
      },
      {
        text: "Intercom",
        link: "/intercom/",
        collapsed: true,
        items: [
          {
            text: "HelixNet",
            link: "/intercom/helixnet",
          },
          {
            text: "FreeSpeak",
            link: "/intercom/freespeak",
          },
          {
            text: "Arcadia",
            link: "/intercom/arcadia",
          },
          {
            text: "Encore",
            link: "/intercom/encore",
          },
        ],
      },
      {
        text: "Show Control",
        link: "/show-control/",
        collapsed: true,
        items: [
          {
            text: "MIDI",
            link: "/show-control/midi",
          },
          {
            text: "OSC",
            link: "/show-control/osc",
          },
          {
            text: "AppleScript",
            link: "/show-control/applescript",
          },
          {
            text: "StreamDeck",
            link: "/show-control/streamdeck",
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
    externalLinkIcon: true,
  },
});
