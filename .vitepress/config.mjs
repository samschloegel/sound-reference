import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sam's Sound Reference",
  description: "Sound Reference Site",
  titleTemplate: "Sound Reference",
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
            collapsed: true,
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
                link: "/networking/concepts/PoE",
              },
            ],
          },
          {
            text: "Product Guides",
            collapsed: true,
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
            collapsed: true,
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
        collapsed: false,
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
        collapsed: false,
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
      {
        text: "KVMs",
        link: "/kvm/",
        collapsed: false,
        items: [
          {
            text: "XDIP",
            link: "/kvm/xdip",
          },
        ],
      },
      {
        text: "Speakers",
        link: "/speakers/",
        collapsed: false,
        items: [
          {
            text: "Meyer",
            link: "/speakers/meyer/",
            collpased: true,
            items: [{ text: "Power", link: "/speakers/meyer/power" }],
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
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "short",
      },
    },
    editLink: {
      pattern:
        "https://github.com/samschloegel/sound-reference/tree/main/src/:path",
      text: "Suggest an edit on GitHub",
    },
  },
});
