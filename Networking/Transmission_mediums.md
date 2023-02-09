> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 23/01/2023 - 14:21
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Transmission mediums
- Multiple access technologies exists for connecting [[Internet_architecture#Internet architecture|network edges]] to edge routers 
- Edge routers act as an intermediary from users to the network core 
- Data transmission can either be **upstream** (data uploaded) or **downstream** (data downloaded)
## Ethernet
- A widely-used computer network technology that uses a physical cable to connect devices and transmit data within a local area network (LAN). 
- It operates at the data link layer of the OSI model and provides fast and efficient data transfer that's easy to setup and supports  a wide variety of data transfer speeds

### Ethernet switch 
- A network device that connects devices on a LAN and forwards data between them. 
- More efficient than a hub, as it only sends data to the intended device, and is a key component in ensuring network performance.

> ![[Pasted image 20230209135219.png|500|500]]
> example of enterprise network connecting a mix of switches and routers 

## Digital subscriber line (DSL)
- A physical cable to a **DSL modem** (a device that connects other devices to the internet using DSL), converts [[Transmission_mediums#Digital transmission|digital signals]] from these devices to [[Transmission_mediums#Analogue transmission|analogue transmissions]] that work over network lines. This can also be done vise versa 
- Uses an existing telephone line, the splitter transmits voice data from the phone line and data from devices at different frequencies that travel to the telephone net and internet respectively

> ![[Pasted image 20230206151918.png|450|450]]

## Cable-based access
- Data transmitted over shared cable structure, transmits digital signal, low cost and high speed
- Similar to DSL uses **frequency division multiplexing (FDM)** to have distinct frequency bands for each channel
- Homes use shared access network cable that goes directly to the users **ISP** (internet service provider). Shared broadcast medium to headhend, speed can slow during peak times as channel has to be divided between users

> ![[Pasted image 20230206155325.png|550|550]]

## Fiber to home (FH)
- Uses a fiber-optic cable network that runs directly to a users home, transmission is dedicated and extremely fast but difficult to install
- Better security as less potential for interference, 5G fixed wireless is also an easier and similar approach, with no wiring and dedicated data transfer 

> ![[Pasted image 20230206160313.png|550|550]]

# Transmission types
## Digital transmission
- Continuous in time, discrete in level, 1 indicates positive voltage, 0 indicates no voltage
- **Bit rate (bps)** is used to describe frequency
- Less susceptible to noise and easier to compress than analogue transmission 

> ![[Pasted image 20211029233411.png|450|450]]

## Analogue transmission
- Continuous in time and level 
- Analogue data needs to digitized before going through sampling
- **Bandwidth** (measured in hertz) refers to the range of frequencies a signal can occupy (eg. the human voice)

> ![[Pasted image 20211029232819.png|350|350]]

## Network sampling
- When data is [[Transmission_mediums#Analogue transmission|transmitted in analogue]], sampling is required to reconstruct the signal in digital format. This is done through sampling
- For data to be reliably be transformed to digital, a minimum of two samples need to be taken each cycle. 

> ![[Pasted image 20211030000108.png|400|400]]

- **Hertz** refers to the number of times an oscillation occurs in a second, therefore the number of samples required for signal reconstruction is 2 x Hertz
- Sampling of signals is done at twice the bandwidth

> ![[Pasted image 20211030000156.png|400|400]]
