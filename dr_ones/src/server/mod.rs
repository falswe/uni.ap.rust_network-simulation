use std::collections::{HashMap, HashSet};
use crossbeam_channel::{Receiver, Sender};
use wg_2024::{config::Config, controller::NodeEvent, network::NodeId, packet::{Packet, PacketType}};

pub struct Server {
    id: NodeId,
    sim_contr_send: Sender<NodeEvent>,
    packet_recv: Receiver<Packet>,
    packet_send: HashMap<NodeId, Sender<Packet>>,
    seen_flood_ids: HashSet<u64>,
    topology: Option<Config>
}

pub struct ServerOptions {
    pub id: NodeId,
    pub controller_send: Sender<NodeEvent>,
    pub packet_recv: Receiver<Packet>,
    pub packet_send: HashMap<NodeId, Sender<Packet>>,
}

impl Server {
    pub fn new(options: ServerOptions) -> Self {
        Self {
            id: options.id,
            sim_contr_send: options.controller_send,
            packet_recv: options.packet_recv,
            packet_send: options.packet_send,
            seen_flood_ids: HashSet::new(),
            topology: None
        }
    }

    pub fn run(&mut self) {
        loop {
            let received_packet = self.packet_recv.recv().unwrap();
            match received_packet.pack_type {
                PacketType::Nack(ref _nack) => println!("[SERVER {}] Nack received.", self.id),
                PacketType::Ack(ref _ack) => println!("[SERVER {}] Ack received.", self.id),
                PacketType::MsgFragment(ref _fragment) => println!("[SERVER {}] MsgFragment received.", self.id),
                PacketType::FloodRequest(ref _floodReq) => println!("[SERVER {}] FloodRequest received.", self.id),
                PacketType::FloodResponse(ref _floodRes) => println!("[SERVER {}] FloodResponse received.", self.id),
            }
        }
    }
}
