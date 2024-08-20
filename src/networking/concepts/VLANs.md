# VLANs

Managed switches are commonly divided into Virtual LANs to separate traffic.

VLANs are numbered. Typically VLAN 1 of a switch is the "Default VLAN" and is used by switches themselves to communicate with each other over trunk lines.

## Untagged/Access Ports

A typical connection from a switch to a device is an "Access" port which does not use VLAN tags.

The port may be a member of a VLAN, but because the data on that port is not "Tagged", the connected device is unaware of the VLAN scheme.

In live sound, most devices connect to access ports and are therefore unaware of the VLAN scheme.

::: tip EXAMPLE

Port 7 is "10U", meaning it is an Untagged member of VLAN 10.

Devices plugged into port 7 will communicate with devices connected to other VLAN 10 member ports.

Deviced plugged into port 7 will not be aware that they are a member of a VLAN.

:::

## Trunk Ports

Switch-to-switch or switch-to-device ports which use "Tagged" daata are called "Trunk" ports, and they are capabale of carrying data from multiple VLANs while keeping the VLANs separated.

Trunk ports typically have a default VLAN which is "untagged", meaning that any device patched to it which does not read VLAN tags will simply exist as though connected to an Access port on that VLAN. This is typically the default VLAN of the switch, and is that VLAN through which the switch's management interface can be accessed.

::: tip EXAMPLE
A trunk port has the following VLAN membership: 1U, 10T, 20T, 100T.

A laptop plugged into this trunk port will have "Access" to VLAN 1, but will ignore all tagged data.
:::

If the device on the other end of a trunk connection, such as a switch, is capable of reading and interpretting VLAN tags, it will be able to "access" the tagged VLANs.

::: tip EXAMPLE
A trunk port on Switch A has the following VLAN membership: 1U, 10T, 20T, 100T.

Switch B is plugged into this trunk port, will have "Access" to VLAN 1, and if configured as such, will be able to connect the VLAN 10 data on the trunk to its own VLAN 10 access ports (ports assigned to VLAN 10 untagged).

This means that 10U ports on Switch A will be able to commiunicate with 10U ports on Switch B.
:::
