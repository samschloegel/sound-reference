# Power Over Ethernet (PoE)

As the name implies, some devices can provide power to other devices over an ethernet connection. Typically, the power is supplied by a PoE-capable switch, or by a dedicated single-port power supply called a PoE injector.

## Suppliers and Consumers

A PoE device which supplies power to other devices is technically called a **"PSE"** or **Power Sourcing Equipment**.

A PoE device which consumes power from a PSE is technically called a **"PD"** or **Powered Device**.

Some devices (typically switches) can do both. For example, a small 8-port switch may be a PD capabale of receiving its power from a high-powered PSE, and can then serve as a PSE itself by passing on some of that power to other downstream PDs.

## Choosing Eqiupment

When choosing a network switch to supply PoE, there are two primary variables to consider:

- Maximum power required **from any single port**

- Maximum power required **in total from all ports**

### Maximum Power per Port

There are several PoE standards that were developed over time [(Wikipedia)](https://en.wikipedia.org/wiki/Power_over_Ethernet)

There are different versions of PoE in common use today, and you may see references to the following:

- `PoE`: 802.3af - _approx. 15W max per port_
- `PoE+`: 802.3at - _approx. 30W max per port_
- `PoE++`: 802.3bt - _approx. 60W max per port_

The PoE standards provide a method for PSEs and PDs to negotiate an appropriate supply of power over their link, which creates a plug-and-play experience for users and avoids damage to equipment.

::: warning

There are also older versions of PoE which were developed in proprietary contexts before standardization, as well as static-supply PoE injectors which do not negotiate power levels and can therefor damage some devices.

:::

### Maximum Power Overall

Switch specification sheets will tell you the "power budget" of a PoE-capable switch. This is the total amount of power the switch can output (don't confuse this with the amount of power a switch will consume, which will be a bit higher).

## Understanding Specifications

**Model:** Cisco SG350-28MP

| Specification                       | Notes                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| **PoE Type:** 24 ports support PoE+ | Of the 24 ports which are PoE-capable (GE1-GE24), any given port can provide up to 30W. |
| **Power Budget:** 382W              | The total power consumption of connected PDs cannot exceed 382W.                        |

::: tip Fan Noise
If you are concerned about fan noise in a quiet show environment, be aware that switches with higher power budgets often have larger power supplies, higher heat dissipation, and therefore louder fans.
:::

## Application Example

Intercom Tech Table Distro

Powered devices:

| Model     | Qty    | Power Consumption |
| --------- | ------ | ----------------- |
| HRM-4X    | 10     | 14W               |
| HKB-2X    | 4      | 14W               |
| HXII-BP   | 1      | 4W                |
| **Total** | **14** | **200W**          |

Switch candidates:

| Model            | PoE Ports | Type    | Power Budget | Result                |
| ---------------- | --------- | ------- | ------------ | --------------------- |
| Cisco SG350-10P  | 8 ❌      | PoE+ ✅ | 62W ❌       | ❌ Not enough ports   |
| Cisco SG350-28P  | 24 ✅     | PoE+ ✅ | 195W ❌      | ❌ Not enough power   |
| Cisco SG350-28MP | 24 ✅     | PoE+ ✅ | 382W ✅      | ✅ Meets requirements |
