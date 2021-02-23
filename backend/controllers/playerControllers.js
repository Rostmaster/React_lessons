import mongoose from 'mongoose';
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model('Player', PlayerSchema);

//  ADD

export const addPlayer = (req, res) => {
    let newPlayer = new Player(req.body);
    newPlayer.save((err, player)=> {
        if (err){
            res.send(err);
        }
        res.json(player);
    });
}

// GET ALL

export const getPlayers = (req, res )=>{
    Player.find({}, (err, player) => {
        if(err){
            res.send(err);
        }
        res.json(player);
    });
}

// GET ONE

export const getPlayerWithId = (req, res) => {
    Player.findById(req,params.id, (err,player) =>{
        if(err){
            res.send(err);
        }
        res.json(player);
    });
}

// UPDATE ONE

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body,{new: true}, (err,player)=>{
        if(err){
            res.send(err);
        }
        res.json(player);
    });
}

// DELETE ONE

export const deletePlayer = (req, res) => {
    Player.remove({_id: req.params.id }, (err,player) => {
        if(err){
            res.send(err);
        }
        res.json({message:"Successfully deleted a player"});
    });
}