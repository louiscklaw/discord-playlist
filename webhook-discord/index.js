const webhook = require("webhook-discord");
require("dotenv").config();

const WEBHOOK_URL = process.env["WEBHOOK_URL"];

const Hook = new webhook.Webhook(WEBHOOK_URL);

Hook.info("WEBHOOK NAME", "Info");
Hook.warn("WEBHOOK NAME", "Warning message");
Hook.err("WEBHOOK NAME", "Error");
Hook.success("WEBHOOK NAME", "Yay we did something right");
