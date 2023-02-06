#OperatingSystems [[DigitalSystem_design]]
# Bandwidth
- In bits per second, refers to the speed of bit transmission a medium can accommodate.
- In hertz, refers to the range of frequencies that a medium can allow to pass.
- Certain bit rates may be needed for accurate data transmission.
# Throughput
- How fast data can actually be transmitted, when factoring in congestion, interference etc
- Bandwidth is potential bit rate throughput gives true measurement.
- Lowest transmission speed acts as a bottleneck, so with multiple transmission speeds the lowest bandwidth becomes the one in use 
# Sampling
- Sampling of signals is done at twice the bandwidth
- Min of two readings per cycle needed to reconstruct signal.

> ![[Pasted image 20211030000108.png|500]]
> ![[Pasted image 20211030000156.png|500]]

- Therefore needs transmission bandwidth that accommodates 48 kbps 
# Network categories

> ![[Pasted image 20211030000759.png|500]]

## LAN
- Multiple layouts exist for LAN networks, the type used typically depends on 

> ![[Pasted image 20211030162605.png|450|450]]
> ![[Pasted image 20211030163214.png|450|450]]

## Point to point WAN
- Private WAN used for private communication in an organization

> ![[Pasted image 20211030163447.png]]

# Heterogeneous network
- More representative of modern networks, consisting of multiple types of networks.



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
> ![[Pasted image 20211029231531.png|500|500]]
1. Message
2. Sender
3. Receiver
4. Medium
5. Protocol 

## Transmission data properties
- Data operates on a range of frequencies (bandwidth) regardless of data type.
- Mediums are categorized by different bandwidths.
- Guided: wired transmission
- Unguided: wireless transmission 
## Header
- Contains key details of data packets such as destination and origin IP. 

