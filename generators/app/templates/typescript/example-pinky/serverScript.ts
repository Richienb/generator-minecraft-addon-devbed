/// <reference types="minecraft-scripting-types-server" />

import { DevBed } from "devbed"

namespace Server {
    const bed = new DevBed(server)

    bed.on("initialize", () => {
        // Register any events you will send to the client
        // bed.newEvent(...)

        // Register any components you will attach to game objects
        // bed.component(...)

        // Set up any events you wish to listen to
        bed.on("pinky", (eventData) => {
            if (eventData.narf) {
                // Send chat message
                bed.chat("The same thing we do every night Client. TRY TO TAKE OVER THE WORLD.")
            }
        })

        // Enable full logging, useful for seeing errors, you will probably want to disable this for
        // release versions of your scripts.
        // Generally speaking it's not recommended to use trigger in initialize, but for configuring logging it's fine.
        bed.logconfig({
            error: true,
            warn: true,
            info: true
        })
    })
}
