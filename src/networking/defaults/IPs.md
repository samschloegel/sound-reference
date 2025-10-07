---
editLink: false
---

# Default IP Table

This is how I generally set up show networks.

All of these layouts have caveats and are flexible to the needs of the show, but this is a starting framework.

## Switch Management

A Utility computer is connected to both physical networks to allow switch management on each by the show crew. Although both networks use VLAN 1 for management, they must use different subnets in order for the Utility computer to speak to both simultaneously.

### Primary Network (n1)

VLAN `1` (Default VLAN)

Subnet `10.0.0.0/24`

Switch addresses grouped by location.

| Address/Range  | Device/Group        | Notes |
| -------------- | ------------------- | ----- |
| `10.0.0.11`    | Ampland Prim Sw     |       |
| `10.0.0.12...` | Com Rack, etc.      |       |
| `10.0.0.21`    | FOH Prim Sw         |       |
| `10.0.0.22...` | FOH Rack 2 etc...   |       |
| `10.0.0.31`    | RF Prim Sw          |       |
| `10.0.0.41`    | Tech Distro Sw, etc |       |

### Secondary Network (n2)

VLAN `1` (Default VLAN)

Subnet `10.2.0.0/24`

Switch addresses grouped by location.

| Address/Range | Device/Group   | Notes |
| ------------- | -------------- | ----- |
| `10.2.0.11`   | Ampland Sec Sw |       |
| `10.2.0.21`   | FOH Sec Sw     |       |
| `10.2.0.31`   | RF Sec Sw      |       |

## Control

VLAN `10` of `n1`

Subnet `10.0.1.0/24`

DHCP-served addresses `201-249`

::: info NOTE
Groups of devices are generally "1-indexed" so that it is easy to remember their address - for example, Amp 1 is Address 101 rather than Address 100.
:::

| Address/Range    | Device/Group         | Notes                                                                                                  |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------------------ |
| `10.0.1.1`       | Gateway              | A UniFi router may have gateway addresses on multiple subnets.                                         |
| `10.0.1.2-10`    | Network Devices      | WAPs etc                                                                                               |
| `10.0.1.11...`   | Computers            | Playback, then FX, then Control, Utility, RF.                                                          |
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

## Intercom/Video

VLAN `20` of `n1`

Subnet `10.0.2.0/24`

Intercom addresses are distributed by department, and 1-indexed within their block.

Video addresses are above `200`, and blocked by device type.

- For particularly large shows where any single department needs more than 10 users during production, the production addresses for all departments are mirrored above 100. For example, LX Op at `51` and LX Designer at `151`. See below.

::: info NOTE
Groups of devices are generally "1-indexed" so that it is easy to remember their address - for example, LX Show users start at 31 rather than 30.
:::

| Address/Range   | Device/Group         | Notes                                                   |
| --------------- | -------------------- | ------------------------------------------------------- |
| `10.0.2.1`      | Gateway/Switch       | If switch provides DHCP during shop prep, this address. |
| `10.0.2.11...`  | Mainstations         |                                                         |
| `10.0.2.21...`  | Expansion stations   | LQ, etc                                                 |
| `10.0.2.31...`  | SM                   |                                                         |
| `10.0.2.41...`  | Carp                 |                                                         |
| `10.0.2.51...`  | LX                   |                                                         |
| `10.0.2.61...`  | Video                |                                                         |
| `10.0.2.71...`  | Sound                |                                                         |
| `10.0.2.131...` | SM Tech              | Only if full department can't fit into `31-39`          |
| `10.0.2.141...` | Carp Tech            | Only if full department can't fit into `41-49`          |
| `10.0.2.151...` | LX Tech              | Only if full department can't fit into `51-59`          |
| `10.0.2.161...` | Video Tech           | Only if full department can't fit into `61-69`          |
| `10.0.2.171...` | Sound Tech           | Only if full department can't fit into `71-79`          |
| `10.0.2.201...` | Video Routers        |                                                         |
| `10.0.2.211...` | Video Controllers    |                                                         |
| `10.0.2.221...` | PTZ Cameras          |                                                         |
| `10.0.2.231...` | PTZ Controllers      |                                                         |
| `10.0.2.255`    | Reserved - Broadcast |                                                         |

## KVM

VLAN `30` of `n2`

Subnet `LINK LOCAL` `169.254.0.0/16`

All XDIPs communicate using Link Local addresses, even when they are assigned static IPs manually. The static address is an additional address on the same interface, and does not replace the use of Link Local.

There is a restful API for external control of XDIPs, and implementing that would typically require a static address scheme.

::: warning Static Addresses
In my experience, setting static addresses in the configuration of XDIP transmitters can cause issues, and is unnecessary. If you choose to use static addresses for external control, only assign static addresses to receivers. See the [KVM/XDIP](/KVM/xdip) page for more info.
:::

## Dante Primary

VLAN `100` of `n1`

Subnet `LINK LOCAL` `169.254.0.0/16`

::: warning A note about DVS
Dante Virtual Soundcard has, in my experience, not worked on a tagged interface. I typically provide a dedicated untagged Dante P interface to any Mac that is using DVS.
:::

::: danger AUTOMATIC ONLY, NO EXCEPTIONS
Never use a DHCP server or static addresses on a Dante Network. There are people who do it, but they are ill-advised.
:::

## Dante Secondary

VLAN `200` of `n2`

Subnet: Dante Secondary link-local range `172...`

::: danger AUTOMATIC ONLY, NO EXCEPTIONS
Never use a DHCP server or static addresses on a Dante Network. There are people who do it, but they are ill-advised.
:::

## Console Networks

### Yamaha Rivage

Rivage consoles use a user-assignable control address (such as `10.0.1.50/24`) for OSC, StageMix, and MonitorMix connections, etc. This is configured on the Control Surface, in `Setup > Network > DSP Engine IP Setting > IP Address`.

However, the Rivage Editor desktop app acts as a Control Surface, and **MUST** be in the pre-defined range `192.168.53.1-32`. The console uses various addresses in the range `192.168.53.33-254` and nothing should be assigned here.

::: info Rivage on the Control Network
In my recent experience, it is okay to put a Rivage console on the normal Control network, rather than a dedicated VLAN.

Rivage Editor for Mac has, in my recent experience, not worked via a tagged interface. If using a tagged interface for the normal `10.0.1.X` Control network, also add an untagged NIC to the Mac in the `192.168.53.1-32` range as described above.
:::
