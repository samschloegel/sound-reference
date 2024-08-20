# Assigning Addresses

## Manual Assignments

Create a table for each subnet, list out all available addresses (or at least keep the list sorted numerically) and manually choose addresses for each device.

This is NOT recommended for Dante or XDIP networks.

::: tip EXAMPLE

Subnet: `10.0.1.0/24`

| Device               | Address | Composite      |
| -------------------- | ------- | -------------- |
| RESERVED - Gateway   | 1       | `10.0.1.1`     |
| QLab A Mac           | 11      | `10.0.1.11/24` |
| QLab B Mac           | 12      | `10.0.1.12/24` |
| CL5                  | 50      | `10.0.1.50/24` |
| RESERVED - Broadcast | 255     | `10.0.1.255`   |

:::

## Link Local Assignments

Addresses are chosen by individual devices. Set each device to "DHCP" or "Automatic" mode, on a network without a DHCP server, and they will auto-negotiate an address in the `169.254.X.X` subnet.

::: info

Link Local assignments are typically used in **Dante** and **XDIP** networks.

:::

## DHCP Assignments

A single "DHCP Server" assigns addresses to devices. Typically the device is a router, switch, or UniFi Cloud Gateway.

DHCP servers can typically be configured to serve addresses in a specific "DHCP Range". It is possible to have a network that uses both Manual Assignments and DHCP, but be carefully not to overlap their ranges.

::: tip Example

Subnet: `10.0.1.0/24`

Gateway Address: `10.0.1.1`

Manual Addresses: `10.0.1.2` - `10.0.1.199`

DHCP Range: `10.0.1.200` - `10.0.1.254`

Broadcast Address: `10.0.1.255`

:::
