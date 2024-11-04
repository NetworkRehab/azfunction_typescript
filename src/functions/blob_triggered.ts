import { app, InvocationContext } from "@azure/functions";

export async function blob_triggered(blob: Buffer, context: InvocationContext): Promise<void> {
    context.log(`Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
}

app.storageBlob('blob_triggered', {
    path: 'container-example/file.txt',
    connection: 'FUNCTIONS_WORKER_RUNTIME',
    handler: blob_triggered
});
