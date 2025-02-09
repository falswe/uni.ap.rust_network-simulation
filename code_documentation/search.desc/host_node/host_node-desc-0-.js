searchState.loadedDescShard("host_node", 0, "Common utilities and traits for client and server.\nCommon host nodes functionality shared across clients and …\nAdds a fragment to the NACK collection for errors in …\nAdds a fragment to the NACK collection for errors in …\nAdds a fragment to the pending fragments collection for …\nAdds a fragment to the pending fragments collection for …\nAdds a serializable message to the pending messages queue …\nAdds a serializable message to the pending messages queue …\nReturns <code>true</code> if the current node is a client, or <code>false</code> if …\nReassembles a complete message from its fragments and …\nReassembles a complete message from its fragments and …\nCreates a graph representation of the network topology …\nCreates a graph representation of the network topology …\nCreates a routing header for the receiver using a …\nCreates a routing header for the receiver using a …\nFragments a serialized message into smaller pieces of …\nFragments a serialized message into smaller pieces of …\nGenerates packets from a serializable message by …\nGenerates packets from a serializable message by …\nSerializes a serializable message into a vector of bytes …\nSerializes a serializable message into a vector of bytes …\nBuilds packets from a serializable message and forwards …\nBuilds packets from a serializable message and forwards …\nChecks for pending fragments with routing errors and …\nChecks for pending fragments with routing errors and …\nChecks for pending serializable messages and sends them if …\nChecks for pending serializable messages and sends them if …\nDeletes a NACK entry for a fragment with error in routing …\nDeletes a NACK entry for a fragment with error in routing …\nDeletes a pending fragment identified by its session id …\nDeletes a pending fragment identified by its session id …\nDeletes all pending serializable messages for the given …\nDeletes all pending serializable messages for the given …\nDetermines whether the destination node is reachable from …\nDetermines whether the destination node is reachable from …\nRetrieves fragments that have encountered an error in …\nRetrieves the Packet Delivery Ratio (PDR) estimation for a …\nFinds and returns the recipient NodeId for a pending …\nFinds and returns the recipient NodeId for a pending …\nGets the collection of pending fragments indexed by …\nGets the list of pending serializable messages along with …\nRetrieves a single pending fragment for a given session …\nRetrieves a single pending fragment for a given session …\nRetrieves all the stored packet fragments for a given …\nRetrieves the current network topology configuration, if …\nGenerates and returns a formatted string representation of …\nGenerates and returns a formatted string representation of …\nProcesses an ACK packet by removing the corresponding …\nProcesses an ACK packet by removing the corresponding …\nHandles an incoming chat message that includes sender, …\nHandles an incoming chat message that includes sender, …\nHandles a client list request from the specified NodeId.\nHandles a client list request from the specified NodeId.\nHandles a client list response containing a list of …\nHandles a client list response containing a list of …\nHandles an incoming error message from the specified …\nHandles an incoming error message from the specified …\nHandles an incoming file list request from the specified …\nHandles an incoming file list request from the specified …\nHandles an incoming file list response containing a list …\nHandles an incoming file list response containing a list …\nHandles an incoming file request from the specified NodeId …\nHandles an incoming file request from the specified NodeId …\nHandles an incoming file response from the specified …\nHandles an incoming file response from the specified …\nHandles an incoming flood response packet to update the …\nHandles an incoming flood response packet to update the …\nDispatches a received serializable message to the …\nDispatches a received serializable message to the …\nProcesses an incoming message fragment by either …\nProcesses an incoming message fragment by either …\nProcesses a NACK packet by retransmitting the …\nProcesses a NACK packet by retransmitting the …\nHandles a successful registration message from the …\nHandles a successful registration message from the …\nHandles a registration request to the communication server …\nHandles a registration request to the communication server …\nHandles a server type request from the specified NodeId.\nHandles a server type request from the specified NodeId.\nHandles a server type response from the specified NodeId …\nHandles a server type response from the specified NodeId …\nHandles an incoming routed packet by dispatching it to the …\nHandles an incoming routed packet by dispatching it to the …\nInitializes the network topology based on the connected …\nInitializes the network topology based on the connected …\nInitiates a flood request to discover or refresh the …\nInitiates a flood request to discover or refresh the …\nUpdates the Packet Delivery Ratio estimation based on a …\nUpdates the Packet Delivery Ratio estimation based on a …\nUpdates the Packet Delivery Ratio estimation based on a …\nUpdates the Packet Delivery Ratio estimation based on a …\nRemoves all stored packet fragments for the specified …\nResets the network topology to an empty configuration.\nResets the network topology to an empty configuration.\nRuns the node’s main loop or core processing logic.\nSets the fragments associated with NACKs for errors in …\nUpdates the Packet Delivery Ratio (PDR) estimation for the …\nSets the collection of pending fragments.\nSets the collection of pending serializable messages.\nSets the packet fragments for a specific session.\nSets the network topology configuration.\nUpdates the network topology based on information …\nUpdates the network topology based on information …")