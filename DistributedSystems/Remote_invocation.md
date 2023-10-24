---
aliases:
  - RMI
---
> [!important]- Metadata
> **Tags:** #DistributedSystems 
> **Located:** DistributedSystems
> **Created:** 16/10/2023 - 18:54
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Remote invocation
- The process of invoking an operation on a separate computer using a given protocol 
- Message exchange handled through agreed protocol, protocols vary in reliability, scalability and performance. Implementation of these is a communication [[Distributed_systems#Middleware|middleware]]

## Protocol styles 
- **R**: request through fire and forget with no blocking on server side 
- **RR**: request-reply protocol, if reply lost a request may be repeated by client
- **RRA**: second reply from client to acknowledge a resource has been received 

| Style | Client  | Server | Client |
| ----- | ------- | ------ | ------ |
| R     | Request | -      | -      |
| RR    | Request | Reply  | -      |
| RRA      |Request         |Reply        |Acknowledgement        |
## Basic RMI procedure
- Client side:
```java
const int SENSOR_READING = 1
data Header { 
    int msgType;
    int payloadSize;
}
data SensorInfo {
    int sensorID;
    int reading
}
```

```java
TCPSocket socket = new TCPSocket() 
socket.connect(“143.94.13.8”, 2945) // connect to remote computer

Header h = new Header()
h.msgType = SENSOR_READING 
h.payloadSize = size(SensorInfo) 
socket.send(h) // send generic message header

SensorInfo info = new SensorInfo() 
info.reading = mySensor.getReading()
info.sensorID = MyID;
socket.send(info) // send operation specific data
socket.disconnect() // clean up
```
- Server side 

```java
const int SENSOR_READING = 1
data Header { 
    int msgType
    int payloadSize
}
data SensorInfo { 
    int reading
}
```

```java
TCPServer server = new TCPServer() 
server.bind(“localhost”, 2945)

while (true) {
    TCPSocket sock = server.accept()
    if (client != null) {
        byte buf[] = sock.resv(size(header))
        Header hdr =
    null) { 
    sock.recv(size(Header)) 
    (Header) buf
    buf = sock.recv(hdr.payloadSize)
    if (hdr.msgType == SENSOR_READING) {
    SensorInfo info = (SensorInfo) buf
    saveSensorData(info, sock.addr)
    }
sock.disconnect()
}
}
```