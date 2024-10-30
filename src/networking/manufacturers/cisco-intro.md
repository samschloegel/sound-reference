# Understanding Cisco Products

## Series

There are several series of Cisco switches commonly provided by NY sound rental shops.

- SG300 Series - fully managed gigabit switches (end of support 2023)
- SG350 Series - replaces SG300 (end of sale 2023, support until Jan 2028)
- SG350X Series - fully managed, 10G uplink / stackable (end of sale 2022, support until July 2027)
- CBS350 Series - replaces SG350/SG350X (some models end of sale 2024)

## SG Series Model Numbers

The SGxxx series' of switches have similarly-structured model numbers. Some common models:

- SG300-20
- SG350-28
- SG350-28MP
- SG350X-24P

The model numbers are structured as follows:
SG[`AAAA`]-[`##`][`P`/`MP`]

- `AAAA`: Series (300, 350, 350X...) related to release date and support timeline. The X in 350X indicates 10Gbit trunk ports / stacking capability.

- `##`: The port count (i.e. SG350-28 has 28 ports - though it's important to check whether they are all Gigabit Ethernet vs SFP or Combo type).

- `P`/`MP`: Indicates total PoE power budget. For example, -28 (no PoE) / -28P (195W) / -28MP (382W)

## CBS Series Model Numbers

The SGxxx series' of switches have similarly-structured model numbers. Some common models:

- CBS350-28T-4G
- CBS350-28FP-4G
- CBS350-28FP-4X

The model numbers are structured as follows:
CBS350-[`AA`][`BB`]-[`C`][`D`]

- `AA` - General access port count - `8` / `24` / etc.

- `BB` - PoE supply - `T` (no PoE) / `P` (low PoE budget) / `FP` (high PoE budget)

- `CC` - Trunk port count - `2` / `4` / etc - check specs for port type (GE/SFP/SFP+)

- `DD` - Trunk port type - `G` (1Gbit) / `X` (10Gbit)
