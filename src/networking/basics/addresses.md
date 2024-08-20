# Addresses and Subnet Masks

::: info

This is all for IPv4. IPv6 is not currently discussed in this guide.

:::

## IP Addresses

IP addresses are 32-bit numbers, commonly represented as 4 octets, written in decimal notation.

::: tip EXAMPLE

`192.168.1.35`

:::

We generally work in private networks called LANs, which are commonly limited to `192.168.X.X` or `10.X.X.X`

::: info

Typing `192.168.1.` repeatedly is a nightmare which can be avoided by using `10.0.1.` instead.

:::

## Subnet Masks

Masks indicate how many bits are allocated to the subnet vs the address.

The last address within a subnet is reserved as the "Broadcas Address" and data sent to that address will be broadcast to all devices within the subnet. As a common good practice I prefer to also reserve the first address (`X.X.X.1`) as the "Gateway Address" although this is not strictly necessary.

| Binary                               | Decimal         | Suffix | Available Addresses |
| ------------------------------------ | --------------- | ------ | ------------------- |
| `11111111.00000000.00000000.0000000` | `255.0.0.0`     | `/8`   | 16,777,214          |
| `11111111.11111111.00000000.0000000` | `255.255.0.0`   | `/16`  | 65,534              |
| `11111111.11111111.11111110.0000000` | `255.255.254.0` | `/23`  | 510                 |
| `11111111.11111111.11111111.0000000` | `255.255.255.0` | `/24`  | 253                 |

::: info

We almost always use "three octets masked", A.K.A. `/24` A.K.A. `255.255.255.0`

This means that the first three octets of the IP address are the "subnet" and should match, while the last octet is the "address" and shold be unique.

:::
