# Default IP Table

This is how I generally set up show networks.

All of these layouts have caveats and are flexible to the needs of the show, but this is a starting framework.

## Management VLAN

VLAN 1

Subnet: 10.0.0.0/24

Switch addresses grouped by location.

| Address/Range  | Device/Group      | Notes                        |
| -------------- | ----------------- | ---------------------------- |
| `10.0.0.11`    | FOH DP/CT Sw      | Dante Primary and Control    |
| `10.0.0.12`    | FOH DS/HX Sw      | Dante Secondary and HelixNet |
| `10.0.0.13`    | FOH KVM Sw        | XDIPs                        |
| `10.0.0.14...` | FOH etc...        |                              |
| `10.0.0.21`    | Ampland DP/CT Sw  |                              |
| `10.0.0.22`    | Ampland DS/HX Sw  |                              |
| `10.0.0.23`    | Ampland KVM Sw    |                              |
| `10.0.0.24...` | Ampland etc...    |                              |
| `10.0.0.31`    | Tech Distro HX Sw |                              |

## Control Network

VLAN 10

Subnet: 10.0.1.0/24

::: info NOTE
Groups of devices are generally "1-indexed" so that it is easy to remember their address - for example, Amp 1 is Address 101 rather than Address 100.
:::

| Address/Range    | Device/Group         | Notes                                                                                                  |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------------------ |
| `10.0.1.1`       | Gateway              |                                                                                                        |
| `10.0.1.2-10`    | Network Devices      | WAPs etc                                                                                               |
| `10.0.1.11...`   | Computers            | Playback, then FX, then FOH control, then RF/Utility                                                   |
| `10.0.1.50`      | FOH Console          | Comes from Yamaha CL default. Only exists if console is on Control network - does not apply to DiGiCo. |
| `10.0.1.51...`   | Additional Consoles  | Monitors, Utility, etc                                                                                 |
| `10.0.1.70`      | Single R70           | Comes from d&b default                                                                                 |
| `10.0.1.71...`   | Multiple R70s        | If there are multiple R70s (1-Indexed)                                                                 |
| `10.0.1.100`     | Single Processor     | Comes from d&b DS100 default                                                                           |
| `10.0.1.101...`  | Amps                 | If no amps, multiple processors.                                                                       |
| `10.0.1.121...`  | Multiple Processors  | If amps.                                                                                               |
| `10.0.1.151...`  | Wireless             | 1-Indexed                                                                                              |
| `10.0.1.201-250` | DHCP Range           | For laptops, iPads, etc. When using UniFi, only DHCP-served addresses have internet access.            |
| `10.0.1.255`     | Reserved - Broadcast |                                                                                                        |

## Intercom/Video Network

VLAN 20

Subnet: 10.0.2.0/24

Intercom addresses distributed by department, and by Show/Tech.

Video addresses above 200.

::: info NOTE
Groups of devices are generally "1-indexed" so that it is easy to remember their address - for example, LX Show users start at 31 rather than 30.
:::

| Address/Range   | Device/Group         | Notes                                                   |
| --------------- | -------------------- | ------------------------------------------------------- |
| `10.0.2.1`      | Gateway/Switch       | If switch provides DHCP during shop prep, this address. |
| `10.0.2.11...`  | Mainstations etc     |                                                         |
| `10.0.2.21...`  | SM Show              |                                                         |
| `10.0.2.31...`  | Carp Show            |                                                         |
| `10.0.2.41...`  | LX Show              |                                                         |
| `10.0.2.51...`  | Video Show           |                                                         |
| `10.0.2.61...`  | Sound Show           |                                                         |
| `10.0.2.121...` | SM Tech              |                                                         |
| `10.0.2.131...` | Carp Tech            |                                                         |
| `10.0.2.141...` | LX Tech              |                                                         |
| `10.0.2.151...` | Video Tech           |                                                         |
| `10.0.2.161...` | Sound Tech           |                                                         |
| `10.0.2.201...` | Video Routers        |                                                         |
| `10.0.2.211...` | Video Controllers    |                                                         |
| `10.0.2.221...` | PTZ Cameras          |                                                         |
| `10.0.2.231...` | PTZ Controllers      |                                                         |
| `10.0.2.255`    | Reserved - Broadcast |                                                         |

## KVM Network

VLAN 30

Subnet: LINK LOCAL `169.254.X.X`

## Dante Primary Network

VLAN 100

Subnet: LINK LOCAL `169.254.X.X`

## Dante Secondary Network

VLAN 200

Subnet: LINK LOCAL `172...` (Dante defaults)