---
editLink: false
---

# Default VLANs

This is how I generally set up show networks.

I made a recent change to my typical layout, reducing from three physically discrete networks down to two.

Old verion:

- n1 - Control, Console, Dante P
- n2 - Intercom, Dante S
- n3 - KVM (10G backbone)

New version:

- n1 - Control, Intercom, Console, Dante P
- n2 - KVM, Dante S (10G backbone)

## Primary Network

| Name          | ID    | Prefix    | Color  | Notes                                                                          |
| ------------- | ----- | --------- | ------ | ------------------------------------------------------------------------------ |
| Trunk         |       | n1        | Black  |                                                                                |
| Management    | `1`   |           |        | Use a full trunk for management                                                |
| Control       | `10`  | nCT       | Green  | See [IP Scheme](/networking/defaults/IPs#control)                              |
| Com/Video     | `20`  | nHX       | Yellow | See [IP Scheme](/networking/defaults/IPs#intercom-video)                       |
| Console       | `40`  | nDG / nRV | Sand   | DiGiCo / Rivage - see [IP Scheme](/networking/defaults/IPs#console-networks)   |
| Dante Primary | `100` | nDP       | Blue   | See [IP Scheme](/networking/defaults/IPs#dante-primary) (incl. note about DVS) |
| Milan Primary | `110` | nMP       | Blue   | `10.0.110.0/24`                                                                |

## Secondary Network

| Name            | ID    | Prefix | Color | Notes                                                     |
| --------------- | ----- | ------ | ----- | --------------------------------------------------------- |
| Trunk           |       | n2     | Black |                                                           |
| Management      | `1`   |        |       | Use a full trunk for management                           |
| KVM             | `30`  | nKVM   | Pink  | See [IP Scheme](/networking/defaults/IPs#kvm)             |
| Dante Secondary | `200` | nDS    | Red   | See [IP Scheme](/networking/defaults/IPs#dante-secondary) |
| Milan Secondary | `210` | nMS    | Red   | `10.0.210.0/24`                                           |
