// A simple test script
console.log("Running automated unit tests...");

const appStatus = "broken";

if (appStatus === "healthy") {
    console.log("SUCCESS: All tests passed!");
    process.exit(0); // Exit code 0 means "Success" to the pipeline
} else {
    console.log("FAILURE: System is unhealthy!");
    process.exit(1); // Any exit code above 0 tells the pipeline to stop because of an error
}
