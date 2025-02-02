---
editLink: false
---

# Default VLANs

| Name            | ID  | Prefix                                      | Color  | Notes                     |
| --------------- | --- | ------------------------------------------- | ------ | ------------------------- |
| Trunk           |     | <span :class="black">n####</span>           | Black  | nT1, nT2 / nDPCT, nDSHX   |
| Management      | 1   |                                             |        |                           |
| Control         | 10  | <span :class="$style.green">nCT</span>      | Green  | 10.0.1.0/24               |
| Com/Video       | 20  | <span :class="$style.yellow">nHX</span>     | Yellow | 10.0.2.0/24               |
| KVM             | 30  | <span :class="$style.pink">nKVM</span>      | Pink   | Link Local or 10.0.3.0/24 |
| Console         | 40  | <span :class="$style.sand">nDG / nRV</span> | Sand   | DiGiCo / Rivage           |
| Dante Primary   | 100 | <span :class="$style.blue">nDP</span>       | Blue   | Link Local                |
| Dante Secondary | 200 | <span :class="$style.red">nDS</span>        | Red    | Link Local                |
| AVB Primary     | 110 | <span :class="$style.blue">nAVB-P</span>    | Blue   | 10.0.110.0/24             |
| AVB Secondary   | 210 | <span :class="$style.red">nAVB-S</span>     | Red    | 10.0.210.0/24             |
