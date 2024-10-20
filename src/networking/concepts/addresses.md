# Addresses and Subnet Masks

::: info

This is all for IPv4. IPv6 is not discussed in this guide.

:::

## IP Addresses

IP addresses are 32-bit numbers, commonly represented as 4 octets, written in decimal notation.

::: tip EXAMPLE

`192.168.1.35` - decimal notation

`11000000.10101000.00000001.00100011` - binary representation of the same address

:::

We generally work in private networks called LANs, which are commonly limited to `192.168.X.X` or `10.X.X.X`, among other options. (To learn more, look into "RFC 1918 addresses" - address allocation for private networks).

`192.168.X.X` is the factory-default address range on most products.

::: warning

Constantly typing `192.168.X.X` is a waking nightmare which can easily be avoided by using `10.0.X.X` instead.

Friends don't let friends use `192.168.X.X`.

:::

Under the hood, IP addresses have two parts - a network address and a host address. These two portions are separated according to the subnet mask.

## Subnet Masks

Subnet masks indicate how many bits within an IP address are allocated to the network address vs the host address.

### Reserved addresses

Within a subnet, two (or three) addresses are reserved for special use and should be avoided.

| Address              | Example         | Use               | Notes                                                                                                                             |
| -------------------- | --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| All bits off         | `10.0.1.0/24`   | Network Address   | Used to describe the network, and may not be used for a host.                                                                     |
| First usable address | `10.0.1.1/24`   | Default Gateway   | This is not a hard rule, but is common practice, and I recommend not using this address for anything other than a gateway/router. |
| All bits on          | `10.0.1.255/24` | Broadcast Address | Packets sent to this address will be sent to all hosts within the subnet.                                                         |

Subnet masks are typically represented in decimal notation (`255.255.255.0`) or CIDR notation (`[IP Adddress]/24`).

| Binary                               | Decimal         | Suffix | Host Addresses |
| ------------------------------------ | --------------- | ------ | -------------- |
| `11111111.00000000.00000000.0000000` | `255.0.0.0`     | `/8`   | 16,777,214     |
| `11111111.11111111.00000000.0000000` | `255.255.0.0`   | `/16`  | 65,534         |
| `11111111.11111111.11111110.0000000` | `255.255.254.0` | `/23`  | 510            |
| `11111111.11111111.11111111.0000000` | `255.255.255.0` | `/24`  | 253            |

::: info

In live sound systems, we almost always use "three octets masked", denoted as `255.255.255.0` or `/24` because our networks so not typically have enough hosts to necessitate more available address space. (Obviously there are exceptions out there.)

This means that the first three octets of the IP address are the "subnet" and should match, while the last octet is the "address" and shold be unique.

:::

::: tip

On older versions of macOS, you could type `/24` at the end of the IP address field in System Preferences, and it would auto-fill the subnet mask and default gateway for you. Sadly, this was discontinued in the horrible System Preferences overhaul of macOS 12.

:::
