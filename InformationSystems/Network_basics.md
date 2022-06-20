#OperatingSystems [[DigitalSystem_design]]
# Bandwidth
- In bits per second, refers to the speed of bit transmission a medium can accommodate.
- In hertz, refers to the range of frequencies that a medium can allow to pass.
- Certain bit rates may be needed for accurate data transmission.
# Throughput
- How fast data can actually be transmitted
- Bandwidth is potential bit rate throughput gives true measurement.
- eg. a highway meant to transfer 1000 cars per min being reduced to 100 due to congestion.
- If multiple transfer speeds are present, use lowest bandwidth as throughput, acts as a bottleneck. 
# Sampling 
- Sampling of signals is done at twice the bandwidth
- Min of two readings per cycle needed to reconstruct signal.
> ![[Pasted image 20211030000108.png|500]]
> ![[Pasted image 20211030000156.png|500]]
- Therefore needs transmission bandwidth that accommodates 48 kbps 
# Network categories
> ![[Pasted image 20211030000759.png|500]]

# LAN
- These can have multiple layouts
> ![[Pasted image 20211030162605.png|500]]
> ![[Pasted image 20211030163214.png|500]]
# Point to point WAN / Internetworks
- Private WAN used for private communication in an organization
> ![[Pasted image 20211030163447.png]]

# Heterogeneous network
- More representative of modern networks, consisting of multiple types of networks.

# Packet switching
- Method of creating temporary connections between devices using nodes called switches.
- Some lead to end device like a phone while others used for routing data.
- Less wasteful then having constant connections (point to point)
- Timeliness is important, if acknowledgment  isn't received soon enough a packet is dropped
> ![[Pasted image 20211030163652.png|500]]

## Switches
- Connect devices together
- Set of interlinked nodes
## Packets 
- Packets can follow different paths from source to destination. 
- Recompiled at end node.
# Circuit switching (time division)
- Networks connected by physical links, designed specifically for voice communication.
- Time division is whats used to allow multiple access by allocating time slots to users.
- Circuits can share links have have limited capacity but new links cant be made if capacity is reached.
- Each circuit allocated fixed amount of link capacity, wasted on silent telephone lines for example.
- Like a liquid, data flows continuously and path is fixed 
- Requires very high bandwidth to handle traffic.

# Circuit vs packet switching
- Packet switching is more cost efficient, packets don't don't need a dedicated channel to travel to their destination.
- Packet switching is more resource efficient, not using channels throughout the delivery of data.
- Circuit switching allows for data to be delivered at a consistent bandwidth
- Circuit switching allows for data to be delivered with minimum delay, better timeliness.

# Data communication systems
- Exchange of data between devices along a transmission medium.
- Effective communication requires certain criteria:
1. Delivery
2. Accuracy
3. Timeliness 
4. Jitter

## Delivery
- Data needs to arrive to correct device only
## Accuracy
- Data loss shoulden't occur from distortion or noise.
## Timeliness 
- Data packets must arrive without significant delay or else they'll be dropped
## Jitter
- The delay in packet arrival must be consistent.
## Components
![[Pasted image 20211029231531.png]]
1. Message
2. Sender
3. Receiver
4. Medium
5. Protocol 

# Transmission data properties
- Data operates on a range of frequencies (bandwidth) regardless of data type.
- Mediums are categorized by different bandwidths.
- Guided: wired transmission
- Unguided: wireless transmission 
# Header
- Contains key details of data packets such as destination and origin IP. 
# Digital transmission
- Continuous in time, discrete in level 
- For instance 1 for positive voltage and 0 as no voltage.
- Bit rate (bps) is used to describe frequency
![[Pasted image 20211029233411.png]]

# Analogue transmission
- Continuous in time and level 
- Analogue data needs to digitized before going through sampling
- Bandwidth in hertz refers to the range of frequencies a signal can occupy (eg. the human voice)
![[Pasted image 20211029232819.png]]
- amplitude typically just corresponds to voltage
