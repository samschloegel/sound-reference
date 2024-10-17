# LAGs

LAG means "Link Aggregate Group". It is a group of multiple switch ports which operate as a single virtual link or interface.

In live sound, LAGs are typically used for critical or high-traffic connections between switches, such as from FOH to Ampland. This is typically a group of 2 ports, whether they are 1000-BaseT copper RJ45 ports, or SFP ports utilizing multimode fiber.

LAGs provide two main benefits: Redundancy and Bandwidth.

## Redundancy

Conceptually, if one of the physical links in a LAG fails, the other link(s) carry all of the traffic. Detecting faults and correcting for them is achieved through different protocols, very commonly through a protocol called LACP.

::: tip EXAMPLE

Switch A has LAG 1 configured to use SFP port 27 and 28, with LACP enabled.

Switch B has the same LAG configuration as Switch A.

So long as at least one of the two physical links is working, the virtual link works.

If one of the two physical links fails, LACP handles the failure and directs all traffic over the functional link.

:::

## Bandwidth

A LAG contains multiple physical interfaces which are each capable of a certain bandwidth. Conceptually, having multiple interfaces and dividing traffic between them creates a virtual interface capable of carrying the sum of the individual links' bandwidth. The total bandwidth is reduced slightly by the data overhead of operating the LAG itself. Theoretically, a LAG consisting of two gigabit connections is capable of nearly two gigabit speeds.
