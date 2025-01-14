# XDIP

## Intro

XDIPs are an Adder KVM product that runs on an IP network.

## Transmitters and Receivers

There is only one node type, which can be programmed to operate as a transmitter (TX) or receiver (RX) - as opposed to many other systems where the two node types are different models.

Once assigned as either a TX or RX node, changing the mode requires a factory reset to "Start of Life".

Once a node has been set as a TX, the remaining configuration steps happen on from a Receiver via the "Manage Channels" configuration menu.

## Network configuration

### Bandwidth

XDIPs use approximately 400Mbps of bandwidth per active connection. This needs to be managed carefully in setups with more than one switch, as multiple active XDIP connections can easily overwhelm a gigabit switch trunk. If you are building a multi-switch XDIP system and can afford to, spec switches which are capable of 10Gbps trunk connections (such as Cisco CBS350-##-#**X**, Cisco SG350**X**, or Netgear GSM4230P**X**).

### Addressing

XDIPs use IPv4 link-local addresses. There is no need to assign addresses (and if doing so, read notes below).

### Switch Configuration

Network requirements for AdderLINK XDIPs incude:

- Jumbo Frames Enabled
- IGMP Snooping v2 or v3
  - Fast Leave Enabled

If you are using statically-assigned IP addresses to facilitate external control, know that the actual flow of KVM data will continue to utilize a Link Local addressing scheme

::: danger WARNING
In my experience, setting static addresses in the configuration of the transmitters can cause issues, and is unnecessary. Only assign static addresses to receivers.
:::

### Configuring Cisco CBS/SG Switches for XDIP

- Jumbo Frames
  1. Navigate to `Port Management` > `Port Settings`
  2. Check the box for Jumbo Frames > `Enable`
  3. Apply and save
- VLANs
  - Do not run your XDIPs on the default VLAN. Crate a dedicated VLAN for your XDIP network.
- IGMP Settings
  1. In the top navigation bar, switch from "Basic" mode to "Advanced"
  2. Navigate to `Multicast` > `Properties`
  3. Check the box labeled "Bridge Multicast Filtering Status"; Apply and save
  4. Navigate to `Multicast` > `IPv4 Mutlicast Configuration` > `IGMP Snooping`
  5. Check the box "IGMP Snooping Status"
  6. Check the box "IGMP Querier Status"
  7. In the table below, select your dedicated XDIP VLAN and click edit.
  8. In the window, Enable IGMP Snooping, select v3, and enable Immediate Leave

### Configuring Netgear AVLine Switches for XDIP

In my very limited experience using the AV GUI, the "Data" profile is functional and sufficient. It uses IGMPv2 with Fast Leave, and querier election enabled.
