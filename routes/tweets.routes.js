import { Router } from "express";
import { getTweets } from "../controllers/tweets.controllers.js";
import { postTweets } from "../controllers/tweets.controllers.js";

const tweetsRouts = Router();

tweetsRouts.get('/tweets', getTweets);
tweetsRouts.post('/tweets', postTweets);

export default tweetsRouts;