/// <reference types="minecraft-scripting-types-client" />

import { DevBed } from "devbed"

namespace Client {
    const bed = new DevBed(client)

    // Setup which events to listen for
    bed.on("initialize", () => {
        // Setup your listenToEvents and register client-side components here.
    })

    // per-tick updates
    bed.on("update", () => {
        // Any logic that needs to happen every tick on the client.
    })
}
