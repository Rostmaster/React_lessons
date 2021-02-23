import {
    addPlayer,
    getPlayerWithId,
    getPlayers,
    updatePlayer,
    deletePlayer
} from "../controllers/playerControllers";

export const routes = (app) => {
    
    app.route('/players')
    .post(addPlayer)
    .get(getPlayers);

    app.route('/player/:id')
    .get(getPlayerWithId)
    .put(updatePlayer)
    .delete(deletePlayer);
};