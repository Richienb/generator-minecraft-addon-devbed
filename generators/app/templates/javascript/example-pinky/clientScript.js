import { DevBed } from "devbed"

const bed = new DevBed(client)

// Setup which events to listen for
bed.on("initialize", () => {
    // Register any events you will send to the client
    // bed.newEvent(...)

    // Register any components you will attach to game objects
    // bed.component(...)

    // Set up any events you wish to listen to
    // bed.on(...)

    // Enable full logging, useful for seeing errors, you will probably want to disable this for
    // release versions of your scripts.
    // Generally speaking it's not recommended to use trigger in initialize, but for configuring logging it's fine.
    bed.logconfig({
        error: true,
        warn: true,
        info: true
    })
})

// per-tick updates
bed.on("update", () => {
    // Any logic that needs to happen every tick on the client.
})

// per-tick updates
bed.on("first_tick", () => {
    // Any logic that needs to happen on the first tick on the client.
    
    // Send chat message
    bed.chat("What are we going to do tonight Server?")

    // Trigger custom event
    bed.trigger("pinky", { narf: true })
})