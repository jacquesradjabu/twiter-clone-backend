import data from"../data.js";

const getCurentUser = (req, res) => {
    try {
        res.json( data['current-user'] );
    } catch (error) {
        
    }
}

export default getCurentUser